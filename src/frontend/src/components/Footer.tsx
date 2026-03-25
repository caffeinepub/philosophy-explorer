import { Link } from "@tanstack/react-router";
import { Github, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      style={{
        background: "oklch(0.07 0.04 280)",
        borderTop: "1px solid oklch(0.28 0.07 55 / 0.35)",
        boxShadow: "0 -4px 40px oklch(0.04 0.04 285 / 0.7)",
      }}
      className="text-white pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b"
          style={{ borderColor: "oklch(0.25 0.06 55 / 0.3)" }}
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="font-serif font-bold text-xl tracking-widest"
                style={{
                  color: "oklch(0.82 0.13 75)",
                  textShadow: "0 0 20px oklch(0.65 0.18 45 / 0.45)",
                }}
              >
                चित्तसत्व अनुभूति
              </span>
            </div>
            <p className="text-sm" style={{ color: "oklch(0.62 0.04 70)" }}>
              भारतीय दर्शन की अनमोल धरोहर को खोजें — ज्ञान, सत्य और मोक्ष की यात्रा।
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                style={{ color: "oklch(0.62 0.04 70)" }}
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                style={{ color: "oklch(0.62 0.04 70)" }}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                style={{ color: "oklch(0.62 0.04 70)" }}
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* अन्वेषण */}
          <div>
            <h4
              className="font-sans font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.78 0.15 75)" }}
            >
              अन्वेषण
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/philosophers"
                  className="transition-colors"
                  style={{ color: "oklch(0.62 0.04 70)" }}
                  data-ocid="footer.link"
                >
                  दार्शनिक
                </Link>
              </li>
              <li>
                <Link
                  to="/branches"
                  className="transition-colors"
                  style={{ color: "oklch(0.62 0.04 70)" }}
                  data-ocid="footer.link"
                >
                  शाखाएँ
                </Link>
              </li>
              <li>
                <Link
                  to="/quotes"
                  className="transition-colors"
                  style={{ color: "oklch(0.62 0.04 70)" }}
                  data-ocid="footer.link"
                >
                  विचार
                </Link>
              </li>
            </ul>
          </div>

          {/* शाखाएँ */}
          <div>
            <h4
              className="font-sans font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.78 0.15 75)" }}
            >
              शाखाएँ
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/branches/$name"
                  params={{ name: "तत्त्वमीमांसा" }}
                  className="transition-colors"
                  style={{ color: "oklch(0.62 0.04 70)" }}
                  data-ocid="footer.link"
                >
                  तत्त्वमीमांसा
                </Link>
              </li>
              <li>
                <Link
                  to="/branches/$name"
                  params={{ name: "नीतिशास्त्र" }}
                  className="transition-colors"
                  style={{ color: "oklch(0.62 0.04 70)" }}
                  data-ocid="footer.link"
                >
                  नीतिशास्त्र
                </Link>
              </li>
              <li>
                <Link
                  to="/branches/$name"
                  params={{ name: "ज्ञानमीमांसा" }}
                  className="transition-colors"
                  style={{ color: "oklch(0.62 0.04 70)" }}
                  data-ocid="footer.link"
                >
                  ज्ञानमीमांसा
                </Link>
              </li>
              <li>
                <Link
                  to="/branches/$name"
                  params={{ name: "तर्कशास्त्र" }}
                  className="transition-colors"
                  style={{ color: "oklch(0.62 0.04 70)" }}
                  data-ocid="footer.link"
                >
                  तर्कशास्त्र
                </Link>
              </li>
            </ul>
          </div>

          {/* परिचय */}
          <div>
            <h4
              className="font-sans font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.78 0.15 75)" }}
            >
              परिचय
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span style={{ color: "oklch(0.5 0.03 70)" }}>
                  चित्तसत्व के बारे में
                </span>
              </li>
              <li>
                <span style={{ color: "oklch(0.5 0.03 70)" }}>योगदान करें</span>
              </li>
              <li>
                <span style={{ color: "oklch(0.5 0.03 70)" }}>संपर्क करें</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-2">
          <p className="text-xs" style={{ color: "oklch(0.5 0.03 70)" }}>
            &copy; {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              className="underline transition-colors"
              style={{ color: "oklch(0.62 0.04 70)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs" style={{ color: "oklch(0.5 0.03 70)" }}>
            चित्तसत्व अनुभूति — भारतीय दर्शन
          </p>
        </div>
      </div>
    </footer>
  );
}
