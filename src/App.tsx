/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Hero } from './components/Hero';
import { AnalysisView } from './components/AnalysisView';
import { PaperAnalysis, DifficultyLevel } from './types';

export default function App() {
  const [analysis, setAnalysis] = useState<PaperAnalysis | null>(null);
  const [level, setLevel] = useState<DifficultyLevel>('Intermediate');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (text: string, selectedLevel: DifficultyLevel) => {
    setIsLoading(true);
    setError(null);
    setLevel(selectedLevel);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, level: selectedLevel })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to analyze paper');
      }

      const data = await res.json();
      setAnalysis(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (analysis) {
    return (
      <AnalysisView 
        analysis={analysis} 
        level={level} 
        onBack={() => setAnalysis(null)} 
      />
    );
  }

  return (
    <Hero onAnalyze={handleAnalyze} isLoading={isLoading} />
  );
}
