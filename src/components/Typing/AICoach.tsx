import React from 'react';
import { analyzeTestResult, type CoachingTip } from '../../services/aiService';
import { Lightbulb, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  wpm: number;
  accuracy: number;
  mistakes: Record<string, number>;
}

export const AICoach: React.FC<Props> = ({ wpm, accuracy, mistakes }) => {
  const tips = analyzeTestResult(wpm, accuracy, mistakes);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
          <Lightbulb size={20} />
        </div>
        <h3 className="text-xl font-bold italic tracking-tighter">AI COACH ANALYSIS</h3>
      </div>

      <div className="grid gap-4">
        {tips.map((tip, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start group hover:border-white/20 transition-all"
          >
            <div className={`mt-1 p-2 rounded-lg ${
              tip.impact === 'high' ? 'bg-destructive/10 text-destructive' : 
              tip.impact === 'medium' ? 'bg-yellow-500/10 text-yellow-500' : 
              'bg-green-500/10 text-green-500'
            }`}>
              {tip.impact === 'high' ? <AlertTriangle size={18} /> : 
               tip.impact === 'medium' ? <Lightbulb size={18} /> : 
               <CheckCircle2 size={18} />}
            </div>
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">{tip.title}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                  tip.impact === 'high' ? 'bg-destructive/20 text-destructive' : 
                  tip.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-500' : 
                  'bg-green-500/20 text-green-500'
                }`}>
                  {tip.impact} Priority
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
            </div>
            
            <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
               <ChevronRight size={20} className="text-muted-foreground" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 flex items-center justify-between">
         <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground">
             <StarIcon size={24} />
           </div>
           <div>
             <div className="font-bold">Recommendation</div>
             <p className="text-xs text-muted-foreground">Try the "Accuracy King" Challenge next</p>
           </div>
         </div>
         <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold">Start Now</button>
      </div>
    </div>
  );
};

const StarIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);
