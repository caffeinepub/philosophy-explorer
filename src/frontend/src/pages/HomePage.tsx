import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Eye,
  Landmark,
  Layers,
  Scale,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  useAllBranches,
  useAllPhilosophers,
  useAllQuotes,
} from "../hooks/useQueries";

const BRANCH_ICONS: Record<string, React.ReactNode> = {
  तत्त्वमीमांसा: <Brain className="w-7 h-7" />,
  नीतिशास्त्र: <Scale className="w-7 h-7" />,
  ज्ञानमीमांसा: <Eye className="w-7 h-7" />,
  तर्कशास्त्र: <Layers className="w-7 h-7" />,
  राजदर्शन: <Landmark className="w-7 h-7" />,
  सौन्दर्यशास्त्र: <Sparkles className="w-7 h-7" />,
};

const PHIL_SKELETON_KEYS = ["psk1", "psk2", "psk3", "psk4"];
const BRANCH_SKELETON_KEYS = ["bsk1", "bsk2", "bsk3", "bsk4", "bsk5", "bsk6"];

function SectionDivider() {
  return (
    <div
      className="flex items-center justify-center gap-3 py-2"
      aria-hidden="true"
    >
      <span style={{ color: "oklch(0.65 0.18 45)" }} className="text-lg">
        ✿
      </span>
      <span style={{ color: "oklch(0.78 0.15 75)" }} className="text-xl">
        ❧
      </span>
      <span style={{ color: "oklch(0.65 0.18 45)" }} className="text-lg">
        ✿
      </span>
    </div>
  );
}

