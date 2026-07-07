   <p align="center">
  <img src="https://img.shields.io/badge/PaperLens-AI-blueviolet?style=for-the-badge&logo=google&logoColor=white" alt="PaperLens AI" />
  <img src="https://img.shields.io/badge/Powered%20By-Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed%20On-Google%20Cloud%20Run-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge" />
</p>

<h1 align="center">🔬 PaperLens AI</h1>
<p align="center"><strong>The world's most intelligent research paper explainer.</strong><br/>
Understand any scientific paper — from high school level to PhD depth — in seconds.</p>

<p align="center">
  <a href="https://paperlens-ai-116737029100.asia-southeast1.run.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-ff4757?style=for-the-badge" />
  </a>
</p>

***

## ✨ What is PaperLens AI?

**PaperLens AI** is an adaptive scientific paper explainer powered by Google Gemini. Paste any abstract or full-text research paper, select your expertise level, and instantly receive a precise, layered explanation — from beginner-friendly summaries to rigorous PhD-level breakdowns.

Whether you're a high school student exploring a research field, an engineer trying to apply a paper's findings, or a researcher seeking rapid comprehension of adjacent work, PaperLens AI meets you at your level.

***

## 🚀 Features

| Feature | Description |
|--------|-------------|
| 🎓 **Multi-Level Engine** | Adaptive explanations across 4 expertise levels: Beginner, Intermediate, Advanced, Expert |
| 🔍 **Semantic Parsing** | Deep extraction of assumptions, derivations, methodology, and key claims |
| 🧪 **Scientific Integrity** | Preserves nuance, limitations, statistical uncertainty, and caveats |
| ⚡ **Instant Analysis** | Real-time results — no waiting, no sign-up required |
| 📋 **Paste & Go** | Works with abstracts, full-text papers, or arXiv/ACM/IEEE content |
| 🤖 **Gemini-Powered** | Built on Google's frontier AI for maximum accuracy and depth |

***

## 🎯 Expertise Levels

PaperLens AI lets you choose exactly how deep you want to go:

- **Beginner** — Clear, jargon-free summary. Perfect for students or non-specialists curious about a topic.
- **Intermediate** — Explains methodology and key findings with light technical context.
- **Advanced** — Covers assumptions, experimental design, and implications with domain vocabulary.
- **Expert** — Full technical breakdown: derivations, statistical rigor, limitations, and research gaps.

***

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **AI Model** | Google Gemini (via AI Studio / Gemini API) |
| **Backend** | Python / Google AI Studio App |
| **Deployment** | Google Cloud Run (Asia Southeast 1) |
| **Frontend** | Adaptive web UI with multi-level expertise selector |
| **Infrastructure** | Serverless container on GCP |

***

## 📦 Getting Started

### Prerequisites

- Python 3.9+
- A [Google AI Studio](https://aistudio.google.com/) API key
- Google Cloud SDK (for deployment)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/paperlens-ai.git
cd paperlens-ai

# Install dependencies
pip install -r requirements.txt

# Set your Gemini API key
export GOOGLE_API_KEY="your_api_key_here"

# Run locally
python app.py
```

### Deploy to Cloud Run

```bash
# Build and deploy
gcloud run deploy paperlens-ai \
  --source . \
  --region asia-southeast1 \
  --allow-unauthenticated
```

***

## 💡 How to Use

1. **Open** the [live app](https://paperlens-ai-116737029100.asia-southeast1.run.app/)
2. **Paste** any scientific paper abstract or full text into the input box
3. **Select** your expertise level: Beginner → Intermediate → Advanced → Expert
4. **Click Analyze** and receive a layered, intelligent explanation instantly

> 💡 **Try it now** — paste the abstract of *"Attention Is All You Need"* (the Transformer paper) to see PaperLens in action.

***

## 🧠 Example Papers to Try

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — The original Transformer architecture
- [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) — DeepMind's DQN paper
- [A Neural Algorithm of Artistic Style](https://arxiv.org/abs/1508.06576) — Neural Style Transfer
- [BERT: Pre-training of Deep Bidirectional Transformers](https://arxiv.org/abs/1810.04805) — Google's BERT model
- Any paper from [arXiv.org](https://arxiv.org/) in physics, CS, biology, or economics

***

## 🗺️ Roadmap

- [ ] arXiv URL input (auto-fetch paper text)
- [ ] PDF upload support
- [ ] Side-by-side multi-paper comparison
- [ ] Citation graph visualization
- [ ] Export explanations as PDF/Markdown
- [ ] User accounts and explanation history
- [ ] Slack/Notion integration

***

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features, improvements to the prompting strategy, or UI enhancements:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

***

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

***

## 👤 Author

Built with ❤️ by a student builder passionate about making research accessible to everyone.

- 🌐 Live App: [paperlens-ai-116737029100.asia-southeast1.run.app](https://paperlens-ai-116737029100.asia-southeast1.run.app/)
- 📬 Open an issue for bugs, feedback, or feature requests
- Author: Linkedin: https://www.linkedin.com/in/tanmay-bhardwaj-448481334/

***

<p align="center">
  <em>"Science is not finished until it's communicated." — Sir Mark Walport</em><br/>
  <strong>PaperLens AI makes that communication effortless.</strong>
</p>
