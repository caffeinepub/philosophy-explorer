import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useAllQuotes } from "../hooks/useQueries";

const SKELETON_KEYS = [
  "sk1",
  "sk2",
  "sk3",
  "sk4",
  "sk5",
  "sk6",
  "sk7",
  "sk8",
  "sk9",
];

export default function QuotesPage() {
  const { data: quotes, isLoading } = useAllQuotes();

  return (
    <main className="min-h-screen">
      <div
        className="py-12 px-4 border-b border-border"
        style={{ background: "oklch(0.93 0.02 75)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="font-sans text-xs tracking-[0.25em] uppercase mb-2"
            style={{ color: "oklch(0.65 0.18 45)" }}
          >
            ज्ञान
          </p>
          <h1
            className="font-serif text-4xl font-bold"
            style={{ color: "oklch(0.25 0.09 20)" }}
          >
            दार्शनिक विचार
          </h1>
          <p className="mt-2 text-sm" style={{ color: "oklch(0.5 0.04 50)" }}>
            इतिहास के महान विचारकों के अमर वचन
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {isLoading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {SKELETON_KEYS.map((k) => (
              <Skeleton
                key={k}
                className="h-40 w-full mb-5 rounded-lg break-inside-avoid"
                data-ocid="quotes.loading_state"
              />
            ))}
          </div>
        ) : (quotes ?? []).length === 0 ? (
          <div className="text-center py-20" data-ocid="quotes.empty_state">
            <p className="text-muted-foreground">कोई विचार नहीं मिला।</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {quotes!.map((quote, i) => (
              <motion.div
                key={quote.id.toString()}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="break-inside-avoid mb-5 rounded-lg p-6 border border-border"
                style={{
                  background:
                    i % 5 === 0
                      ? "oklch(0.35 0.1 18)"
                      : i % 3 === 0
                        ? "oklch(0.91 0.025 75)"
                        : "oklch(0.96 0.02 75)",
                }}
                data-ocid={`quotes.item.${i + 1}`}
              >
                <p
                  className="font-serif italic text-base leading-relaxed mb-4"
                  style={{
                    color:
                      i % 5 === 0
                        ? "oklch(0.97 0.018 75)"
                        : "oklch(0.2 0.02 20)",
                  }}
                >
                  &ldquo;{quote.text}&rdquo;
                </p>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <p
                    className="text-sm font-semibold"
                    style={{
                      color:
                        i % 5 === 0
                          ? "oklch(0.78 0.15 75)"
                          : "oklch(0.45 0.12 45)",
                    }}
                  >
                    — {quote.author}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-xs"
                    style={{
                      borderColor: "oklch(0.65 0.18 45 / 0.4)",
                      color:
                        i % 5 === 0 ? "oklch(0.78 0 0)" : "oklch(0.5 0.06 45)",
                    }}
                  >
                    {quote.branch}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
