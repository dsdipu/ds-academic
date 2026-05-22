# DS Academic 🎓

> **Learn concepts. Not memorization.**  
> Exam-ready notes for CSE students — HTML, CSS, JavaScript, Docker, and Exam Prep.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dsdipu/ds-academic)

**Live Site:** [academic.dsdipu.dev](https://academic.dsdipu.dev)  
**Portfolio:** [dsdipu.vercel.app](https://dsdipu.vercel.app)

---

## 🚀 What is DS Academic?

DS Academic is a completely free academic knowledge website built with Docusaurus. Every note is structured for exam success:

- 📌 **Quick Summary** — 30-second review
- 📚 **Detailed Explanation** — Real understanding
- ⚠️ **Common Mistakes** — What loses marks
- 📖 **Exam Questions** — Model answers with mark schemes
- 🎤 **Viva Questions** — Oral exam preparation
- 👨‍🏫 **Teacher's Perspective** — How examiners grade

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Docusaurus 3](https://docusaurus.io) | Static site framework |
| React 18 | UI components |
| MDX | Markdown with components |
| Vercel | Hosting |
| html2canvas + jspdf | PDF generation |

## 🛠 Local Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/dsdipu/ds-academic.git
cd ds-academic

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# 4. Start development server
npm start
# Opens at http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run serve  # Preview the production build locally
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Add environment variables from `.env.example`
6. Click Deploy

### Custom Domain

1. Vercel Dashboard → Settings → Domains
2. Add `academic.yourdomain.com`
3. Update DNS records at your registrar:
   ```
   Type: CNAME
   Name: academic
   Value: cname.vercel-dns.com
   ```

## 🔑 API Setup

### YouTube Data API v3

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable **YouTube Data API v3**
4. Create credentials → API Key
5. Restrict to your domain (recommended)
6. Add to `.env`:
   ```
   REACT_APP_YOUTUBE_API_KEY=your_key_here
   REACT_APP_YOUTUBE_CHANNEL_ID=UCxxxxxxxxxx
   ```

### Google Analytics

1. Create property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (`G-XXXXXXXXXX`)
3. Update `docusaurus.config.js`:
   ```js
   gtag: {
     trackingID: 'G-XXXXXXXXXX',
   }
   ```

### Algolia DocSearch (Free for Open Source)

1. Apply at [docsearch.algolia.com](https://docsearch.algolia.com)
2. Once approved, update `docusaurus.config.js` algolia section

## 📁 Project Structure

```
ds-academic/
├── docs/                    # All note content
│   ├── web-technologies/    # HTML, CSS, JS, Docker notes
│   └── exam-prep/           # Exam strategy guides
├── blog/                    # Blog posts
├── src/
│   ├── components/          # Reusable React components
│   │   ├── CommonMistakes.jsx
│   │   ├── ModelAnswer.jsx
│   │   ├── YouTubeEmbed.jsx
│   │   ├── DownloadPDF.jsx
│   │   ├── LastUpdated.jsx
│   │   ├── TeacherPerspective.jsx
│   │   ├── ProgressTracker.jsx
│   │   ├── SearchBar.jsx
│   │   └── ExamSidebar.jsx
│   ├── css/
│   │   └── custom.css       # Design system
│   ├── pages/               # Custom pages
│   │   ├── index.js         # Homepage
│   │   ├── youtube.js       # YouTube channel page
│   │   ├── roadmap.js       # Interactive roadmap
│   │   └── dashboard.js     # Progress dashboard
│   └── theme/
│       └── Footer.js        # Custom footer
├── static/                  # Static files
├── docusaurus.config.js     # Main config
├── sidebars.js              # Sidebar structure
└── vercel.json              # Vercel deployment config
```

## 📝 Adding New Notes

1. Create a `.md` file in the appropriate `docs/` subfolder
2. Add frontmatter:
   ```yaml
   ---
   title: "Your Topic"
   description: "SEO description"
   sidebar_position: 6
   tags: [Subject, Difficulty]
   last_update:
     date: 2026-05-22
   ---
   ```
3. Follow the note template structure
4. Add to `sidebars.js`
5. Update the SearchBar component's `ALL_NOTES` array

## 🎨 Adding New Subjects

1. Create folder: `docs/new-subject/`
2. Add notes following the existing template
3. Add sidebar category in `sidebars.js`
4. Add subject card to `src/pages/index.js` SUBJECTS array
5. Add to roadmap in `src/pages/roadmap.js`
6. Update Dashboard notes list

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm start` fails | Run `npm install` first, ensure Node.js 18+ |
| Broken links | Run `npm run build` to see all broken link errors |
| Images not showing | Ensure images are in `static/img/` folder |
| Component import error | Check that component exists in `src/components/` |
| PDF download not working | Only works in browser (not SSR) — wrap in `BrowserOnly` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b add-react-notes`
3. Commit your changes: `git commit -m "Add React hooks note"`
4. Push: `git push origin add-react-notes`
5. Open a Pull Request

## 📄 License

MIT License — free to use, modify, and distribute. See [LICENSE](LICENSE).

---

Built with ❤️ for CSE students. If this helped you, consider giving it a ⭐ on GitHub!
