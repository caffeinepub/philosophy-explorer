import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useAllPhilosophers } from "../hooks/useQueries";

const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"];

export default function PhilosophersPage() {
  const { data: philosophers, isLoading } = useAllPhilosophers();

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <div
        className="py-12 px-4 border-b border-border"
        style={{ background: "oklch(0.93 0.02 75)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="font-sans text-xs tracking-[0.25em] uppercase mb-2"
            style={{ color: "oklch(0.65 0.18 45)" }}
          >
            खोज
          </p>
          <h1
            className="font-serif text-4xl font-bold"
            style={{ color: "oklch(0.25 0.09 20)" }}
          >
            दार्शनिक
          </h1>
          <p className="mt-2 text-sm" style={{ color: "oklch(0.5 0.04 50)" }}>
            वे महान विचारक जिन्होंने मानव चिंतन को आकार दिया
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKELETON_KEYS.map((k) => (
              <Skeleton
                key={k}
                className="h-64 rounded-lg"
                data-ocid="philosophers.loading_state"
              />
            ))}
          </div>
        ) : (philosophers ?? []).length === 0 ? (
          <div
            className="text-center py-20"
            data-ocid="philosophers.empty_state"
          >
            <p className="text-muted-foreground">कोई दार्शनिक नहीं मिले।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophers!.map((p, i) => (
              <motion.div
                key={p.id.toString()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg shadow-card p-6 flex flex-col"
                data-ocid={`philosophers.item.${i + 1}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-serif font-bold text-xl flex-shrink-0"
                    style={{
                      background: "oklch(0.91 0.025 75)",
                      color: "oklch(0.65 0.18 45)",
                    }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-lg">{p.name}</h2>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.65 0.18 45)" }}
                    >
                      {p.era}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.5 0.04 50)" }}
                    >
                      {p.school}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed flex-1 mb-4"
                  style={{ color: "oklch(0.4 0.02 30)" }}
                >
                  {p.bio.length > 150 ? `${p.bio.slice(0, 150)}...` : p.bio}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.keyIdeas.slice(0, 3).map((idea) => (
                    <Badge
                      key={idea}
                      variant="outline"
                      className="text-xs"
                      style={{
                        borderColor: "oklch(0.65 0.18 45 / 0.4)",
                        color: "oklch(0.45 0.1 45)",
                      }}
                    >
                      {idea}
                    </Badge>
                  ))}
                </div>
                <Link
                  to="/philosophers/$id"
                  params={{ id: p.id.toString() }}
                  className="mt-auto text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-70"
                  style={{ color: "oklch(0.65 0.18 45)" }}
                  data-ocid={`philosophers.link.${i + 1}`}
                >
                  और जानें →
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
