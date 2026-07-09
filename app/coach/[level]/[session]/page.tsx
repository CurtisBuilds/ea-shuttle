import { notFound } from "next/navigation";
import { getLevel, getSession, DRILL_VIDEOS } from "@/lib/curriculum";
import Link from "next/link";

const levelColors: Record<string, string> = {
  learn:   "#2FA36B",
  train:   "#0092DB",
  compete: "#9C27B0",
  win:     "#E53935",
};

const sectionIcons: Record<string, string> = {
  "warm": "🏃",
  "footwork": "👟",
  "net": "🏸",
  "serve": "🎯",
  "clear": "🌬️",
  "drop": "⬇️",
  "smash": "💥",
  "drive": "⚡",
  "rally": "🔄",
  "game": "🏆",
  "match": "🏆",
  "basic": "📋",
  "beginner": "📋",
  "technique": "🎯",
  "skill": "⭐",
  "movement": "👟",
  "conditioning": "💪",
  "multi": "🔀",
  "shadow": "👤",
};

function getSectionIcon(heading: string): string {
  const key = heading.toLowerCase();
  for (const [k, icon] of Object.entries(sectionIcons)) {
    if (key.includes(k)) return icon;
  }
  return "📋";
}

function cleanDrillName(drill: string): string {
  return drill.trim();
}

