import React from "react";
import { statusColors } from "../data/clients.js";

export function Card({ children, style }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function StatCard({ label, value, hint }) {
  return (
    <Card style={{ gap: 6 }}>
      <span style={{ color: "var(--muted)", fontSize: 13, fontWeight: 600, letterSpacing: 0.3 }}>
        {label.toUpperCase()}
      </span>
      <strong style={{ fontSize: 28, lineHeight: 1.1 }}>{value}</strong>
      {hint ? <span style={{ color: "var(--muted)", fontSize: 14 }}>{hint}</span> : null}
    </Card>
  );
}

export function StatusBadge({ status }) {
  const tone = statusColors[status] || statusColors.Churned;
  return (
    <span
      style={{
        background: tone.bg,
        color: tone.fg,
        borderRadius: 999,
        padding: "3px 10px",
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}

export function PageHeader({ title, subtitle, actions }) {
  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h1 style={{ margin: 0, fontSize: 28 }}>{title}</h1>
        {subtitle ? (
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 15 }}>{subtitle}</p>
        ) : null}
      </div>
      {actions}
    </header>
  );
}
