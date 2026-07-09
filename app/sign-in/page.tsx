import SignIn from "@/components/SignIn";

export default function SignInPage() {
  const page: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--space-5)",
    background: "var(--ea-sky-soft)",
  };
  const sub: React.CSSProperties = {
    color: "var(--ea-teal-700)",
    fontSize: "var(--fs-label)",
    fontFamily: "var(--font-body)",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: "var(--space-7)",
    textAlign: "center",
  };
  const card: React.CSSProperties = {
    width: "100%",
    maxWidth: 380,
  };

  return (
    <div style={page}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/bdmtn-logo.svg" alt="Elevation Athletics" style={{ height: 90, width: "auto", marginBottom: "var(--space-2)" }} />
      <div style={sub}>Jr Badminton Coach Curriculum</div>
      <div style={card}>
        <SignIn />
      </div>
    </div>
  );
}
