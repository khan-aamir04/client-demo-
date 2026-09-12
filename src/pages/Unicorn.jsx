import React, { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  ArchiveLayout,
  EditorialButton,
  EditorialHeader,
  EditorialImage,
  SectionLabel,
} from "../components/archive.jsx";
import { TIMELINE } from "../data/archive.js";

export default function Unicorn() {
  const [eraId, setEraId] = useState(TIMELINE[0].id);
  const [compare, setCompare] = useState("myth");

  const era = TIMELINE.find((entry) => entry.id === eraId) ?? TIMELINE[0];

  return (
    <ArchiveLayout>
      <section className="subpage-hero unicorn-hero" data-testid="unicorn-page-hero">
        <div className="subpage-hero-image" style={{ backgroundImage: `url(${era.image})` }} />
        <div className="subpage-hero-shade" />

        <div className="subpage-hero-content">
          <SectionLabel number="01">THE CREATURE / THE IDEA</SectionLabel>
          <EditorialHeader
            eyebrow="THE UNICORN"
            title={
              <>
                ONE HORN.
                <br />
                <em>COUNTLESS LEGENDS.</em>
              </>
            }
            copy="A unicorn is traditionally imagined as a horse-like creature carrying a single horn upon its forehead. But the creature has never belonged to one story alone."
          />
        </div>

        <span className="subpage-index">02 / 06</span>
      </section>

      <section className="page-section origin-section" data-testid="unicorn-origin-section">
        <div className="origin-aside">
          <SectionLabel number="02">A SHAPE THAT CHANGES</SectionLabel>
          <p>
            The archive does not seek one true unicorn. It follows the trail of transformations.
          </p>
        </div>

        <div className="origin-copy">
          <p className="large-copy">
            Different cultures transformed the unicorn into symbols of{" "}
            <em>purity, strength, mystery, healing, protection,</em> and imagination.
          </p>
          <EditorialButton to="/species" testId="unicorn-species-button">
            MEET THE SPECIES
          </EditorialButton>
        </div>
      </section>

      <section className="timeline-section page-section" data-testid="timeline-section">
        <div className="section-heading-row">
          <div>
            <SectionLabel number="03">A LIVING TIMELINE</SectionLabel>
            <h2>
              THE RECORD
              <br />
              <em>KEEPS MOVING.</em>
            </h2>
          </div>
          <p>Select an era. Watch the story change its shape.</p>
        </div>

        <div className="timeline-layout">
          <div className="timeline-controls">
            {TIMELINE.map((entry, index) => (
              <button
                key={entry.id}
                type="button"
                className={entry.id === eraId ? "timeline-button is-active" : "timeline-button"}
                onClick={() => setEraId(entry.id)}
                data-testid={`timeline-era-button-${entry.id}`}
              >
                <span>0{index + 1}</span>
                {entry.label}
                <ChevronDown size={14} />
              </button>
            ))}
          </div>

          <div className="timeline-record" data-testid="timeline-record">
            <EditorialImage src={era.image} alt={`${era.label} archive atmosphere`} />
            <div className="timeline-record-copy">
              <span className="record-period" data-testid="timeline-period">
                {era.period}
              </span>
              <h3 data-testid="timeline-era-title">{era.title}</h3>
              <p data-testid="timeline-era-copy">{era.copy}</p>
              <span className="record-arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="myth-record page-section" data-testid="myth-history-section">
        <div className="section-heading-row">
          <div>
            <SectionLabel number="04">THE DOUBLE RECORD</SectionLabel>
            <h2>
              MYTH
              <br />
              <em>VS. HISTORY</em>
            </h2>
          </div>

          <button
            type="button"
            className="compare-toggle"
            onClick={() => setCompare(compare === "myth" ? "record" : "myth")}
            data-testid="myth-history-toggle"
          >
            <span className={compare === "myth" ? "is-active" : ""}>THE MYTH</span>
            <span className={compare === "record" ? "is-active" : ""}>THE RECORD</span>
          </button>
        </div>

        <div className="compare-grid">
          <div className={compare === "myth" ? "compare-panel is-focused" : "compare-panel"}>
            <span>01 / THE MYTH</span>
            <h3>Only the pure of heart could approach.</h3>
            <p>
              In the stories, the unicorn is not conquered. It chooses the witness — a figure who
              arrives without wanting to own what they find.
            </p>
          </div>

          <div className={compare === "record" ? "compare-panel is-focused" : "compare-panel"}>
            <span>02 / THE RECORD</span>
            <h3>A traveller&#39;s account, copied and changed.</h3>
            <p>
              Early natural histories described a swift, solitary animal. The horn grew symbolic as
              the account travelled further from its source.
            </p>
          </div>
        </div>
      </section>

      <section className="page-end-cta" data-testid="unicorn-end-cta">
        <SectionLabel number="05">THE NEXT RECORD</SectionLabel>
        <h2>
          MEET THE
          <br />
          <em>INHABITANTS.</em>
        </h2>
        <EditorialButton to="/species" testId="unicorn-end-button">
          OPEN SPECIES INDEX
        </EditorialButton>
      </section>
    </ArchiveLayout>
  );
}
