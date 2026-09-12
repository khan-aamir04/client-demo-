import React from "react";
import { Link } from "react-router-dom";
import { Card, PageHeader, StatCard, StatusBadge } from "../components/ui.jsx";
import { activity, clients, formatCurrency } from "../data/clients.js";

export default function Dashboard() {
  const active = clients.filter((c) => c.status === "Active");
  const mrr = clients.reduce((sum, c) => sum + c.mrr, 0);
  const openInvoices = clients
    .flatMap((c) => c.invoices)
    .filter((i) => i.status !== "Paid");
  const atRisk = clients.filter((c) => c.status === "At risk");

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Portfolio health across all client accounts."
        actions={
          <Link to="/clients" className="btn" style={{ display: "inline-block" }}>
            View all clients
          </Link>
        }
      />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        <StatCard label="Monthly recurring" value={formatCurrency(mrr)} hint="Across 6 accounts" />
        <StatCard label="Active clients" value={active.length} hint={`${atRisk.length} flagged at risk`} />
        <StatCard
          label="Open invoices"
          value={openInvoices.length}
          hint={formatCurrency(openInvoices.reduce((s, i) => s + i.amount, 0)) + " outstanding"}
        />
        <StatCard label="Live projects" value={clients.flatMap((c) => c.projects).length} hint="7 owners assigned" />
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 16 }}>
        <Card>
          <h2 style={{ margin: 0, fontSize: 17 }}>Accounts needing attention</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {clients
              .filter((c) => c.status !== "Active")
              .map((client) => (
                <Link
                  key={client.id}
                  to={`/clients/${client.id}`}
                  className="row-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "12px 8px",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <strong style={{ fontSize: 15 }}>{client.name}</strong>
                    <span style={{ color: "var(--muted)", fontSize: 14 }}>
                      {client.plan} · owner {client.owner}
                    </span>
                  </div>
                  <StatusBadge status={client.status} />
                </Link>
              ))}
          </div>
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 17 }}>Recent activity</h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {activity.map((item) => (
              <li key={item.when + item.what} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 14, lineHeight: 1.45 }}>{item.what}</span>
                <span style={{ color: "var(--muted)", fontSize: 13 }}>
                  {item.when} · {item.who}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
}
