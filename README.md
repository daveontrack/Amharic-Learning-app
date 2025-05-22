
# የአማርኛ መማሪያ | Amharic Learning App

Welcome to the Amharic Learning App! This application is designed to help users learn Amharic through various interactive tools, including dictionaries, literature, and learning videos.

## ✨ Features

*   🏠 Homepage:
    *   Overview of the application's features.
    *   "Word of the Day" to introduce new Amharic vocabulary.
    *   Easy navigation to different sections.
    *   Feedback submission form.
*   📖 የአማርኛ መዝገበ ቃላት (Amharic Dictionary):
    *   Browse and search Amharic words.
    *   View definitions, pronunciations, example sentences, and English equivalents.
    *   Listen to audio pronunciations for selected words.
    *   Link to a YouTube channel for general Amharic learning.
*   📚 የእንግሊዝኛ መዝገበ ቃላት (English Dictionary):
    *   Browse and search English words.
    *   View definitions, parts of speech, example sentences, synonyms, and Amharic equivalents.
    *   Listen to audio pronunciations for selected words.
    *   Link to a YouTube channel for general English learning.
*   📜 የአማርኛ ሥነ ጽሑፍ (Amharic Literature):
    *   Explore various Amharic literary works including poems, short stories, proverbs, and novel excerpts.
    *   Search through literary content.
    *   Access external literary resources and information about different genres.
*   🎬 የቋንቋ መማሪያ ቪዲዮዎች (Learning Videos):
    *   Watch embedded YouTube videos and playlists for learning Amharic and English.
    *   Access supplementary learning resources from Wikipedia.
*   👤 User Account Management:
    *   Placeholder pages for Login, Sign Up, and Profile.
    *   Simulated Logout functionality.
*   ⚙️ Settings:
    *   Placeholder page for application settings (e.g., theme, language).
*   🎨 UI & Styling:
    *   Modern and responsive design using ShadCN UI components and Tailwind CSS.
    *   Customizable color themes.
    *   Interactive elements with animations.
*   📡 API Endpoints:
    *   /api/amharic-dictionary for accessing Amharic dictionary data.
    *   /api/english-dictionary for accessing English dictionary data.

## 🛠 Tech Stack

*   Framework: Next.js (App Router)
*   Language: TypeScript
*   UI Components: ShadCN UI
*   Styling: Tailwind CSS
*   AI (Planned/Optional): Genkit (for potential future AI-powered features)
*   Fonts: Geist Sans, Geist Mono
*   Icons: Lucide React

## 🚀 Getting Started

### Prerequisites

*   Node.js (version 18.x or later recommended)
*   npm or yarn

### Setup

1.  Clone the repository (if applicable):
        git clone (https://github.com/daveontrack/Amharic-Learning-app)
          cd Amharic-Learning-app
    
2.  Install dependencies:
        npm install
    # or
    yarn install
    
3.  Set up environment variables (if any):
    Create a .env.local file in the root of your project if there are environment-specific configurations required (e.g., API keys for Genkit if you integrate AI features).

### Running the Development Server

To run the app in development mode:

npm run dev
# or
yarn dev

The application will typically be available at http://localhost:9002 (or the port specified in your dev script in package.json).

### Building for Production

To build the application for production:

npm run build
# or
yarn build

### Starting the Production Server

After building, you can start the production server:

npm run start
# or
yarn start

## 📁 Project Structure

Key directories:


*   src/app/: Contains all the routes, pages, and API endpoints using the Next.js App Router.
    *   api/: Server-side API routes.
    *   (page-name)/: Folders for each page/section of the app.
        *   page.tsx: The main server component for the page.
        *   components/: Client components specific to that page.
*   src/components/: Shared React components.
    *   ui/: ShadCN UI components.
    *   custom/: Custom reusable components (e.g., custom sidebar).
    *   layout/: Layout components like AppLayout.
*   src/data/: Contains local data files for dictionaries and literature.
*   src/hooks/: Custom React hooks.
*   src/lib/: Utility functions.
*   src/ai/: Genkit related files for AI features (if implemented).
*   public/: Static assets like images, audio files.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (git checkout -b feature/your-feature-name).
3.  Make your changes.
4.  Commit your changes (git commit -m 'Add some feature').
5.  Push to the branch (git push origin feature/your-feature-name).
6.  Open a Pull Request.

## 📝 License

This project is currently not under a specific license. Please specify if you intend to add one.

---

This README provides a good starting point. You can expand it further with more details about deployment, specific AI features if you add them, or more in-depth architectural explanations.
