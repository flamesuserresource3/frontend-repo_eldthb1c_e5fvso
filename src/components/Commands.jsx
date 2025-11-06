import { Terminal, Search, Trophy, Gift } from "lucide-react";

const commands = [
  { cmd: "/start", desc: "Begin your adventure and receive your starter." },
  { cmd: "/pokedex <name>", desc: "Search detailed data on any Pokémon." },
  { cmd: "/battle @user", desc: "Challenge someone to a fair, turn-based battle." },
  { cmd: "/trade @user", desc: "Safely trade Pokémon and items with escrow." },
];

export default function Commands() {
  return (
    <section className="py-16 sm:py-20 bg-blue-50/60" id="commands">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Core Commands</h2>
            <p className="mt-2 text-gray-600">Slash commands designed to be intuitive and fast.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Terminal className="h-4 w-4" /> Works with slash commands
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commands.map((c) => (
            <div key={c.cmd} className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-gray-900 font-semibold">
                <span className="inline-flex items-center gap-2 rounded-md bg-blue-100 px-2 py-1">
                  <Search className="h-4 w-4" />
                  {c.cmd}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-700">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1">
            <Trophy className="h-4 w-4" /> Ranked ladder and seasons
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1">
            <Gift className="h-4 w-4" /> Daily rewards and quests
          </div>
        </div>
      </div>
    </section>
  );
}
