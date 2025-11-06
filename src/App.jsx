import Hero from "./components/Hero";
import Features from "./components/Features";
import Commands from "./components/Commands";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="h-6 w-6 rounded bg-gradient-to-br from-yellow-400 via-red-400 to-blue-500" />
            MyPoké
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-gray-900 text-gray-600">Features</a>
            <a href="#commands" className="hover:text-gray-900 text-gray-600">Commands</a>
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=0&scope=bot%20applications.commands"
              className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black shadow hover:bg-yellow-400"
            >
              Invite
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Commands />
      </main>

      <Footer />
    </div>
  );
}
