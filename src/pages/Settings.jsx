import React, { useState } from "react";
import { Card, PageHeader } from "../components/ui.jsx";

export default function Settings() {
  const [form, setForm] = useState({
    workspace: "Client Demo",
    owner: "Priya Raman",
    currency: "USD",
    weeklyDigest: true,
  });
  const [saved, setSaved] = useState(false);

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  return (
    <>
      <PageHeader title="Settings" subtitle="Workspace preferences for this demo account." />

      <Card style={{ maxWidth: 560, gap: 20 }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSaved(true);
          }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14 }}>
            Workspace name
            <input
              className="field"
              value={form.workspace}
              onChange={(event) => update("workspace", event.target.value)}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14 }}>
            Default account owner
            <input
              className="field"
              value={form.owner}
              onChange={(event) => update("owner", event.target.value)}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14 }}>
            Reporting currency
            <select
              className="field"
              value={form.currency}
              onChange={(event) => update("currency", event.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
            <input
              type="checkbox"
              checked={form.weeklyDigest}
              onChange={(event) => update("weeklyDigest", event.target.checked)}
            />
            Email me a weekly portfolio digest
          </label>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button type="submit" className="btn">
              Save changes
            </button>
            {saved ? (
              <span style={{ color: "#12683f", fontSize: 14, fontWeight: 600 }}>
                Preferences saved
              </span>
            ) : null}
          </div>
        </form>
      </Card>
    </>
  );
}
