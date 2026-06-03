-- TypeForge Database Schema (Supabase/PostgreSQL)

-- Enable Necessary Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: profiles
-- Extends Supabase Auth users
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  country_code TEXT,
  league_rank TEXT DEFAULT 'Bronze',
  total_xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  current_streak INTEGER DEFAULT 0,
  max_streak INTEGER DEFAULT 0,
  best_wpm NUMERIC(5,2) DEFAULT 0,
  avg_wpm NUMERIC(5,2) DEFAULT 0,
  avg_accuracy NUMERIC(5,2) DEFAULT 0,
  tests_completed INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: typing_tests (Historical records)
CREATE TABLE typing_tests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  mode TEXT NOT NULL, -- 'time', 'words', 'quote', 'developer'
  duration INTEGER, -- in seconds
  word_count INTEGER,
  wpm NUMERIC(5,2) NOT NULL,
  raw_wpm NUMERIC(5,2) NOT NULL,
  accuracy NUMERIC(5,2) NOT NULL,
  consistency NUMERIC(5,2),
  correct_chars INTEGER,
  incorrect_chars INTEGER,
  difficulty TEXT, -- 'easy', 'medium', 'hard'
  language TEXT DEFAULT 'english',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: leagues
CREATE TABLE leagues (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL, -- 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master'
  min_xp INTEGER NOT NULL,
  rank_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: achievements
CREATE TABLE achievements (
  id TEXT PRIMARY KEY, -- slug style: '50-wpm-club'
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_url TEXT,
  xp_reward INTEGER DEFAULT 100,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: user_achievements
CREATE TABLE user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_id TEXT REFERENCES achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, achievement_id)
);

-- Table: daily_challenges
CREATE TABLE daily_challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  goal_type TEXT NOT NULL, -- 'wpm', 'tests', 'accuracy', 'streak'
  goal_value NUMERIC NOT NULL,
  xp_reward INTEGER NOT NULL,
  coins_reward INTEGER DEFAULT 0,
  active_date DATE UNIQUE NOT NULL DEFAULT CURRENT_DATE
);

-- Table: user_challenges
CREATE TABLE user_challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  challenge_id UUID REFERENCES daily_challenges(id) ON DELETE CASCADE,
  is_completed BOOLEAN DEFAULT FALSE,
  progress NUMERIC DEFAULT 0,
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, challenge_id)
);

-- Table: battles (Real-time Multiplayer)
CREATE TABLE battles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_code TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'waiting', -- 'waiting', 'playing', 'finished'
  mode TEXT DEFAULT 'time',
  duration INTEGER DEFAULT 60,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  finished_at TIMESTAMP WITH TIME ZONE
);

-- Table: battle_participants
CREATE TABLE battle_participants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  battle_id UUID REFERENCES battles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  wpm NUMERIC(5,2) DEFAULT 0,
  accuracy NUMERIC(5,2) DEFAULT 0,
  is_ready BOOLEAN DEFAULT FALSE,
  finish_time INTERVAL,
  UNIQUE(battle_id, user_id)
);

-- Table: streaks
CREATE TABLE streaks (
  user_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  last_active_date DATE DEFAULT CURRENT_DATE,
  current_streak INTEGER DEFAULT 1,
  max_streak INTEGER DEFAULT 1
);

-- Table: developer_snippets (For Developer Mode)
CREATE TABLE developer_snippets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  language TEXT NOT NULL,
  code TEXT NOT NULL,
  difficulty TEXT,
  title TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: typing_quotes (For Quote Mode)
CREATE TABLE typing_quotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  text TEXT NOT NULL,
  author TEXT,
  source TEXT,
  length_category TEXT, -- 'short', 'medium', 'long'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: xp_transactions
CREATE TABLE xp_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  source TEXT NOT NULL, -- 'test', 'challenge', 'achievement'
  source_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Row Level Security (RLS) Policies

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE typing_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_challenges ENABLE ROW LEVEL SECURITY;

-- Logic for updating profile stats on test completion
CREATE OR REPLACE FUNCTION update_profile_stats()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles
  SET 
    tests_completed = tests_completed + 1,
    total_xp = total_xp + (NEW.wpm * NEW.accuracy / 100 * (NEW.duration / 60.0 + 1)),
    best_wpm = GREATEST(best_wpm, NEW.wpm),
    avg_wpm = (avg_wpm * tests_completed + NEW.wpm) / (tests_completed + 1),
    avg_accuracy = (avg_accuracy * tests_completed + NEW.accuracy) / (tests_completed + 1),
    updated_at = NOW()
  WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_typing_test_completed
AFTER INSERT ON typing_tests
FOR EACH ROW EXECUTE FUNCTION update_profile_stats();
