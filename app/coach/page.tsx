import { getAllLevels } from "@/lib/curriculum";
import Link from "next/link";

export default function CoachHomePage() {
  const levels = getAllLevels();

  const levelColors: Record<string, { accent: string }> = {
    learn:   { accent: "#2FA36B" },
    train:   { accent: "#0092DB" },
    compete: { accent: "#9C27B0" },
    win:     { accent: "#E53935" },
  };

  return (
    <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-6) var(--space-5)" }}>
      <div style={{ marginBottom: "var(--space-6)" }}>
        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: "var(--fs-display-sm)",
          color: "var(--ea-navy)", textTransform: "uppercase",
          letterSpacing: "var(--ls-display)", lineHeight: "var(--lh-display)",
          marginBottom: "var(--space-2)",
        }}>
          Junior Shuttle Curriculum
        </h1>
        <p style={{ color: "var(--ea-slate)", fontSize: "var(--fs-body-sm)" }}>
          4 levels · 8 sessions each · Tap a level to get started
        </p>
      </div>

      <div style={{ display: "grid", gap: "var(--space-4)", gridTemplateColumns: "1fr" }}>
        {levels.map((level) => {
          const c = levelColors[level.id] ?? { accent: "#0092DB" };
          return (
            <Link key={level.id} href={`/coach/${level.id}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "var(--ea-white)",
                border: `2px solid ${c.accent}`,
                borderRadius: "var(--radius-button)",
                padding: "var(--space-5) var(--space-6)",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-5)",
              }}>
                <div style={{
                  background: c.accent,
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-badge)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>
                  {level.name}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: 18,
                    color: "var(--ea-navy)", textTransform: "uppercase",
                    letterSpacing: "0.04em", marginBottom: 4,
                  }}>
                    {level.name}
                  </div>
                  <div style={{ fontSize: "var(--fs-body-sm)", color: "var(--ea-slate)", lineHeight: 1.4 }}>
                    {level.description}
                  </div>
                </div>
                <div style={{
                  textAlign: "right", flexShrink: 0,
                  fontFamily: "var(--font-display)", fontSize: 28,
                  color: c.accent, lineHeight: 1,
                }}>
                  {level.sessions.length}
                  <div style={{ fontSize: 11, color: "var(--ea-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.06em" }}>
                    SESSIONS
                  </div>
                </div>
                <div style={{ color: c.accent, fontSize: 20, flexShrink: 0 }}>›</div>
              </div>
            </Link>
          );
        })}
      </div>

      <div style={{ marginTop: "var(--space-6)", padding: "var(--space-4) var(--space-5)", background: "var(--ea-white)", borderRadius: "var(--radius-button)", boxShadow: "var(--shadow-card)" }}>
        <div style={{ fontSize: "var(--fs-body-sm)", color: "var(--ea-slate)" }}>
          Curriculum sourced from{" "}
          <a href="https://eabadminton.com/ea-junior-badminton-instructional-curriculum/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ea-link)" }}>
            eabadminton.com ↗
          </a>
        </div>
      </div>
    </main>
  );
}
