# BPL Dream 11 - Fantasy Cricket Team Builder

BPL Dream 11 is a modern, responsive web application that allows users to build their ultimate fantasy cricket team. Users can manage a virtual budget, select world-class players, and organize their squad through a sleek and intuitive interface.

## 🚀 Live Demo

[[\\[ live link here\\]](https://bpl-dream11743.netlify.app/)]

## ✨ Features

- **Dynamic Player Roster**: Browse a diverse list of players with detailed stats (Rating, Batting/Bowling Style).
- **Coin-Based Economy**:
  - Start with a base balance.
  - "Claim Free Credit" to add 500,000 coins instantly.
  - Automatic deduction and refund of coins when selecting or removing players.
- **Team Management**:
  - Select up to 6 players for your squad.
  - Validation to prevent selecting the same player twice.
  - Toggle between "Available" and "Selected" player views.
- **Modern UI/UX**:
  - Fully responsive design for mobile, tablet, and desktop.
  - Glassmorphism effects in the newsletter section.
  - Interactive hover effects and smooth transitions.
  - Loading states powered by React 19 Suspense.
- **Robustness**: Implemented Error Boundaries to handle unexpected component crashes gracefully.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- **Loading Indicators**: [React Spinners](https://www.davidhu.me/react-spinners/)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Data Fetching**: React 19 `use()` hook with `fetch` API

## 📦 Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/BPL11-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd BPL11-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open the app**:
   Visit `http://localhost:5173` in your browser.

## 📂 Project Structure

```text
src/
├── assets/             # Images and static assets
├── Components/         # Reusable UI components
│   ├── Banner/         # Hero section with credit claim
│   ├── Navbar/         # Navigation and coin display
│   ├── Players/        # Main logic for player fetching
│   ├── Available Players/# Grid view of all players
│   ├── Selected Players/ # List view of selected team
│   ├── Newsletter/     # Subscription section
│   ├── Footer/         # Site footer
│   └── ErrorBoundary/  # Error handling component
├── App.jsx             # Main application entry point
└── main.jsx            # React DOM rendering
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ by Rahin Haque
