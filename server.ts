import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// API Route for Analyzing Paper
app.post('/api/analyze', async (req, res) => {
  try {
    const { text, level } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Paper text is required.' });
    }

    if (!process.env.GEMINI_API_KEY) {
       return res.status(500).json({ error: 'Gemini API key is not configured.' });
    }

    let systemPrompt = `You are an elite AI Research Scientist and Science Communicator working for PaperLens AI.
Your task is to analyze the provided scientific paper text and explain it at the specified difficulty level.
Return the analysis as a JSON object with the following structure:
{
  "title": "Extracted or inferred title",
  "authors": "Extracted authors (if any)",
  "summary": "A high-level summary at the target difficulty level",
  "keyInsights": ["Insight 1", "Insight 2", ...],
  "sections": [
    {
      "heading": "Section Heading (e.g., Introduction, Methodology, Results)",
      "originalTextSnippet": "A representative snippet from this section",
      "explanation": "The explanation of this section at the target difficulty level. Use markdown for formatting.",
      "whyItMatters": "Why this section is important"
    }
  ],
  "limitations": ["Limitation 1", "Limitation 2"],
  "futureWork": "What the paper suggests for future research"
}

Target Difficulty Level: ${level}

Guidelines for levels:
- Beginner: Like explaining to a curious high school student. No jargon. Simple analogies. Real-world examples.
- Intermediate: For undergraduate students. Some technical language. Definitions included. Balanced depth.
- Advanced: Graduate-level explanation. Keep equations/assumptions. Discuss mathematical derivations. No oversimplification.
- Expert: Researcher mode. No simplification. Explain contributions critically. Highlight methodology. Compare with previous literature.

IMPORTANT: Respond ONLY with valid JSON. Do not wrap in backticks or add introductory text.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: text }] }
      ],
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
        responseMimeType: "application/json",
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Empty response from Gemini");
    }

    const parsedData = JSON.parse(responseText);
    res.json(parsedData);
  } catch (error: any) {
    console.error('Error analyzing paper:', error);
    res.status(500).json({ error: error.message || 'Failed to analyze paper.' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
