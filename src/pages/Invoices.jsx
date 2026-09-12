import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card, PageHeader, StatCard } from "../components/ui.jsx";
import { clients, formatCurrency } from "../data/clients.js";

const all = clients.flatMap((client) =>
  client.invoices.map((invoice) => ({ ...invoice, client: client.name, clientId: client.id })),
);

const filters = ["All", "Open", "Paid", "Overdue"];

export default function Invoices() {
  const [filter, setFilter] = useState("All");

  const rows = useMemo(
    () => (filter === "All" ? all : all.filter((invoice) => invoice.status === filter)),
    [filter],
  );

  const outstanding = all
    .filter((invoice) => invoice.status !== "Paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <>
      <PageHeader title="Invoices" subtitle="Billing activity for the current quarter." />

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        <StatCard label="Outstanding" value={formatCurrency(outstanding)} />
        <StatCard label="Invoices issued" value={all.length} />
        <StatCard label="Overdue" value={all.filter((i) => i.status === "Overdue").length} />
      </section>

      <Card>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={filter === option ? "btn" : "btn btn-secondary"}
              style={{ padding: "7px 14px", fontSize: 14 }}
            >
              {option}
            </button>
          ))}
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr style={{ textAlign: "left", color: "var(--muted)", fontSize: 13 }}>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>INVOICE</th>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>CLIENT</th>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>ISSUED</th>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>AMOUNT</th>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((invoice) => (
                <tr key={invoice.id} className="row-link" style={{ borderTop: "1px solid var(--border)" }}>
                  <td style={{ padding: "12px 8px", fontWeight: 600 }}>{invoice.id}</td>
                  <td style={{ padding: "12px 8px" }}>
                    <Link to={`/clients/${invoice.clientId}`} style={{ color: "var(--accent)" }}>
                      {invoice.client}
                    </Link>
                  </td>
                  <td style={{ padding: "12px 8px", color: "var(--muted)" }}>{invoice.issued}</td>
                  <td style={{ padding: "12px 8px" }}>{formatCurrency(invoice.amount)}</td>
                  <td style={{ padding: "12px 8px" }}>{invoice.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
