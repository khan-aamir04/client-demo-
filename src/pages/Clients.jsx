import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card, PageHeader, StatusBadge } from "../components/ui.jsx";
import { clients, formatCurrency } from "../data/clients.js";

const statuses = ["All", "Active", "Onboarding", "At risk", "Churned"];

export default function Clients() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return clients.filter((client) => {
      const matchesStatus = status === "All" || client.status === status;
      const matchesQuery =
        !needle ||
        client.name.toLowerCase().includes(needle) ||
        client.contact.toLowerCase().includes(needle) ||
        client.owner.toLowerCase().includes(needle);
      return matchesStatus && matchesQuery;
    });
  }, [query, status]);

  return (
    <>
      <PageHeader title="Clients" subtitle="Search and filter the full account list." />

      <Card>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <input
            className="field"
            style={{ flex: "1 1 240px" }}
            placeholder="Search by client, contact, or owner"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search clients"
          />
          <select
            className="field"
            style={{ flex: "0 0 180px" }}
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            aria-label="Filter by status"
          >
            {statuses.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr style={{ textAlign: "left", color: "var(--muted)", fontSize: 13 }}>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>CLIENT</th>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>CONTACT</th>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>PLAN</th>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>MRR</th>
                <th style={{ padding: "10px 8px", fontWeight: 600 }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((client) => (
                <tr key={client.id} className="row-link" style={{ borderTop: "1px solid var(--border)" }}>
                  <td style={{ padding: "12px 8px" }}>
                    <Link to={`/clients/${client.id}`} style={{ color: "var(--accent)", fontWeight: 600 }}>
                      {client.name}
                    </Link>
                  </td>
                  <td style={{ padding: "12px 8px", color: "var(--muted)" }}>{client.contact}</td>
                  <td style={{ padding: "12px 8px" }}>{client.plan}</td>
                  <td style={{ padding: "12px 8px" }}>{formatCurrency(client.mrr)}</td>
                  <td style={{ padding: "12px 8px" }}>
                    <StatusBadge status={client.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {rows.length === 0 ? (
          <p style={{ margin: 0, color: "var(--muted)", padding: "16px 8px" }}>
            No clients match those filters yet. Try clearing the search box.
          </p>
        ) : (
          <span style={{ color: "var(--muted)", fontSize: 14 }}>
            Showing {rows.length} of {clients.length} clients
          </span>
        )}
      </Card>
    </>
  );
}