export default function HomePage() {
  const { data: philosophers, isLoading: philLoading } = useAllPhilosophers();
  const { data: branches, isLoading: branchLoading } = useAllBranches();
  const { data: quotes, isLoading: quotesLoading } = useAllQuotes();
  const [quoteIndex, setQuoteIndex] = useState(0);

  const displayQuotes = quotes && quotes.length > 0 ? quotes : null;
  const currentQuote = displayQuotes
    ? displayQuotes[quoteIndex % displayQuotes.length]
    : null;

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "520px",
          background: "oklch(0.07 0.04 280)",
        }}
        data-ocid="hero.section"
      >
        {/* Saraswati Mata background image */}
        <img
          src="/assets/generated/saraswati-mata.dim_1920x1080.jpg"
          alt="Saraswati Mata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.52 }}
          aria-hidden="true"
        />

        {/* Deep spiritual radial vignette - darkness from edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 90% at 50% 50%, transparent 20%, oklch(0.05 0.05 285 / 0.85) 75%, oklch(0.04 0.04 290 / 0.97) 100%)",
          }}
        />

        {/* Top and bottom dark fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.06 0.04 285 / 0.9) 0%, oklch(0.07 0.04 280 / 0.3) 30%, oklch(0.07 0.04 280 / 0.3) 65%, oklch(0.05 0.04 285 / 0.98) 100%)",
          }}
        />

        {/* Left and right deep shadow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.04 0.04 285 / 0.92) 0%, transparent 22%, transparent 78%, oklch(0.04 0.04 285 / 0.92) 100%)",
          }}
        />

        {/* Spiritual purple glow behind text area */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 50%, oklch(0.22 0.12 295 / 0.35) 0%, transparent 70%)",
          }}
        />

        {/* Subtle golden top border glow */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.75 0.14 75 / 0.6), transparent)",
          }}
        />
        {/* Dramatic golden bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.09 0.03 280 / 1))",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.75 0.14 75 / 0.9)" }}
            >
              सत्यं शिवं सुन्दरम्
            </p>
            <h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest mb-6 leading-tight"
              style={{
                color: "oklch(0.88 0.13 75)",
                textShadow:
                  "0 2px 32px oklch(0.05 0.05 285 / 0.98), 0 0 60px oklch(0.35 0.18 295 / 0.55), 0 0 120px oklch(0.25 0.14 295 / 0.4)",
              }}
            >
              ज्ञान का अन्वेषण
              <br />
              करें
            </h1>
            <p
              className="font-sans text-base md:text-lg mb-10 max-w-xl"
              style={{
                color: "oklch(0.88 0.04 80 / 0.9)",
                textShadow: "0 0 24px oklch(0.1 0.06 285 / 0.8)",
              }}
            >
              भारतीय दर्शन की अमूल्य धरोहर
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/philosophers"
                className="px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wider rounded transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "oklch(0.55 0.16 45)",
                  color: "oklch(0.97 0.018 75)",
                  boxShadow:
                    "0 0 24px oklch(0.55 0.16 45 / 0.5), 0 0 60px oklch(0.45 0.14 45 / 0.2)",
                }}
                data-ocid="hero.primary_button"
              >
                यात्रा प्रारंभ करें
              </Link>
              <Link
                to="/branches"
                className="px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wider rounded transition-all hover:opacity-90 active:scale-95 border"
                style={{
                  background: "oklch(0.12 0.05 280 / 0.7)",
                  color: "oklch(0.82 0.13 75)",
                  borderColor: "oklch(0.75 0.14 75 / 0.45)",
                  boxShadow: "0 0 16px oklch(0.75 0.14 75 / 0.1)",
                }}
                data-ocid="hero.secondary_button"
              >
                शाखाएँ देखें
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Featured Philosophers */}
      <section className="py-16 px-4" data-ocid="philosophers.section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-serif text-3xl font-bold mb-2"
              style={{ color: "oklch(0.82 0.13 75)" }}
            >
              प्रमुख ऋषि एवं दार्शनिक
            </h2>
            <p className="text-sm mb-8" style={{ color: "oklch(0.6 0.06 70)" }}>
              भारत के महान विचारकों की खोज करें
            </p>
          </motion.div>

          <div
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "thin" }}
          >
            {philLoading
              ? PHIL_SKELETON_KEYS.map((k) => (
                  <div key={k} className="min-w-[220px] snap-start">
                    <Skeleton className="h-48 w-full rounded-lg" />
                  </div>
                ))
              : (philosophers ?? []).map((p, i) => (
                  <motion.div
                    key={p.id.toString()}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="min-w-[220px] snap-start rounded-lg border p-5 flex flex-col transition-all hover:scale-[1.02]"
                    style={{
                      background: "oklch(0.13 0.04 275)",
                      borderColor: "oklch(0.28 0.07 55 / 0.6)",
                      boxShadow: "0 4px 24px oklch(0.05 0.04 285 / 0.7)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 0 24px oklch(0.65 0.16 45 / 0.3), 0 4px 32px oklch(0.05 0.04 285 / 0.8)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 4px 24px oklch(0.05 0.04 285 / 0.7)";
                    }}
                    data-ocid={`philosophers.item.${i + 1}`}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3 font-serif font-bold text-lg"
                      style={{
                        background: "oklch(0.2 0.07 280)",
                        color: "oklch(0.78 0.15 75)",
                        boxShadow: "0 0 12px oklch(0.65 0.18 45 / 0.25)",
                      }}
                    >
                      {p.name.charAt(0)}
                    </div>
                    <h3
                      className="font-serif font-bold text-base mb-1"
                      style={{ color: "oklch(0.88 0.06 75)" }}
                    >
                      {p.name}
                    </h3>
                    <p
                      className="text-xs mb-1"
                      style={{ color: "oklch(0.65 0.18 45)" }}
                    >
                      {p.era}
                    </p>
                    <p
                      className="text-xs mb-3"
                      style={{ color: "oklch(0.6 0.06 70)" }}
                    >
                      {p.school}
                    </p>
                    <p
                      className="text-xs mb-4 leading-relaxed flex-1"
                      style={{ color: "oklch(0.72 0.04 75)" }}
                    >
                      {p.bio.length > 100 ? `${p.bio.slice(0, 100)}...` : p.bio}
                    </p>
                    <Link
                      to="/philosophers/$id"
                      params={{ id: p.id.toString() }}
                      className="text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-80"
                      style={{ color: "oklch(0.65 0.18 45)" }}
                      data-ocid={`philosophers.link.${i + 1}`}
                    >
                      और जानें →
                    </Link>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Philosophical Branches */}
      <section
        className="py-16 px-4"
        style={{
          background: "oklch(0.1 0.04 278)",
          boxShadow:
            "inset 0 8px 40px oklch(0.04 0.04 285 / 0.7), inset 0 -8px 40px oklch(0.04 0.04 285 / 0.7)",
        }}
        data-ocid="branches.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-serif text-3xl font-bold mb-2"
              style={{ color: "oklch(0.82 0.13 75)" }}
            >
              दर्शन की शाखाएँ
            </h2>
            <p className="text-sm mb-8" style={{ color: "oklch(0.6 0.06 70)" }}>
              दार्शनिक विचार के प्रमुख क्षेत्र
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {branchLoading
              ? BRANCH_SKELETON_KEYS.map((k) => (
                  <Skeleton key={k} className="h-32 rounded-lg" />
                ))
              : (branches ?? []).slice(0, 6).map((branch, i) => (
                  <motion.div
                    key={branch.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to="/branches/$name"
                      params={{ name: branch.name }}
                      className="flex flex-col items-center text-center p-6 rounded-lg border transition-all group"
                      style={{
                        background: "oklch(0.13 0.05 278)",
                        borderColor: "oklch(0.28 0.07 55 / 0.5)",
                        boxShadow: "0 4px 20px oklch(0.04 0.04 285 / 0.6)",
                      }}
                      data-ocid={`branches.item.${i + 1}`}
                    >
                      <span
                        className="mb-3 transition-transform group-hover:scale-110"
                        style={{
                          color: "oklch(0.65 0.18 45)",
                          filter:
                            "drop-shadow(0 0 8px oklch(0.65 0.18 45 / 0.5))",
                        }}
                      >
                        {BRANCH_ICONS[branch.name] ?? (
                          <Brain className="w-7 h-7" />
                        )}
                      </span>
                      <h3
                        className="font-serif font-bold text-sm mb-1"
                        style={{ color: "oklch(0.86 0.06 75)" }}
                      >
                        {branch.name}
                      </h3>
                      <p
                        className="text-xs leading-snug"
                        style={{ color: "oklch(0.62 0.05 70)" }}
                      >
                        {branch.description.length > 60
                          ? `${branch.description.slice(0, 60)}...`
                          : branch.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Quote of the Day */}
      <section className="py-16 px-4" data-ocid="quotes.section">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-serif text-3xl font-bold mb-8"
              style={{ color: "oklch(0.82 0.13 75)" }}
            >
              आज का विचार
            </h2>
          </motion.div>

          <div
            className="rounded-xl p-8 md:p-12 relative"
            style={{
              background: "oklch(0.11 0.06 295)",
              boxShadow:
                "0 8px 48px oklch(0.18 0.12 295 / 0.6), 0 0 80px oklch(0.15 0.1 295 / 0.3), inset 0 1px 0 oklch(0.75 0.14 75 / 0.1)",
              border: "1px solid oklch(0.3 0.08 295 / 0.4)",
            }}
            data-ocid="quotes.card"
          >
            {/* Spiritual aura glow */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.3 0.12 295 / 0.15) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {quotesLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
                <Skeleton className="h-4 w-1/4 mx-auto mt-4" />
              </div>
            ) : currentQuote ? (
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p
                  className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wide leading-relaxed mb-6"
                  style={{
                    color: "oklch(0.92 0.04 75)",
                    textShadow: "0 0 32px oklch(0.5 0.12 295 / 0.5)",
                  }}
                >
                  &ldquo;{currentQuote.text}&rdquo;
                </p>
                <p
                  className="font-sans text-sm font-semibold"
                  style={{ color: "oklch(0.78 0.15 75)" }}
                >
                  — {currentQuote.author}
                </p>
                <p
                  className="font-sans text-xs mt-1"
                  style={{ color: "oklch(0.62 0.05 70)" }}
                >
                  {currentQuote.branch}
                </p>
              </motion.div>
            ) : (
              <p
                className="text-sm relative z-10"
                style={{ color: "oklch(0.62 0.05 70)" }}
              >
                कोई विचार उपलब्ध नहीं।
              </p>
            )}
          </div>

          {/* Pagination dots */}
          {displayQuotes && displayQuotes.length > 1 && (
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                type="button"
                onClick={() =>
                  setQuoteIndex(
                    (i) =>
                      (i - 1 + displayQuotes.length) % displayQuotes.length,
                  )
                }
                className="p-1.5 rounded-full hover:bg-accent transition-colors"
                data-ocid="quotes.pagination_prev"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {displayQuotes
                  .slice(0, Math.min(displayQuotes.length, 8))
                  .map((q, i) => (
                    <button
                      key={q.id.toString()}
                      type="button"
                      onClick={() => setQuoteIndex(i)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        background:
                          i === quoteIndex % displayQuotes.length
                            ? "oklch(0.65 0.18 45)"
                            : "oklch(0.35 0.05 280)",
                      }}
                      data-ocid="quotes.toggle"
                      aria-label={`Quote ${i + 1}`}
                    />
                  ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  setQuoteIndex((i) => (i + 1) % displayQuotes.length)
                }
                className="p-1.5 rounded-full hover:bg-accent transition-colors"
                data-ocid="quotes.pagination_next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
