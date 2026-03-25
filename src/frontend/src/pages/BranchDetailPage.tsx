import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Brain,
  Eye,
  Landmark,
  Layers,
  Scale,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useAllBranches, useQuotesByBranch } from "../hooks/useQueries";

const BRANCH_ICONS: Record<string, React.ReactNode> = {
  तत्त्वमीमांसा: <Brain className="w-10 h-10" />,
  नीतिशास्त्र: <Scale className="w-10 h-10" />,
  ज्ञानमीमांसा: <Eye className="w-10 h-10" />,
  तर्कशास्त्र: <Layers className="w-10 h-10" />,
  राजदर्शन: <Landmark className="w-10 h-10" />,
  सौन्दर्यशास्त्र: <Sparkles className="w-10 h-10" />,
};

const SKELETON_KEYS = ["sk1", "sk2", "sk3"];

export default function BranchDetailPage() {
  const { name } = useParams({ from: "/branches/$name" });
  const { data: branches, isLoading: branchLoading } = useAllBranches();
  const { data: quotes, isLoading: quotesLoading } = useQuotesByBranch(name);

  const branch = branches?.find((b) => b.name === name);

  return (
    <main className="min-h-screen">
      {branchLoading ? (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Skeleton
            className="h-10 w-1/3 mb-4"
            data-ocid="branch.loading_state"
          />
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
      ) : !branch ? (
        <div
          className="max-w-4xl mx-auto px-4 py-20 text-center"
          data-ocid="branch.error_state"
        >
          <p className="text-muted-foreground">शाखा नहीं मिली।</p>
          <Link
            to="/branches"
            className="text-primary text-sm mt-4 inline-block"
          >
            ← शाखाओं पर वापस जाएँ
          </Link>
        </div>
      ) : (
        <>
          <div
            className="py-16 px-4"
            style={{ background: "oklch(0.2 0.06 18)" }}
          >
            <div className="max-w-4xl mx-auto">
              <Link
                to="/branches"
                className="inline-flex items-center gap-1 text-sm mb-6 transition-opacity hover:opacity-80"
                style={{ color: "oklch(0.78 0.15 75)" }}
                data-ocid="branch.link"
              >
                <ArrowLeft className="w-4 h-4" /> वापस जाएँ
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-6"
              >
                <span style={{ color: "oklch(0.78 0.15 75)" }}>
                  {BRANCH_ICONS[branch.name] ?? <Brain className="w-10 h-10" />}
                </span>
                <div>
                  <h1
                    className="font-serif text-4xl font-bold"
                    style={{ color: "oklch(0.97 0.018 75)" }}
                  >
                    {branch.name}
                  </h1>
                  <p
                    className="mt-2 text-sm italic"
                    style={{ color: "oklch(0.78 0.05 75)" }}
                  >
                    &ldquo;{branch.keyQuestion}&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12">
            <section className="mb-10">
              <h2
                className="font-serif text-2xl font-bold mb-4"
                style={{ color: "oklch(0.25 0.09 20)" }}
              >
                इस शाखा के बारे में
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "oklch(0.35 0 0)" }}
              >
                {branch.description}
              </p>
            </section>

            <section>
              <h2
                className="font-serif text-2xl font-bold mb-6"
                style={{ color: "oklch(0.25 0.09 20)" }}
              >
                विचार और श्लोक
              </h2>
              {quotesLoading ? (
                <div className="space-y-4">
                  {SKELETON_KEYS.map((k) => (
                    <Skeleton key={k} className="h-24 rounded-lg" />
                  ))}
                </div>
              ) : (quotes ?? []).length === 0 ? (
                <p
                  className="text-muted-foreground text-sm"
                  data-ocid="branch.empty_state"
                >
                  इस शाखा में अभी कोई विचार नहीं है।
                </p>
              ) : (
                <div className="space-y-4">
                  {quotes!.map((quote, i) => (
                    <motion.blockquote
                      key={quote.id.toString()}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-lg p-6"
                      style={{ background: "oklch(0.35 0.1 18)" }}
                      data-ocid={`branch.item.${i + 1}`}
                    >
                      <p
                        className="font-serif text-lg italic"
                        style={{ color: "oklch(0.97 0.018 75)" }}
                      >
                        &ldquo;{quote.text}&rdquo;
                      </p>
                      <footer
                        className="mt-3 text-sm font-semibold"
                        style={{ color: "oklch(0.78 0.15 75)" }}
                      >
                        — {quote.author}
                      </footer>
                    </motion.blockquote>
                  ))}
                </div>
              )}
            </section>
          </div>
        </>
      )}
    </main>
  );
}
