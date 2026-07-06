export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface SectionAnalysis {
  heading: string;
  originalTextSnippet: string;
  explanation: string;
  whyItMatters: string;
}

export interface PaperAnalysis {
  title: string;
  authors?: string;
  summary: string;
  keyInsights: string[];
  sections: SectionAnalysis[];
  limitations: string[];
  futureWork: string;
}
