import { supabase } from '../lib/supabase';

export const getProfileByUsername = async (username: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();
  return { data, error };
};

export const getUserTests = async (userId: string, limit = 10) => {
  const { data, error } = await supabase
    .from('typing_tests')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);
  return { data, error };
};
