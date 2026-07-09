export default function AccessDeniedPage() {
  const page: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--space-5)",
    background: "var(--ea-teal-900)",
    textAlign: "center",
  };
  return (
    <div style={page}>
      <div style={{ fontSize: 48, marginBottom: "var(--space-4)" }}>🏀</div>
      <h1 style={{
        fontFamily: "var(--font-display)", fontSize: "var(--fs-display-xs)",
        color: "var(--ea-white)", textTransform: "uppercase",
        letterSpacing: "var(--ls-display)", marginBottom: "var(--space-3)",
      }}>
        Access Not Set Up
      </h1>
      <p style={{ color: "var(--ea-orange)", fontSize: "var(--fs-body-sm)", marginBottom: "var(--space-6)" }}>
        Your account isn&apos;t set up yet.<br />Ask your administrator to invite you to EA Hoops.
      </p>
      <a href="/sign-in" style={{
        color: "var(--ea-sky-light)", fontSize: "var(--fs-label)", textDecoration: "underline",
      }}>
        ← Back to sign in
      </a>
    </div>
  );
}
