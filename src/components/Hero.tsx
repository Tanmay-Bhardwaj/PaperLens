import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, FileText, Upload, ChevronRight, BookOpen, BrainCircuit, Microscope, ArrowRight } from 'lucide-react';
import { DifficultyLevel } from '../types';

interface HeroProps {
  onAnalyze: (text: string, level: DifficultyLevel) => void;
  isLoading: boolean;
}

const SAMPLE_PAPER = `Title: Attention Is All You Need
Authors: Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin

Abstract
The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature.`;

export function Hero({ onAnalyze, isLoading }: HeroProps) {
  const [text, setText] = useState('');
  const [level, setLevel] = useState<DifficultyLevel>('Intermediate');

  const handleAnalyze = () => {
    if (!text.trim()) return;
    onAnalyze(text, level);
  };

  const handleLoadSample = () => {
    setText(SAMPLE_PAPER);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-24 relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          PaperLens AI is live
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-sans">
          Understand Any <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
            Scientific Paper
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 font-sans leading-relaxed">
          The world's most intelligent research explainer. Paste any paper text or abstract, choose your expertise level, and uncover insights instantly.
        </p>

        <div className="w-full max-w-2xl glass-panel rounded-2xl p-4 shadow-2xl">
          <div className="flex flex-col gap-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste paper abstract or full text here..."
              className="w-full h-32 bg-black/40 border border-white/5 rounded-xl p-4 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-emerald-500/50 transition-all resize-none font-sans"
            />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                {(['Beginner', 'Intermediate', 'Advanced', 'Expert'] as DifficultyLevel[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      level === l 
                        ? 'bg-emerald-500 text-[#050505] shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                        : 'bg-white/5 text-neutral-400 border border-transparent hover:bg-white/10'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button
                onClick={handleAnalyze}
                disabled={!text.trim() || isLoading}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    Analyze <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-neutral-500">
          <button 
            onClick={handleLoadSample}
            className="hover:text-neutral-300 transition-colors flex items-center gap-1"
          >
            <FileText className="w-4 h-4" />
            Try "Attention Is All You Need"
          </button>
        </div>
      </motion.div>

      {/* Feature grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 z-10"
      >
        {[
          { icon: BrainCircuit, title: "Multi-Level Engine", desc: "Adaptive explanations from high school to PhD level." },
          { icon: BookOpen, title: "Semantic Parsing", desc: "Deep extraction of assumptions, derivations, and methodology." },
          { icon: Microscope, title: "Scientific Integrity", desc: "Preserves nuance, limitations, and statistical uncertainty." }
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl glass-panel flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <feature.icon className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-200">{feature.title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
