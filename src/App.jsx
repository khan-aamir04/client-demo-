import React, { useState } from "react";

const cards = [
  {
    title: "Frontend",
    body: "Vite + React dev server running in Docker with host networking.",
  },
  {
    title: "Alloy config",
    body: ".alloy/environment.json declares the compose path and frontend port.",
  },
  {
    title: "Preview",
    body: "Alloy proxies http://localhost:8080 to the dev server on port 5173.",
  },
];

export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <main
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            alignSelf: "flex-start",
            background: "#e8effd",
            color: "var(--accent)",
            borderRadius: 999,
            padding: "4px 12px",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.2,
          }}
        >
          Alloy ready
        </span>
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.15 }}>Client Demo</h1>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 18, maxWidth: 620 }}>
          A starting point for this repository. The environment boots through
          Docker Compose so every Alloy session gets the same running app.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 17 }}>{card.title}</h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 15, lineHeight: 1.5 }}>
              {card.body}
            </p>
          </article>
        ))}
      </section>

      <section
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: 24,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <button
          type="button"
          onClick={() => setClicks((c) => c + 1)}
          style={{
            background: "var(--accent)",
            color: "#ffffff",
            border: "none",
            borderRadius: 8,
            padding: "10px 18px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Test interactivity
        </button>
        <span style={{ color: "var(--muted)", fontSize: 15 }}>
          Clicks recorded: <strong style={{ color: "var(--text)" }}>{clicks}</strong>
        </span>
      </section>
    </main>
  );
}
