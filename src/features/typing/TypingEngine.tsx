import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Hash, Quote, Code, RotateCcw, Zap, Target, TrendingUp, Globe, Palette, ChevronDown, Search, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import { LANGUAGES, LANGUAGE_GROUPS, type Language } from '../../data/languages';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Themes ──────────────────────────────────────────────────────────────────
export interface Theme {
  id: string;
  name: string;
  bg: string;
  surface: string;
  border: string;
  text: string;
  muted: string;
  primary: string;
  correct: string;
  incorrect: string;
  accent: string;
}

export const THEMES: Theme[] = [
  {
    id: 'midnight', name: '🌑 Midnight',
    bg: '#0a0a0f', surface: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.06)',
    text: '#e2e8f0', muted: '#475569', primary: '#818cf8', correct: '#34d399', incorrect: '#f87171', accent: '#818cf8',
  },
  {
    id: 'dracula', name: '🧛 Dracula',
    bg: '#282a36', surface: 'rgba(68,71,90,0.6)', border: 'rgba(98,114,164,0.4)',
    text: '#f8f8f2', muted: '#6272a4', primary: '#bd93f9', correct: '#50fa7b', incorrect: '#ff5555', accent: '#ff79c6',
  },
  {
    id: 'nord', name: '🧊 Nord',
    bg: '#2e3440', surface: 'rgba(59,66,82,0.6)', border: 'rgba(76,86,106,0.5)',
    text: '#eceff4', muted: '#4c566a', primary: '#88c0d0', correct: '#a3be8c', incorrect: '#bf616a', accent: '#81a1c1',
  },
  {
    id: 'solarized', name: '☀️ Solarized',
    bg: '#002b36', surface: 'rgba(0,43,54,0.8)', border: 'rgba(7,54,66,0.6)',
    text: '#839496', muted: '#586e75', primary: '#268bd2', correct: '#859900', incorrect: '#dc322f', accent: '#2aa198',
  },
  {
    id: 'rose-pine', name: '🌹 Rosé Pine',
    bg: '#191724', surface: 'rgba(31,29,46,0.7)', border: 'rgba(64,60,83,0.5)',
    text: '#e0def4', muted: '#6e6a86', primary: '#c4a7e7', correct: '#9ccfd8', incorrect: '#eb6f92', accent: '#f6c177',
  },
  {
    id: 'catppuccin', name: '🐱 Catppuccin',
    bg: '#1e1e2e', surface: 'rgba(49,50,68,0.7)', border: 'rgba(69,71,90,0.5)',
    text: '#cdd6f4', muted: '#6c7086', primary: '#cba6f7', correct: '#a6e3a1', incorrect: '#f38ba8', accent: '#89dceb',
  },
  {
    id: 'gruvbox', name: '🍂 Gruvbox',
    bg: '#282828', surface: 'rgba(50,48,47,0.7)', border: 'rgba(80,73,69,0.5)',
    text: '#ebdbb2', muted: '#928374', primary: '#d79921', correct: '#98971a', incorrect: '#cc241d', accent: '#689d6a',
  },
  {
    id: 'tokyo-night', name: '🌆 Tokyo Night',
    bg: '#1a1b26', surface: 'rgba(26,27,38,0.8)', border: 'rgba(41,46,66,0.6)',
    text: '#c0caf5', muted: '#565f89', primary: '#7aa2f7', correct: '#9ece6a', incorrect: '#f7768e', accent: '#bb9af7',
  },
  {
    id: 'monokai', name: '🎨 Monokai',
    bg: '#272822', surface: 'rgba(57,58,52,0.7)', border: 'rgba(75,70,58,0.5)',
    text: '#f8f8f2', muted: '#75715e', primary: '#a6e22e', correct: '#66d9e8', incorrect: '#f92672', accent: '#fd971f',
  },
  {
    id: 'light', name: '☀️ Light',
    bg: '#f8fafc', surface: 'rgba(255,255,255,0.9)', border: 'rgba(0,0,0,0.08)',
    text: '#1e293b', muted: '#94a3b8', primary: '#6366f1', correct: '#16a34a', incorrect: '#dc2626', accent: '#8b5cf6',
  },
];

