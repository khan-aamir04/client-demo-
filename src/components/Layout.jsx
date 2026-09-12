import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/clients", label: "Clients" },
  { to: "/invoices", label: "Invoices" },
  { to: "/settings", label: "Settings" },
];

export default function Layout() {
  return (
    <div
      className="app-shell"
      style={{ display: "grid", gridTemplateColumns: "248px 1fr", minHeight: "100%" }}
    >
      <aside
        className="app-sidebar"
        style={{
          background: "var(--surface)",
          borderRight: "1px solid var(--border)",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "var(--accent)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            CD
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: 15 }}>Client Demo</strong>
            <span style={{ color: "var(--muted)", fontSize: 13 }}>Account workspace</span>
          </div>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className="nav-link">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background: "var(--accent-soft)",
              color: "var(--accent)",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            PR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: 14 }}>Priya Raman</strong>
            <span style={{ color: "var(--muted)", fontSize: 13 }}>Account manager</span>
          </div>
        </div>
      </aside>

      <main
        style={{
          padding: "32px 32px 56px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 1120,
          width: "100%",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
