# AI Poet Generator

This project is a web application that generates short poems based on user input. It serves as an introduction to the LangChain.js framework using the LangChain Expression Language (LCEL) and Modern Web technologies.

## Tech Stack

- **Framework:** Next.js 16 (App Router & Server Actions)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **AI Orchestration:** LangChain.js v1.0
- **Model Provider:** OpenAI

## Features

- **Server-Side Generation:** secure API calls using Next.js Server Actions.
- **LCEL Pipeline:** implementation of a basic Prompt > Model > Parser chain.
- **Type Safety:** built with TypeScript.

## Getting Started

Follow these steps to set up the project locally.

### 1. Prerequisites

Ensure you have Node.js installed and an OpenAI API Key.

### 2. Installation

Clone the repository and install the dependencies:

npm install

### 3. Environment Configuration

Create a file named .env.local at the root of your project. Add your OpenAI API key to this file:

OPENAI_API_KEY=your_api_key_here

### 4. Running the Application

Start the development server:

npm run dev

Open http://localhost:3000 in your browser to view the application.

## Project Structure

- app/page.tsx: The Client Component handling the UI and form submission.
- app/actions.ts: The Server Action containing the LangChain logic.

## License

MIT