// ─── Language Selector ─────────────────────────────────────────────────────
const LanguageSelector: React.FC<{
  selected: Language;
  onSelect: (lang: Language) => void;
  theme: Theme;
}> = ({ selected, onSelect, theme }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = useMemo(() => {
    if (!search) return LANGUAGE_GROUPS;
    const q = search.toLowerCase();
    return LANGUAGE_GROUPS.map(g => ({
      ...g,
      codes: g.codes.filter(code => {
        const lang = LANGUAGES.find(l => l.code === code);
        return lang && (lang.name.toLowerCase().includes(q) || lang.nativeName.toLowerCase().includes(q));
      })
    })).filter(g => g.codes.length > 0);
  }, [search]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          background: theme.surface,
          border: `1px solid ${theme.border}`,
          color: theme.text,
        }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
      >
        <Globe size={14} style={{ color: theme.primary }} />
        <span>{selected.name}</span>
        <span style={{ color: theme.muted }} className="text-xs font-normal">{selected.nativeName}</span>
        <ChevronDown size={12} style={{ color: theme.muted }} className={cn('transition-transform', open && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{
              background: theme.bg,
              border: `1px solid ${theme.border}`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.5)`,
            }}
            className="absolute top-full mt-2 left-0 w-80 max-h-96 rounded-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Search bar */}
            <div className="p-3 border-b" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: theme.surface }}>
                <Search size={13} style={{ color: theme.muted }} />
                <input
                  autoFocus
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search languages..."
                  style={{ background: 'transparent', color: theme.text, outline: 'none' }}
                  className="flex-1 text-sm"
                />
                {search && (
                  <button onClick={() => setSearch('')}>
                    <X size={13} style={{ color: theme.muted }} />
                  </button>
                )}
              </div>
            </div>

            {/* List */}
            <div className="overflow-y-auto flex-1 p-2">
              {filtered.map(group => (
                <div key={group.label} className="mb-3">
                  <div className="px-3 py-1 text-xs font-bold tracking-wider" style={{ color: theme.muted }}>
                    {group.label}
                  </div>
                  {group.codes.map(code => {
                    const lang = LANGUAGES.find(l => l.code === code);
                    if (!lang) return null;
                    const isSelected = lang.code === selected.code;
                    return (
                      <button
                        key={code}
                        onClick={() => { onSelect(lang); setOpen(false); setSearch(''); }}
                        style={{
                          background: isSelected ? `${theme.primary}22` : 'transparent',
                          color: isSelected ? theme.primary : theme.text,
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 hover:opacity-80 transition-colors"
                      >
                        <span className="font-semibold">{lang.name}</span>
                        <span className="text-xs opacity-60">{lang.nativeName}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Theme Selector ────────────────────────────────────────────────────────
const ThemeSelector: React.FC<{
  selected: Theme;
  onSelect: (t: Theme) => void;
  theme: Theme;
}> = ({ selected, onSelect, theme }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ background: theme.surface, border: `1px solid ${theme.border}`, color: theme.text }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
      >
        <Palette size={14} style={{ color: theme.primary }} />
        <span>{selected.name}</span>
        <div className="flex gap-1">
          {[selected.primary, selected.correct, selected.incorrect].map((c, i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <ChevronDown size={12} style={{ color: theme.muted }} className={cn('transition-transform', open && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{ background: theme.bg, border: `1px solid ${theme.border}`, boxShadow: `0 20px 60px rgba(0,0,0,0.5)` }}
            className="absolute top-full mt-2 right-0 w-56 rounded-2xl overflow-hidden z-50 p-2"
          >
            {THEMES.map(t => (
              <button
                key={t.id}
                onClick={() => { onSelect(t); setOpen(false); }}
                style={{
                  background: t.id === selected.id ? `${theme.primary}22` : 'transparent',
                  color: t.id === selected.id ? theme.primary : theme.text,
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium hover:opacity-80 transition-colors"
              >
                <span>{t.name}</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ background: t.primary }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: t.correct }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: t.incorrect }} />
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Main Engine ──────────────────────────────────────────────────────────────
interface Stats {
  wpm: number;
  accuracy: number;
  rawWpm: number;
  correct: number;
  incorrect: number;
}

interface Props {
  initialMode?: 'time' | 'words' | 'quote' | 'developer';
}

export const TypingEngine: React.FC<Props> = ({ initialMode = 'time' }) => {
  const [mode, setMode] = useState<'time' | 'words' | 'quote' | 'developer'>(initialMode);
  const [duration, setDuration] = useState(30);
  const [selectedLang, setSelectedLang] = useState<Language>(LANGUAGES.find(l => l.code === 'en')!);
  const [selectedTheme, setSelectedTheme] = useState<Theme>(THEMES[0]);

  const [text, setText] = useState('');
  const [typed, setTyped] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isFinished, setIsFinished] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const initGame = useCallback(() => {
    const words = selectedLang.sampleText.split(' ');
    const count = mode === 'time' ? 80 : 30;
    let newText = selectedLang.sampleText;
    if (words.length < count) {
      // repeat to fill
      const repeated: string[] = [];
      while (repeated.length < count) repeated.push(...words);
      newText = repeated.slice(0, count).join(' ');
    }
    setText(newText);
    setTyped('');
    setStartTime(null);
    setTimeLeft(duration);
    setIsFinished(false);
    setStats(null);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [selectedLang, mode, duration]);

  useEffect(() => { initGame(); }, [initGame]);

  // Timer
  useEffect(() => {
    if (!startTime || isFinished) return;
    if (mode !== 'time') return;
    const id = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { finish(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [startTime, isFinished, mode]);

  const finish = useCallback(() => {
    if (isFinished) return;
    setIsFinished(true);
    setStartTime(prev => {
      if (!prev) return prev;
      const elapsed = (Date.now() - prev) / 60000; // minutes
      let correct = 0, incorrect = 0;
      typed.split('').forEach((ch, i) => {
        if (text[i] === ch) correct++;
        else incorrect++;
      });
      const rawWpm = Math.round((typed.length / 5) / Math.max(elapsed, 0.001));
      const wpm = Math.round((correct / 5) / Math.max(elapsed, 0.001));
      const accuracy = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 0;
      setStats({ wpm, accuracy, rawWpm, correct, incorrect });
      return prev;
    });
  }, [isFinished, typed, text]);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!startTime && val.length > 0) setStartTime(Date.now());
    setTyped(val);
    if (mode !== 'time' && val.length >= text.length) finish();
  };

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--tf-bg', selectedTheme.bg);
    root.style.setProperty('--tf-surface', selectedTheme.surface);
    root.style.setProperty('--tf-border', selectedTheme.border);
    root.style.setProperty('--tf-text', selectedTheme.text);
    root.style.setProperty('--tf-muted', selectedTheme.muted);
    root.style.setProperty('--tf-primary', selectedTheme.primary);
    root.style.setProperty('--tf-correct', selectedTheme.correct);
    root.style.setProperty('--tf-incorrect', selectedTheme.incorrect);
    root.style.setProperty('--tf-accent', selectedTheme.accent);
    document.body.style.background = selectedTheme.bg;
    document.body.style.color = selectedTheme.text;
  }, [selectedTheme]);

  const t = selectedTheme;

  return (
    <div
      style={{ fontFamily: '"Inter", sans-serif', color: t.text }}
      className="min-h-screen py-10 px-4 transition-colors duration-500"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto space-y-8">

        {/* ── Header Bar ── */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          {/* Mode tabs */}
          <div className="flex gap-1 p-1 rounded-2xl" style={{ background: t.surface, border: `1px solid ${t.border}` }}>
            {(['time', 'words', 'quote', 'developer'] as const).map(m => {
              const Icon = m === 'time' ? Timer : m === 'words' ? Hash : m === 'quote' ? Quote : Code;
              return (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  style={{
                    background: mode === m ? t.primary : 'transparent',
                    color: mode === m ? '#fff' : t.muted,
                    boxShadow: mode === m ? `0 2px 12px ${t.primary}44` : 'none',
                  }}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-bold transition-all"
                >
                  <Icon size={13} />
                  {m.toUpperCase()}
                </button>
              );
            })}
          </div>

          {/* Timer display for time mode */}
          {mode === 'time' && (
            <div className="flex gap-2">
              {[15, 30, 60, 120].map(d => (
                <button
                  key={d}
                  onClick={() => { setDuration(d); setTimeLeft(d); initGame(); }}
                  style={{
                    background: duration === d ? `${t.primary}22` : 'transparent',
                    color: duration === d ? t.primary : t.muted,
                    border: `1px solid ${duration === d ? t.primary : t.border}`,
                  }}
                  className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
                >
                  {d}s
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Language + Theme row ── */}
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <LanguageSelector selected={selectedLang} onSelect={setSelectedLang} theme={t} />
          <div className="flex items-center gap-3">
            <ThemeSelector selected={selectedTheme} onSelect={setSelectedTheme} theme={t} />
          </div>
        </div>

        {/* ── Timer bubble ── */}
        {mode === 'time' && startTime && !isFinished && (
          <div className="text-center">
            <motion.div
              key={timeLeft}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              style={{ color: timeLeft <= 5 ? t.incorrect : t.primary }}
              className="text-6xl font-black tracking-tighter"
            >
              {timeLeft}
            </motion.div>
          </div>
        )}

        {/* ── Main typing area or results ── */}
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key="game"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: t.surface,
                border: `1px solid ${t.border}`,
                boxShadow: `0 0 60px rgba(0,0,0,0.3)`,
              }}
              className="relative rounded-[2.5rem] p-10 md:p-14 min-h-[240px] cursor-text select-none"
              ref={textRef}
            >
              {/* Hint when not started */}
              {!startTime && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p style={{ color: t.muted }} className="text-sm font-medium animate-pulse">
                    Click here and start typing…
                  </p>
                </div>
              )}

              <div
                className="text-2xl leading-[2.4] font-medium tracking-wide break-words whitespace-pre-wrap relative z-10"
                style={{ color: t.muted, fontFamily: selectedLang.script === 'latin' ? '"Inter", sans-serif' : '"Noto Sans", sans-serif' }}
              >
                {text.split('').map((ch, i) => {
                  let color = t.muted;
                  if (i < typed.length) {
                    color = typed[i] === ch ? t.correct : t.incorrect;
                  }
                  const isCursor = i === typed.length;
                  return (
                    <span key={i} style={{ color, position: 'relative' }}>
                      {isCursor && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 0.9 }}
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '2px',
                            width: '2px',
                            height: '1.4em',
                            background: t.primary,
                            borderRadius: '1px',
                          }}
                        />
                      )}
                      {ch}
                    </span>
                  );
                })}
              </div>

              <input
                ref={inputRef}
                value={typed}
                onChange={onInput}
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                className="absolute opacity-0 inset-0 w-full h-full cursor-default"
              />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              {[
                { label: 'WPM', val: stats?.wpm ?? 0, icon: Zap, color: t.primary },
                { label: 'ACCURACY', val: `${stats?.accuracy ?? 0}%`, icon: Target, color: t.correct },
                { label: 'RAW WPM', val: stats?.rawWpm ?? 0, icon: TrendingUp, color: t.accent },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{ background: t.surface, border: `1px solid ${t.border}` }}
                  className="p-8 rounded-[2rem] text-center space-y-2"
                >
                  <div className="flex items-center justify-center gap-2" style={{ color: t.muted }}>
                    <s.icon size={14} style={{ color: s.color }} />
                    <span className="text-xs font-bold tracking-widest">{s.label}</span>
                  </div>
                  <div className="text-5xl font-black" style={{ color: s.color }}>
                    {s.val}
                  </div>
                </motion.div>
              ))}

              {/* Char breakdown */}
              <div
                style={{ background: t.surface, border: `1px solid ${t.border}` }}
                className="sm:col-span-3 p-6 rounded-[1.5rem] flex justify-center gap-10 text-sm"
              >
                <div className="flex items-center gap-2" style={{ color: t.correct }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: t.correct }} />
                  <span className="font-bold">{stats?.correct}</span>
                  <span style={{ color: t.muted }}>correct</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: t.incorrect }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: t.incorrect }} />
                  <span className="font-bold">{stats?.incorrect}</span>
                  <span style={{ color: t.muted }}>errors</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: t.muted }}>
                  Language:
                  <span style={{ color: t.text }} className="font-bold">{selectedLang.name}</span>
                  <span style={{ color: t.muted }}>({selectedLang.nativeName})</span>
                </div>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={initGame}
                style={{ background: `${t.primary}22`, color: t.primary, border: `1px solid ${t.primary}44` }}
                className="sm:col-span-3 py-5 rounded-[1.5rem] font-black text-xl flex items-center justify-center gap-3 transition-all hover:opacity-80 active:scale-95"
              >
                <RotateCcw size={22} />
                RETRY TEST
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Footer shortcuts ── */}
        {!isFinished && (
          <p className="text-center text-xs font-medium" style={{ color: t.muted }}>
            Press <kbd style={{ background: t.surface, border: `1px solid ${t.border}`, color: t.text, padding: '1px 6px', borderRadius: 5 }}>Tab</kbd> + <kbd style={{ background: t.surface, border: `1px solid ${t.border}`, color: t.text, padding: '1px 6px', borderRadius: 5 }}>Enter</kbd> to restart
          </p>
        )}
      </div>
    </div>
  );
};
