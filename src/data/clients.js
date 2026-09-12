export const clients = [
  {
    id: "northwind",
    name: "Northwind Traders",
    contact: "Avery Lin",
    email: "avery.lin@northwind.example",
    status: "Active",
    plan: "Enterprise",
    mrr: 8400,
    since: "2021-03-14",
    owner: "Priya Raman",
    projects: [
      { name: "Warehouse portal", stage: "In build", due: "2026-10-02" },
      { name: "Supplier API", stage: "Discovery", due: "2026-11-18" },
    ],
    invoices: [
      { id: "INV-2041", amount: 8400, issued: "2026-08-01", status: "Paid" },
      { id: "INV-2098", amount: 8400, issued: "2026-09-01", status: "Open" },
    ],
  },
  {
    id: "lumen",
    name: "Lumen Health",
    contact: "Dana Okafor",
    email: "dana@lumenhealth.example",
    status: "Active",
    plan: "Growth",
    mrr: 4200,
    since: "2022-07-01",
    owner: "Marcus Webb",
    projects: [
      { name: "Patient intake redesign", stage: "In build", due: "2026-09-29" },
    ],
    invoices: [
      { id: "INV-2042", amount: 4200, issued: "2026-08-01", status: "Paid" },
      { id: "INV-2099", amount: 4200, issued: "2026-09-01", status: "Open" },
    ],
  },
  {
    id: "atlas",
    name: "Atlas Logistics",
    contact: "Ren Watanabe",
    email: "ren.w@atlaslogistics.example",
    status: "At risk",
    plan: "Enterprise",
    mrr: 9600,
    since: "2020-11-22",
    owner: "Priya Raman",
    projects: [
      { name: "Fleet analytics", stage: "Blocked", due: "2026-09-20" },
      { name: "Driver mobile app", stage: "In build", due: "2026-12-05" },
    ],
    invoices: [
      { id: "INV-2043", amount: 9600, issued: "2026-08-01", status: "Overdue" },
      { id: "INV-2100", amount: 9600, issued: "2026-09-01", status: "Open" },
    ],
  },
  {
    id: "brightpath",
    name: "Brightpath Learning",
    contact: "Sofia Marín",
    email: "sofia@brightpath.example",
    status: "Onboarding",
    plan: "Starter",
    mrr: 1200,
    since: "2026-08-19",
    owner: "Elena Fischer",
    projects: [
      { name: "Course catalog", stage: "Discovery", due: "2026-10-15" },
    ],
    invoices: [
      { id: "INV-2101", amount: 1200, issued: "2026-09-01", status: "Open" },
    ],
  },
  {
    id: "harborview",
    name: "Harborview Capital",
    contact: "Tom Ashby",
    email: "t.ashby@harborview.example",
    status: "Churned",
    plan: "Growth",
    mrr: 0,
    since: "2019-05-06",
    owner: "Marcus Webb",
    projects: [],
    invoices: [
      { id: "INV-1980", amount: 3600, issued: "2026-06-01", status: "Paid" },
    ],
  },
  {
    id: "vertex",
    name: "Vertex Robotics",
    contact: "Nina Kaur",
    email: "nina.kaur@vertex.example",
    status: "Active",
    plan: "Growth",
    mrr: 5100,
    since: "2023-02-10",
    owner: "Elena Fischer",
    projects: [
      { name: "Telemetry dashboard", stage: "In build", due: "2026-10-30" },
    ],
    invoices: [
      { id: "INV-2102", amount: 5100, issued: "2026-09-01", status: "Paid" },
    ],
  },
];

export const activity = [
  { when: "Today, 09:20", who: "Priya Raman", what: "Logged a renewal call with Atlas Logistics" },
  { when: "Today, 08:05", who: "System", what: "Invoice INV-2100 sent to Atlas Logistics" },
  { when: "Yesterday", who: "Elena Fischer", what: "Moved Brightpath Learning to Onboarding" },
  { when: "Yesterday", who: "Marcus Webb", what: "Closed Lumen Health intake redesign milestone 2" },
  { when: "2 days ago", who: "System", what: "Vertex Robotics payment of $5,100 received" },
];

export const statusColors = {
  Active: { bg: "#e7f6ee", fg: "#12683f" },
  Onboarding: { bg: "#e8effd", fg: "#1d4ed8" },
  "At risk": { bg: "#fdeee8", fg: "#9a3d12" },
  Churned: { bg: "#eff1f5", fg: "#5b6777" },
};

export function formatCurrency(value) {
  return `$${value.toLocaleString("en-US")}`;
}

export function getClient(id) {
  return clients.find((client) => client.id === id);
}
