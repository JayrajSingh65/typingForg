-- Initial Seed Data for TypeForge

-- Seed Leagues
INSERT INTO leagues (name, min_xp, rank_order) VALUES
('Bronze', 0, 1),
('Silver', 5000, 2),
('Gold', 15000, 3),
('Platinum', 40000, 4),
('Diamond', 100000, 5),
('Master', 250000, 6)
ON CONFLICT (name) DO NOTHING;

-- Seed Achievements
INSERT INTO achievements (id, title, description, icon_url, xp_reward) VALUES
('first-test', 'Initiation', 'Complete your first typing test.', NULL, 100),
('50-wpm-club', 'Speed Demon', 'Reach 50 WPM in any test.', NULL, 250),
('80-wpm-master', 'Consistent Pro', 'Reach 80 WPM with >95% accuracy.', NULL, 500),
('accuracy-king', 'Precision Perfect', 'Complete a 60s test with 100% accuracy.', NULL, 1000),
('streak-7', 'Dedicated', 'Maintain a 7-day typing streak.', NULL, 1500)
ON CONFLICT (id) DO NOTHING;

-- Seed Daily Challenges (For current and next few days)
INSERT INTO daily_challenges (title, description, goal_type, goal_value, xp_reward, active_date) VALUES
('Morning Sprint', 'Complete 5 tests today.', 'tests', 5, 200, CURRENT_DATE),
('Precision Strike', 'Reach 98% accuracy in a 30s test.', 'accuracy', 98, 300, CURRENT_DATE + INTERVAL '1 day'),
('Speed Limit', 'Reach 70 WPM.', 'wpm', 70, 250, CURRENT_DATE + INTERVAL '2 days')
ON CONFLICT (active_date) DO NOTHING;
