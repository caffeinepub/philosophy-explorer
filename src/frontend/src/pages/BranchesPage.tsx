import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { Brain, Eye, Landmark, Layers, Scale, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useAllBranches } from "../hooks/useQueries";

const BRANCH_ICONS: Record<string, React.ReactNode> = {
  तत्त्वमीमांसा: <Brain className="w-8 h-8" />,
  नीतिशास्त्र: <Scale className="w-8 h-8" />,
  ज्ञानमीमांसा: <Eye className="w-8 h-8" />,
  तर्कशास्त्र: <Layers className="w-8 h-8" />,
  राजदर्शन: <Landmark className="w-8 h-8" />,
  सौन्दर्यशास्त्र: <Sparkles className="w-8 h-8" />,
};

const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"];

export default function BranchesPage() {
  const { data: branches, isLoading } = useAllBranches();

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
            अध्ययन
          </p>
          <h1
            className="font-serif text-4xl font-bold"
            style={{ color: "oklch(0.25 0.09 20)" }}
          >
            दर्शन की शाखाएँ
          </h1>
          <p className="mt-2 text-sm" style={{ color: "oklch(0.5 0.04 50)" }}>
            दार्शनिक जिज्ञासा के प्रमुख क्षेत्र
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKELETON_KEYS.map((k) => (
              <Skeleton
                key={k}
                className="h-56 rounded-lg"
                data-ocid="branches.loading_state"
              />
            ))}
          </div>
        ) : (branches ?? []).length === 0 ? (
          <div className="text-center py-20" data-ocid="branches.empty_state">
            <p className="text-muted-foreground">कोई शाखा नहीं मिली।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches!.map((branch, i) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to="/branches/$name"
                  params={{ name: branch.name }}
                  className="block bg-card border border-border rounded-lg shadow-card p-7 hover:shadow-lg transition-all group"
                  data-ocid={`branches.item.${i + 1}`}
                >
                  <span
                    className="inline-flex mb-4 transition-transform group-hover:scale-110"
                    style={{ color: "oklch(0.65 0.18 45)" }}
                  >
                    {BRANCH_ICONS[branch.name] ?? <Brain className="w-8 h-8" />}
                  </span>
                  <h2 className="font-serif font-bold text-xl mb-2">
                    {branch.name}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "oklch(0.4 0.02 30)" }}
                  >
                    {branch.description}
                  </p>
                  <p
                    className="text-xs italic font-medium"
                    style={{ color: "oklch(0.5 0.04 50)" }}
                  >
                    &ldquo;{branch.keyQuestion}&rdquo;
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
