import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/philosophers", label: "दार्शनिक" },
    { to: "/branches", label: "शाखाएँ" },
    { to: "/quotes", label: "विचार" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "oklch(0.08 0.04 280 / 0.95)",
        borderColor: "oklch(0.28 0.07 55 / 0.4)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 32px oklch(0.04 0.04 285 / 0.8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
            <span
              className="font-serif font-bold text-base tracking-widest"
              style={{
                color: "oklch(0.82 0.13 75)",
                textShadow: "0 0 16px oklch(0.65 0.18 45 / 0.4)",
              }}
            >
              चित्तसत्व अनुभूति
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname.startsWith(link.to)
                    ? "border-b-2 pb-0.5"
                    : ""
                }`}
                style={{
                  color: location.pathname.startsWith(link.to)
                    ? "oklch(0.78 0.15 75)"
                    : "oklch(0.72 0.04 75)",
                  borderColor: location.pathname.startsWith(link.to)
                    ? "oklch(0.65 0.18 45)"
                    : "transparent",
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: "oklch(0.72 0.04 75)" }}
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
            style={{
              background: "oklch(0.09 0.04 280)",
              borderColor: "oklch(0.28 0.07 55 / 0.4)",
            }}
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium py-2 border-b"
                  style={{
                    color: "oklch(0.78 0.08 75)",
                    borderColor: "oklch(0.28 0.07 55 / 0.3)",
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
