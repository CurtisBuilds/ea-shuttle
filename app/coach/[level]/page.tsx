import { notFound } from "next/navigation";
import { getLevel } from "@/lib/curriculum";
import Link from "next/link";

const levelColors: Record<string, string> = {
  learn:   "#2FA36B",
  train:   "#0092DB",
  compete: "#9C27B0",
  win:     "#E53935",
};

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = getLevel(params.level);
  if (!level) notFound();

  const accent = levelColors[level.id] ?? "#0092DB";

  return (
    <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-6) var(--space-5)" }}>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-6)" }}>
        <Link href="/coach" style={{ fontSize: "var(--fs-label)", color: "var(--ea-slate)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: "var(--space-3)" }}>
          ← All Levels
        </Link>
        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: "var(--fs-display-sm)",
          color: "var(--ea-navy)", textTransform: "uppercase",
          letterSpacing: "var(--ls-display)", lineHeight: "var(--lh-display)",
          marginBottom: "var(--space-2)",
        }}>
          {level.name}
        </h1>
        <p style={{ color: "var(--ea-slate)", fontSize: "var(--fs-body-sm)" }}>{level.description}</p>
      </div>

      {/* Session grid */}
      <div style={{ display: "grid", gap: "var(--space-3)", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {level.sessions.map((session) => {
          const drillCount = session.sections.reduce((n, s) => n + s.drills.length, 0);
          const hasMissingContent = session.sections.length === 0;

          return (
            <Link
              key={session.id}
              href={`/coach/${level.id}/${session.id}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "var(--ea-white)",
                border: `1px solid var(--ea-line)`,
                borderTop: `3px solid ${accent}`,
                borderRadius: "var(--radius-button)",
                padding: "var(--space-4) var(--space-5)",
                boxShadow: "var(--shadow-card)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: 11,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: accent,
                }}>
                  Session {session.id}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: "var(--fs-body-sm)",
                  color: "var(--ea-navy)", fontWeight: "var(--fw-semibold)",
                  lineHeight: 1.3,
                }}>
                  {session.title}
                </div>
                <div style={{ flex: 1 }} />
                <div style={{ fontSize: 12, color: "var(--ea-slate)" }}>
                  {hasMissingContent ? (
                    <span style={{ color: "var(--ea-muted)" }}>Content unavailable</span>
                  ) : (
                    <>{drillCount} drill{drillCount !== 1 ? "s" : ""} · {session.sections.length} section{session.sections.length !== 1 ? "s" : ""}</>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </main>
  );
}
