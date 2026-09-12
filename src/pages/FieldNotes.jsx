import React, { useState } from "react";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import {
  ArchiveLayout,
  EditorialButton,
  EditorialImage,
  SectionLabel,
} from "../components/archive.jsx";
import { FIELD_NOTES } from "../data/journal.js";

export default function FieldNotes() {
  const [activeId, setActiveId] = useState("f-001");
  const [marked, setMarked] = useState(false);

  const note = FIELD_NOTES.find((entry) => entry.id === activeId) ?? FIELD_NOTES[0];

  return (
    <ArchiveLayout>
      <section className="field-hero page-section" data-testid="field-notes-page">
        <div>
          <SectionLabel number="01">FIELD NOTES / OBSERVATIONS</SectionLabel>
          <h1 data-testid="field-notes-title">
            WHAT THE
            <br />
            <em>WITNESSES SAW.</em>
          </h1>
          <p>
            The archive is built from partial evidence: a track in wet earth, an unrepeatable
            colour, the quiet after something leaves.
          </p>
        </div>

        <div className="field-status" data-testid="field-status">
          <span>ARCHIVE STATUS</span>
          <strong>
            <i /> ACTIVE
          </strong>
          <small>LAST UPDATED / TODAY</small>
        </div>
      </section>

      <section className="field-notes-workspace page-section" data-testid="field-notes-workspace">
        <div className="field-note-list">
          <SectionLabel number="02">OBSERVATION LOG</SectionLabel>

          {FIELD_NOTES.map((entry) => (
            <button
              key={entry.id}
              type="button"
              className={note.id === entry.id ? "field-note-row is-active" : "field-note-row"}
              onClick={() => {
                setActiveId(entry.id);
                setMarked(false);
              }}
              data-testid={`field-note-${entry.id}`}
            >
              <span>{entry.number}</span>
              <div>
                <strong>{entry.title}</strong>
                <small>
                  {entry.place} / {entry.tag}
                </small>
              </div>
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>

        <div className="field-note-detail" data-testid="field-note-detail">
          <div className="field-note-image">
            <EditorialImage src={note.image} alt={note.title} />
            <span>
              {note.number} / {note.tag}
            </span>
          </div>

          <div className="field-note-copy">
            <SectionLabel>{note.place}</SectionLabel>
            <h2 data-testid="field-note-title">{note.title}</h2>
            <p data-testid="field-note-detail-copy">{note.detail}</p>

            <div className="note-observation">
              <span>CONFIDENCE</span>
              <div>
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <strong>01 / 05</strong>
            </div>

            <button
              type="button"
              className={marked ? "mark-note-button is-marked" : "mark-note-button"}
              onClick={() => setMarked((value) => !value)}
              data-testid="field-note-mark-button"
            >
              <Check size={15} /> {marked ? "CONSULTED IN THIS SESSION" : "MARK AS CONSULTED"}
            </button>
          </div>
        </div>
      </section>

      <section className="field-archive-callout page-section" data-testid="field-notes-callout">
        <Plus size={22} strokeWidth={1} />
        <p>
          Every observation makes the map a little less empty.
          <br />
          <em>Leave room for the next one.</em>
        </p>
        <EditorialButton to="/journal" testId="field-journal-button" variant="quiet">
          READ THE JOURNAL
        </EditorialButton>
      </section>
    </ArchiveLayout>
  );
}
