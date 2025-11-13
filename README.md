# 🤖 RAG Chatbot

> A Next.js-based Retrieval-Augmented Generation (RAG) chatbot application with document upload, semantic search, and conversational AI.

## 📝 Overview

This project is a full-stack AI chatbot that allows users to upload documents, which are then chunked, embedded, and indexed for semantic search. The chatbot uses these indexed documents to provide contextually relevant answers to user queries, leveraging modern LLMs and vector search techniques.

**✨ Key Features:**

- 📄 Upload and process documents (PDF, text, etc.)
- 🧩 Semantic chunking and embedding of content
- ⚡ Fast vector search for relevant context
- 💬 Conversational chat UI with citations and sources
- 🛠️ Built with Next.js, React, Drizzle ORM, and OpenAI/AI SDKs

## 📦 Requirements

- 🟢 Node.js v18 or newer
- 📦 npm, yarn, pnpm, or bun (for running scripts)
- 🗄️ PostgreSQL database (local or cloud, e.g., Neon)

## 🚀 Setup

1. **Install dependencies:**

2. **Configure environment:**

   - Copy `.env.example` to `.env` and fill in required values (database URL, OpenAI API key, etc.)

3. **Run database migrations:**

    ```bash
      #(adjust for your migration tool if needed)
      npm run drizzle:migrate
    ```

4. **Start the development server:**

    ```bash
      npm run dev
    ```

5. **Open the app:**

      Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework:** ⚛️ Next.js (App Router)
- **UI:** 🎨 React, Radix UI, Tailwind CSS
- **Database:** 🗄️ PostgreSQL, Drizzle ORM
- **AI/Embeddings:** 🤖 OpenAI, AI SDK, LangChain
- **PDF/Text Parsing:** 📄 pdf-parse

## 📁 Folder Structure

- `src/app/` — Main app routes and pages
- `src/components/` — UI and AI chat components
- `src/types/` — TypeScript types
- `migrations/` — Database migration scripts

## 📄 License

MIT
