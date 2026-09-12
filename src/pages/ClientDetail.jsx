import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, PageHeader, StatCard, StatusBadge } from "../components/ui.jsx";
import { formatCurrency, getClient } from "../data/clients.js";

export default function ClientDetail() {
  const { clientId } = useParams();
  const client = getClient(clientId);

  if (!client) {
    return (
      <Card>
        <h1 style={{ margin: 0, fontSize: 22 }}>Client not found</h1>
        <p style={{ margin: 0, color: "var(--muted)" }}>
          We could not find an account with the id “{clientId}”.
        </p>
        <Link to="/clients" className="btn btn-secondary" style={{ alignSelf: "flex-start" }}>
          Back to clients
        </Link>
      </Card>
    );
  }

  return (
    <>
      <div style={{ display: "flex", gap: 8, color: "var(--muted)", fontSize: 14 }}>
        <Link to="/clients" style={{ color: "var(--accent)" }}>
          Clients
        </Link>
        <span>/</span>
        <span>{client.name}</span>
      </div>

      <PageHeader
        title={client.name}
        subtitle={`${client.contact} · ${client.email}`}
        actions={<StatusBadge status={client.status} />}
      />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
        }}
      >
        <StatCard label="Plan" value={client.plan} />
        <StatCard label="MRR" value={formatCurrency(client.mrr)} />
        <StatCard label="Account owner" value={client.owner} />
        <StatCard label="Client since" value={client.since} />
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        <Card>
          <h2 style={{ margin: 0, fontSize: 17 }}>Projects</h2>
          {client.projects.length === 0 ? (
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>No active projects.</p>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {client.projects.map((project) => (
                <li
                  key={project.name}
                  style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15 }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <strong>{project.name}</strong>
                    <span style={{ color: "var(--muted)", fontSize: 13 }}>Due {project.due}</span>
                  </div>
                  <span style={{ color: "var(--muted)", fontSize: 14 }}>{project.stage}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card>
          <h2 style={{ margin: 0, fontSize: 17 }}>Invoices</h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {client.invoices.map((invoice) => (
              <li
                key={invoice.id}
                style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15 }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <strong>{invoice.id}</strong>
                  <span style={{ color: "var(--muted)", fontSize: 13 }}>Issued {invoice.issued}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div>{formatCurrency(invoice.amount)}</div>
                  <span style={{ color: "var(--muted)", fontSize: 13 }}>{invoice.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
}
