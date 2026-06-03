export type Profile = {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  league_rank: string;
  total_xp: number;
  level: number;
  current_streak: number;
  max_streak: number;
  best_wpm: number;
  avg_wpm: number;
  avg_accuracy: number;
  tests_completed: number;
  created_at: string;
};

export type TypingTest = {
  id: string;
  user_id: string;
  mode: 'time' | 'words' | 'quote' | 'developer';
  duration: number;
  word_count: number;
  wpm: number;
  raw_wpm: number;
  accuracy: number;
  consistency: number;
  correct_chars: number;
  incorrect_chars: number;
  created_at: string;
};

export type League = {
  id: string;
  name: string;
  min_xp: number;
  rank_order: number;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon_url: string | null;
  xp_reward: number;
};
