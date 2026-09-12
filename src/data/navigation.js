export const NAV_LINKS = [
  { label: "ARCHIVE", to: "/" },
  { label: "THE UNICORN", to: "/unicorn" },
  { label: "SPECIES", to: "/species" },
  { label: "REALMS", to: "/realms" },
  { label: "MAGIC", to: "/magic" },
  { label: "LEGENDS", to: "/legends" },
  { label: "JOURNAL", to: "/journal" },
  { label: "FIELD NOTES", to: "/field-notes" },
  { label: "ABOUT", to: "/about" },
];

export const DESKTOP_NAV_LABELS = [
  "ARCHIVE",
  "SPECIES",
  "REALMS",
  "MAGIC",
  "LEGENDS",
  "JOURNAL",
];

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1613315051145-30905e91ed7c?crop=entropy&cs=srgb&fm=jpg&q=80";

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1613315051145-30905e91ed7c?crop=entropy&cs=srgb&fm=jpg&q=85";

export const testId = (label) => label.toLowerCase().replaceAll(" ", "-");
