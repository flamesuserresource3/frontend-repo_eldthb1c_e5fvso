import { Swords, BookOpen, ShoppingBag, Users } from "lucide-react";

const features = [
  {
    title: "Real-time Battles",
    description: "Challenge friends or AI trainers with a tactical, turn-based system and slick animations.",
    icon: Swords,
    color: "from-red-500/20 to-red-500/5",
  },
  {
    title: "Complete Pokédex",
    description: "Look up stats, moves, types, and evolutions with clean, searchable views.",
    icon: BookOpen,
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    title: "Marketplace",
    description: "Trade and list Pokémon securely with anti-scam protections and audit logs.",
    icon: ShoppingBag,
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Community Tools",
    description: "Leaderboards, gyms, tournaments, and party sharing to grow your server.",
    icon: Users,
    color: "from-emerald-500/20 to-emerald-500/5",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why MyPoké?</h2>
          <p className="mt-3 text-gray-600">Built for speed, fairness, and fun. Everything you need to run a vibrant Pokémon community.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-gradient-to-b p-6 shadow-sm transition hover:shadow-md " style={{ backgroundImage: undefined }}>
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${f.color}`}>
                <f.icon className="h-5 w-5 text-gray-900" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
