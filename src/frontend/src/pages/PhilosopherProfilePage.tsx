import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useAllQuotes, usePhilosopher } from "../hooks/useQueries";

export default function PhilosopherProfilePage() {
  const { id } = useParams({ from: "/philosophers/$id" });
  const { data: philosopher, isLoading } = usePhilosopher(BigInt(id));
  const { data: allQuotes } = useAllQuotes();

  const philQuotes =
    allQuotes?.filter((q) => q.author === philosopher?.name) ?? [];

  return (
    <main className="min-h-screen">
      {isLoading ? (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Skeleton
            className="h-10 w-1/3 mb-4"
            data-ocid="profile.loading_state"
          />
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      ) : !philosopher ? (
        <div
          className="max-w-4xl mx-auto px-4 py-20 text-center"
          data-ocid="profile.error_state"
        >
          <p className="text-muted-foreground">Philosopher not found.</p>
          <Link
            to="/philosophers"
            className="text-primary text-sm mt-4 inline-block"
          >
            ← Back to Philosophers
          </Link>
        </div>
      ) : (
        <>
          {/* Hero */}
          <div
            className="py-16 px-4"
            style={{ background: "oklch(0.234 0.027 228)" }}
          >
            <div className="max-w-4xl mx-auto">
              <Link
                to="/philosophers"
                className="inline-flex items-center gap-1 text-sm mb-6 transition-opacity hover:opacity-80"
                style={{ color: "oklch(0.672 0.089 73)" }}
                data-ocid="profile.link"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-6"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center font-serif font-bold text-3xl flex-shrink-0"
                  style={{
                    background: "oklch(0.909 0.024 84)",
                    color: "oklch(0.672 0.089 73)",
                  }}
                >
                  {philosopher.name.charAt(0)}
                </div>
                <div>
                  <h1
                    className="font-serif text-4xl font-bold"
                    style={{ color: "oklch(0.957 0.014 84)" }}
                  >
                    {philosopher.name}
                  </h1>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "oklch(0.672 0.089 73)" }}
                  >
                    {philosopher.era} · {philosopher.school}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
            {/* Bio */}
            <section>
              <h2
                className="font-serif text-2xl font-bold mb-4"
                style={{ color: "oklch(0.15 0 0)" }}
              >
                Biography
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "oklch(0.35 0 0)" }}
              >
                {philosopher.bio}
              </p>
            </section>

            {/* Key Ideas */}
            <section>
              <h2
                className="font-serif text-2xl font-bold mb-4"
                style={{ color: "oklch(0.15 0 0)" }}
              >
                Key Ideas
              </h2>
              <div className="flex flex-wrap gap-2">
                {philosopher.keyIdeas.map((idea) => (
                  <Badge
                    key={idea}
                    className="text-sm px-3 py-1"
                    style={{
                      background: "oklch(0.909 0.024 84)",
                      color: "oklch(0.35 0.06 73)",
                      border: "1px solid oklch(0.672 0.089 73 / 0.4)",
                    }}
                  >
                    {idea}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Associated Quotes */}
            {philQuotes.length > 0 && (
              <section>
                <h2
                  className="font-serif text-2xl font-bold mb-4"
                  style={{ color: "oklch(0.15 0 0)" }}
                >
                  Notable Quotes
                </h2>
                <div className="space-y-4">
                  {philQuotes.map((quote, i) => (
                    <motion.blockquote
                      key={quote.id.toString()}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-lg p-6"
                      style={{ background: "oklch(0.453 0.024 228)" }}
                      data-ocid={`profile.item.${i + 1}`}
                    >
                      <p
                        className="font-serif text-lg italic"
                        style={{ color: "oklch(0.957 0.014 84)" }}
                      >
                        &ldquo;{quote.text}&rdquo;
                      </p>
                      <footer
                        className="mt-3 text-xs"
                        style={{ color: "oklch(0.672 0.089 73)" }}
                      >
                        {quote.branch}
                      </footer>
                    </motion.blockquote>
                  ))}
                </div>
              </section>
            )}
          </div>
        </>
      )}
    </main>
  );
}
