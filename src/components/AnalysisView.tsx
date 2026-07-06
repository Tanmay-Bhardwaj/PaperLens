import { motion } from 'motion/react';
import { PaperAnalysis, DifficultyLevel } from '../types';
import Markdown from 'react-markdown';
import { ChevronLeft, Share2, BookmarkPlus, Lightbulb, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';

interface AnalysisViewProps {
  analysis: PaperAnalysis;
  level: DifficultyLevel;
  onBack: () => void;
}

export function AnalysisView({ analysis, level, onBack }: AnalysisViewProps) {
  return (
    <div className="min-h-screen text-neutral-200 font-sans selection:bg-emerald-500/30">
      
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Search
        </button>
        
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
            {level} Mode
          </span>
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-white">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-white">
            <BookmarkPlus className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col gap-12">
          
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {analysis.title}
            </h1>
            {analysis.authors && (
              <p className="text-lg text-neutral-400 font-mono text-sm">
                {analysis.authors}
              </p>
            )}
          </header>

          <section className="p-6 rounded-2xl glass-panel flex flex-col gap-4">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Lightbulb className="w-5 h-5" />
              <h2>Executive Summary</h2>
            </div>
            <div className="prose prose-invert prose-emerald max-w-none text-neutral-300 leading-relaxed font-serif">
              <Markdown>{analysis.summary}</Markdown>
            </div>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <section className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-neutral-500" />
              Deep Dive
            </h2>
            
            {analysis.sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-2xl glass-panel hover:bg-white/[0.04] transition-all"
              >
                <h3 className="text-xl font-medium text-white mb-4">{section.heading}</h3>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-2">Original Context</div>
                    <div className="font-mono text-xs text-neutral-400 bg-black/40 p-4 rounded-xl border border-white/5 overflow-hidden text-ellipsis line-clamp-4">
                      {section.originalTextSnippet}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-4">
                    <div>
                      <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-2">Explanation</div>
                      <div className="prose prose-invert prose-sm prose-emerald max-w-none text-neutral-300 font-serif">
                        <Markdown>{section.explanation}</Markdown>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                      <div className="text-xs font-semibold tracking-wider text-green-400 uppercase mb-1">Why It Matters</div>
                      <p className="text-sm text-neutral-300">{section.whyItMatters}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-neutral-500 uppercase">Key Insights</h3>
            <ul className="flex flex-col gap-3">
              {analysis.keyInsights.map((insight, idx) => (
                <li key={idx} className="flex gap-3 items-start p-4 rounded-xl glass-panel">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs text-emerald-400 shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-sm text-neutral-300 leading-relaxed font-serif">{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
             <h3 className="text-sm font-semibold tracking-wider text-amber-500/70 uppercase flex items-center gap-2">
               <AlertTriangle className="w-4 h-4" />
               Limitations
             </h3>
             <ul className="flex flex-col gap-2">
              {analysis.limitations.map((limit, idx) => (
                <li key={idx} className="text-sm text-neutral-400 flex items-start gap-2">
                  <span className="text-amber-500/50 mt-1">•</span>
                  <span>{limit}</span>
                </li>
              ))}
             </ul>
          </div>

          <div className="p-5 rounded-xl glass-panel flex flex-col gap-3">
             <h3 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">Future Work</h3>
             <p className="text-sm text-neutral-300 leading-relaxed font-serif">
               {analysis.futureWork}
             </p>
          </div>

        </aside>

      </div>
    </div>
  );
}
