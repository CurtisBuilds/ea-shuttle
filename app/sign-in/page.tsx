import SignIn from "@/components/SignIn";

export default function SignInPage() {
  const page: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--space-5)",
    background: "var(--ea-teal-900)",
  };
  const logo: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "var(--fs-display-sm)",
    color: "var(--ea-white)",
    textTransform: "uppercase",
    letterSpacing: "var(--ls-display)",
    marginBottom: "var(--space-2)",
    textAlign: "center",
  };
  const sub: React.CSSProperties = {
    color: "var(--ea-orange)",
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
      <div style={logo}>EA Hoops</div>
      <div style={sub}>Jr Basketball Coach Curriculum</div>
      <div style={card}>
        <SignIn />
      </div>
    </div>
  );
}