export default function SessionPage({ params }: { params: { level: string; session: string } }) {
  const sessionId = parseInt(params.session, 10);
  const level = getLevel(params.level);
  const session = getSession(params.level, sessionId);
  if (!level || !session) notFound();

  const accent = levelColors[level.id] ?? "#0092DB";
  const prevSession = sessionId > 1 ? getSession(params.level, sessionId - 1) : null;
  const nextSession = sessionId < 8 ? getSession(params.level, sessionId + 1) : null;

  const totalDrills = session.sections.reduce((n, s) => n + s.drills.length, 0);

  return (
    <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-6) var(--space-5)" }}>
      {/* Back nav */}
      <Link href={`/coach/${level.id}`} style={{
        fontSize: "var(--fs-label)", color: "var(--ea-slate)",
        textDecoration: "none", display: "inline-flex", alignItems: "center",
        gap: 4, marginBottom: "var(--space-4)",
      }}>
        ← {level.name} — All Sessions
      </Link>

      {/* Header card */}
      <div style={{
        background: "var(--ea-white)",
        borderRadius: "var(--radius-button)",
        borderTop: `4px solid ${accent}`,
        padding: "var(--space-5) var(--space-6)",
        boxShadow: "var(--shadow-card)",
        marginBottom: "var(--space-5)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "var(--space-4)",
      }}>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontSize: 11,
            textTransform: "uppercase", letterSpacing: "0.1em",
            color: accent, marginBottom: "var(--space-2)",
          }}>
            {level.name} · Session {session.id}
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "var(--fs-display-xs)",
            color: "var(--ea-navy)", textTransform: "uppercase",
            letterSpacing: "var(--ls-display)", lineHeight: "var(--lh-display)",
          }}>
            {session.title}
          </h1>
          <div style={{ marginTop: "var(--space-2)", fontSize: "var(--fs-label)", color: "var(--ea-slate)" }}>
            {totalDrills} drills · {session.sections.length} sections
          </div>
        </div>

        {/* View online link */}
        <a href={session.url} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "8px 16px", border: `1px solid ${accent}`,
          color: accent, borderRadius: "var(--radius-button)",
          fontSize: "var(--fs-label)", textDecoration: "none",
          fontFamily: "var(--font-body)", fontWeight: "var(--fw-semibold)",
          whiteSpace: "nowrap",
        }}>
          View with videos ↗
        </a>
      </div>

      {/* Sections */}
      {session.sections.length === 0 ? (
        <div style={{
          background: "var(--ea-white)", borderRadius: "var(--radius-button)",
          padding: "var(--space-7)", textAlign: "center",
          color: "var(--ea-muted)", boxShadow: "var(--shadow-card)",
        }}>
          <div style={{ fontSize: 32, marginBottom: "var(--space-3)" }}>🏸</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Content Not Available
          </div>
          <p style={{ fontSize: "var(--fs-body-sm)", marginTop: "var(--space-2)" }}>
            This practice plan page was not found on the source website.
          </p>
          <a href={session.url} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", marginTop: "var(--space-4)",
            color: accent, fontSize: "var(--fs-label)", textDecoration: "underline",
          }}>
            Check source website ↗
          </a>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {session.sections.map((section, i) => (
            <div key={i} style={{
              background: "var(--ea-white)",
              borderRadius: "var(--radius-button)",
              boxShadow: "var(--shadow-card)",
              overflow: "hidden",
            }}>
              {/* Section header */}
              <div style={{
                padding: "var(--space-3) var(--space-5)",
                background: section.heading.toLowerCase().includes("competing") ? accent :
                             section.heading.toLowerCase().includes("warm") ? "#FFF3E0" :
                             "var(--ea-mist)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                borderBottom: "1px solid var(--ea-line)",
              }}>
                <span style={{ fontSize: 18 }}>{getSectionIcon(section.heading)}</span>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: 14,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: section.heading.toLowerCase().includes("competing") ? "#fff" : "var(--ea-navy)",
                }}>
                  {section.heading}
                </span>
                <span style={{
                  marginLeft: "auto", fontSize: 12,
                  color: section.heading.toLowerCase().includes("competing") ? "rgba(255,255,255,0.7)" : "var(--ea-slate)",
                }}>
                  {section.drills.length} drill{section.drills.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Drills */}
              <div style={{ padding: "var(--space-3) var(--space-5)" }}>
                {section.drills.map((drill, j) => {
                  const drillName = cleanDrillName(drill);
                  const videoUrl = DRILL_VIDEOS[drillName];
                  return (
                    <div key={j} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-3)",
                      padding: "var(--space-2) 0",
                      borderBottom: j < section.drills.length - 1 ? "1px solid var(--ea-line)" : "none",
                    }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: "50%",
                        background: `${accent}22`,
                        color: accent, fontSize: 12, fontWeight: "var(--fw-bold)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        {j + 1}
                      </div>
                      <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--ea-ink)", lineHeight: 1.5, flex: 1 }}>
                        {drillName}
                      </span>
                      {videoUrl && (
                        <a
                          href={videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Watch on YouTube"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 4,
                            padding: "4px 10px", borderRadius: 6,
                            background: "#FF0000", color: "#fff",
                            fontSize: 11, fontWeight: "var(--fw-bold)",
                            textDecoration: "none", flexShrink: 0,
                            fontFamily: "var(--font-body)",
                            letterSpacing: "0.03em",
                          }}
                        >
                          ▶ YouTube
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Prev / Next nav */}
      <div style={{
        display: "flex", justifyContent: "space-between", marginTop: "var(--space-6)",
        gap: "var(--space-3)",
      }}>
        {prevSession ? (
          <Link href={`/coach/${level.id}/${prevSession.id}`} style={{
            padding: "10px 20px", background: "var(--ea-white)",
            border: `1px solid var(--ea-line)`, borderRadius: "var(--radius-button)",
            fontSize: "var(--fs-label)", color: "var(--ea-ink)",
            textDecoration: "none", fontFamily: "var(--font-body)",
          }}>
            ← Session {prevSession.id}
          </Link>
        ) : <div />}

        {nextSession && nextSession.sections.length > 0 ? (
          <Link href={`/coach/${level.id}/${nextSession.id}`} style={{
            padding: "10px 20px", background: accent,
            borderRadius: "var(--radius-button)", fontSize: "var(--fs-label)",
            color: "#fff", textDecoration: "none", fontFamily: "var(--font-body)",
            fontWeight: "var(--fw-semibold)",
          }}>
            Session {nextSession.id} →
          </Link>
        ) : nextSession ? (
          <Link href={`/coach/${level.id}/${nextSession.id}`} style={{
            padding: "10px 20px", background: "var(--ea-white)",
            border: `1px solid var(--ea-line)`, borderRadius: "var(--radius-button)",
            fontSize: "var(--fs-label)", color: "var(--ea-ink)",
            textDecoration: "none", fontFamily: "var(--font-body)",
          }}>
            Session {nextSession.id} →
          </Link>
        ) : <div />}
      </div>
    </main>
  );
}
