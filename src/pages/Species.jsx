import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import {
  ArchiveLayout,
  EditorialButton,
  EditorialHeader,
  EditorialImage,
  SectionLabel,
} from "../components/archive.jsx";
import { SPECIES } from "../data/archive.js";

export default function Species() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeId, setActiveId] = useState(
    SPECIES.some((entry) => entry.id === searchParams.get("species"))
      ? searchParams.get("species")
      : "aurelia",
  );

  const active = SPECIES.find((entry) => entry.id === activeId) ?? SPECIES[0];

  useEffect(() => {
    setSearchParams({ species: activeId }, { replace: true });
  }, [activeId, setSearchParams]);

  const step = (delta) => {
    const index = SPECIES.findIndex((entry) => entry.id === activeId);
    setActiveId(SPECIES[(index + delta + SPECIES.length) % SPECIES.length].id);
  };

  return (
    <ArchiveLayout>
      <section className="page-section species-intro" data-testid="species-page-intro">
        <EditorialHeader
          eyebrow="SPECIES INDEX / 001—006"
          title={
            <>
              MEET THE
              <br />
              <em>UNICORNS.</em>
            </>
          }
          copy="Six imagined species from six different realms. Each one carries a different answer to the question: what does the impossible protect?"
          align="right"
        />
        <div className="species-line" aria-hidden="true" />
      </section>

      <section
        className="species-viewer"
        style={{ "--species-accent": active.accent }}
        data-testid="species-viewer"
      >
        <div className="species-selector" data-testid="species-selector">
          <SectionLabel>SELECT A RECORD</SectionLabel>
          {SPECIES.map((entry, index) => (
            <button
              key={entry.id}
              type="button"
              className={
                entry.id === activeId
                  ? "species-selector-button is-active"
                  : "species-selector-button"
              }
              onClick={() => setActiveId(entry.id)}
              data-testid={`species-selector-${entry.id}`}
            >
              <span>0{index + 1}</span>
              <strong>{entry.name}</strong>
              <small>{entry.element}</small>
            </button>
          ))}
        </div>

        <div className="species-portrait" data-testid="species-portrait">
          <div className="species-orbit orbit-one" />
          <div className="species-orbit orbit-two" />
          <EditorialImage src={active.image} alt={`${active.name}, ${active.element}`} />

          <div className="portrait-caption">
            <Sparkles size={15} />
            <span>FIELD RECORD / {active.name}</span>
          </div>

          <button
            type="button"
            className="species-arrow species-arrow-left"
            onClick={() => step(-1)}
            aria-label="Previous species"
            data-testid="species-previous-button"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            className="species-arrow species-arrow-right"
            onClick={() => step(1)}
            aria-label="Next species"
            data-testid="species-next-button"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="species-details" data-testid="species-details">
          <SectionLabel number={active.name === "AURELIA" ? "01" : ""}>
            {active.element}
          </SectionLabel>
          <h2 data-testid="species-name">{active.name}</h2>
          <p className="species-description" data-testid="species-description">
            {active.description}
          </p>

          <div className="species-specs">
            <div>
              <span>TRAITS</span>
              <strong>{active.traits}</strong>
            </div>
            <div>
              <span>HABITAT</span>
              <strong>{active.habitat}</strong>
            </div>
            <div>
              <span>MAGIC</span>
              <strong>{active.magic}</strong>
            </div>
          </div>

          <EditorialButton to="/realms" testId="species-realm-button" variant="quiet">
            TRACE THE REALM
          </EditorialButton>
        </div>
      </section>

      <section className="species-footer-note page-section" data-testid="species-footer-note">
        <SectionLabel number="03">THE INDEX IS NOT COMPLETE</SectionLabel>
        <p>
          There are other names beyond these six. The archive leaves room for the creature you have
          not met yet.
        </p>
      </section>
    </ArchiveLayout>
  );
}
