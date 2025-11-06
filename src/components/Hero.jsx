import { Rocket, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/70 via-white to-blue-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/60 bg-yellow-100/60 px-3 py-1 text-xs font-medium text-yellow-700">
            <Zap className="h-4 w-4" />
            MyPoké • Pokémon on Discord
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-blue-600 bg-clip-text text-transparent">
              Catch. Train. Battle.
            </span>
            <br />
            All inside your server.
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-gray-600">
            MyPoké brings the thrill of Pokémon to your community with rich commands, live
            battles, trading, and a beautifully designed Pokédex. Start your journey today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=0&scope=bot%20applications.commands"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black shadow hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              <Rocket className="h-5 w-5" />
              Invite MyPoké
            </a>
            <a
              href="#commands"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              <Shield className="h-5 w-5" />
              View Commands
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-yellow-300/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-12 h-72 w-72 rounded-full bg-blue-300/40 blur-3xl" />
    </section>
  );
}
