import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import {
  ArchiveLayout,
  EditorialButton,
  EditorialImage,
  SectionLabel,
} from "../components/archive.jsx";
import { JOURNAL_ENTRIES, JOURNAL_FILTERS } from "../data/journal.js";

export default function Journal() {
  const [filter, setFilter] = useState("ALL");
  const [openEntry, setOpenEntry] = useState(null);

  const entries =
    filter === "ALL"
      ? JOURNAL_ENTRIES
      : JOURNAL_ENTRIES.filter((entry) => entry.category === filter);

  return (
    <ArchiveLayout>
      <section className="journal-hero page-section" data-testid="journal-page">
        <SectionLabel number="01">THE ARCHIVE JOURNAL</SectionLabel>

        <div className="journal-hero-grid">
          <div>
            <h1 data-testid="journal-title">
              NOTES FROM
              <br />
              <em>THE EDGE.</em>
            </h1>
            <p>Dispatches, field observations, and fragments from the living archive.</p>
          </div>

          <div className="journal-index" data-testid="journal-index">
            <span>VOLUME 01</span>
            <strong>04</strong>
            <span>OPEN RECORDS</span>
          </div>
        </div>
      </section>

      <section className="journal-content page-section" data-testid="journal-content">
        <div className="journal-toolbar">
          <SectionLabel number="02">LATEST DISPATCHES</SectionLabel>

          <div className="journal-filters" role="tablist" aria-label="Journal categories">
            {JOURNAL_FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={filter === option}
                className={filter === option ? "journal-filter is-active" : "journal-filter"}
                onClick={() => setFilter(option)}
                data-testid={`journal-filter-${option.toLowerCase()}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="journal-grid" data-testid="journal-grid">
          {entries.map((entry, index) => (
            <button
              key={entry.id}
              type="button"
              className={index === 0 ? "journal-entry journal-entry-featured" : "journal-entry"}
              onClick={() => setOpenEntry(entry)}
              data-testid={`journal-entry-${entry.id}`}
            >
              <EditorialImage src={entry.image} alt={entry.title} />
              <div className="journal-entry-meta">
                <span>{entry.date}</span>
                <ArrowUpRight size={16} />
              </div>
              <span className="journal-category">{entry.category}</span>
              <h2>{entry.title}</h2>
              <p>{entry.excerpt}</p>
              <span className="journal-read">OPEN DISPATCH</span>
            </button>
          ))}
        </div>
      </section>

      <section className="journal-end page-section" data-testid="journal-end">
        <SectionLabel number="03">KEEP LOOKING</SectionLabel>
        <h2>
          The archive is
          <br />
          <em>always becoming.</em>
        </h2>
        <EditorialButton to="/field-notes" testId="journal-field-notes-button">
          CONTINUE TO FIELD NOTES
        </EditorialButton>
      </section>

      {openEntry && (
        <div className="journal-reader-backdrop" role="dialog" aria-modal="true" data-testid="journal-reader">
          <article className="journal-reader">
            <button
              type="button"
              className="reader-close"
              onClick={() => setOpenEntry(null)}
              aria-label="Close journal reader"
              data-testid="journal-reader-close"
            >
              <X size={20} />
            </button>

            <EditorialImage src={openEntry.image} alt={openEntry.title} />

            <div className="journal-reader-copy">
              <SectionLabel>{openEntry.date}</SectionLabel>
              <h2>{openEntry.title}</h2>
              {openEntry.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <span className="journal-reader-signoff">— THE ARCHIVE / FIELD EDITION</span>
            </div>
          </article>
        </div>
      )}
    </ArchiveLayout>
  );
}
