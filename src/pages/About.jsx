import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ArchiveLayout, EditorialButton, SectionLabel } from "../components/archive.jsx";

const CHAPTERS = {
  premise: {
    label: "THE PREMISE",
    title: "A museum for what cannot be proven.",
    copy: "The Unicorn Archive is an evolving record of mythology, memory, and the spaces between them. It does not try to resolve the creature. It keeps the question alive.",
  },
  method: {
    label: "THE METHOD",
    title: "We collect the contradiction.",
    copy: "A field note can sit beside a medieval bestiary. A child's drawing can share a case with a royal seal. The archive trusts proximity more than certainty.",
  },
  future: {
    label: "THE FUTURE",
    title: "The next record is yours.",
    copy: "Every visitor arrives carrying an interpretation. The archive grows by making space for those interpretations to meet, disagree, and become new stories.",
  },
};

export default function About() {
  const [chapterId, setChapterId] = useState("premise");
  const chapter = CHAPTERS[chapterId];

  return (
    <ArchiveLayout>
      <section className="about-hero page-section" data-testid="about-page">
        <div className="about-hero-top">
          <SectionLabel number="01">ABOUT THE ARCHIVE</SectionLabel>
          <span className="about-coordinates">43° 18′ N / THE UNMAPPED</span>
        </div>

        <h1 data-testid="about-title">
          SOME LEGENDS
          <br />
          <em>REFUSE TO END.</em>
        </h1>

        <div className="about-hero-bottom">
          <p>
            A living digital museum for the mythology, species, realms, magic, and stories
            surrounding unicorns.
          </p>
          <span>ENTERED / 2025</span>
        </div>
      </section>

      <section className="about-manifesto page-section" data-testid="about-manifesto">
        <div className="about-chapter-list">
          <SectionLabel number="02">THREE ARCHIVE PRINCIPLES</SectionLabel>

          {Object.keys(CHAPTERS).map((key, index) => (
            <button
              key={key}
              type="button"
              className={chapterId === key ? "about-chapter is-active" : "about-chapter"}
              onClick={() => setChapterId(key)}
              data-testid={`about-chapter-${key}`}
            >
              <span>0{index + 1}</span>
              {CHAPTERS[key].label}
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>

        <div className="about-chapter-copy" data-testid="about-chapter-copy">
          <SectionLabel>ACTIVE PRINCIPLE / {chapter.label}</SectionLabel>
          <h2>{chapter.title}</h2>
          <p>{chapter.copy}</p>
          <span className="about-chapter-index">
            0{Object.keys(CHAPTERS).indexOf(chapterId) + 1} / 03
          </span>
        </div>
      </section>

      <section className="about-statement page-section" data-testid="about-statement">
        <div className="about-seal" aria-hidden="true">
          ∧
        </div>

        <blockquote>
          “The point of a legend is not that it happened.
          <br />
          <em>The point is that it keeps happening.</em>”
        </blockquote>

        <span>— THE ARCHIVE HANDBOOK / PROLOGUE</span>
      </section>

      <section className="about-next page-section" data-testid="about-next">
        <SectionLabel number="03">BEGIN ANYWHERE</SectionLabel>
        <h2>
          THE DOOR
          <br />
          <em>IS OPEN.</em>
        </h2>
        <div className="about-next-actions">
          <EditorialButton to="/journal" testId="about-journal-button">
            READ THE JOURNAL
          </EditorialButton>
          <EditorialButton to="/" testId="about-archive-button" variant="quiet">
            RETURN TO ARCHIVE
          </EditorialButton>
        </div>
      </section>
    </ArchiveLayout>
  );
}
