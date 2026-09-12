import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  ArchiveLayout,
  EditorialButton,
  EditorialHeader,
  SectionLabel,
} from "../components/archive.jsx";
import { DISCIPLINES, MAGIC_ABILITIES, MagicEndIcon } from "../data/magic.js";
import { testId } from "../data/navigation.js";

export default function Magic() {
  const [abilityId, setAbilityId] = useState("reveal");

  const ability = MAGIC_ABILITIES.find((entry) => entry.id === abilityId) ?? MAGIC_ABILITIES[0];
  const ActiveIcon = ability.icon;

  return (
    <ArchiveLayout>
      <section
        className={`magic-hero magic-${ability.id}`}
        style={{ "--magic-accent": ability.color }}
        data-testid="magic-experience"
      >
        <div className="magic-intro">
          <EditorialHeader
            eyebrow="MAGIC INDEX / HORN MEMORY"
            title={
              <>
                THE HORN
                <br />
                <em>REMEMBERS.</em>
              </>
            }
            copy="Some magic changes the world. Other magic changes the way we are able to see it."
          />

          <div className="magic-ability-list" data-testid="magic-ability-list">
            {MAGIC_ABILITIES.map((entry) => {
              const Icon = entry.icon;
              return (
                <button
                  key={entry.id}
                  type="button"
                  className={entry.id === abilityId ? "magic-ability is-active" : "magic-ability"}
                  onClick={() => setAbilityId(entry.id)}
                  data-testid={`magic-ability-${entry.id}`}
                >
                  <span>
                    <Icon size={17} strokeWidth={1.2} />
                    {entry.label}
                  </span>
                  <ArrowUpRight size={15} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="horn-stage" data-testid="horn-stage">
          <div className="magic-aura" />
          <div className="horn-object">
            <div className="horn-tip" />
            <div className="horn-body">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="horn-floor" />
          <div className="horn-caption">
            <ActiveIcon size={18} />
            <span>ACTIVE SPELL / {ability.label}</span>
          </div>
        </div>

        <div className="magic-record" data-testid="magic-record">
          <SectionLabel number="04">{ability.label} / FIELD NOTE</SectionLabel>
          <h2 data-testid="magic-ability-title">{ability.title}</h2>
          <p data-testid="magic-ability-copy">{ability.copy}</p>
          <div className="wave-lines" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </section>

      <section className="magic-disciplines page-section" data-testid="magic-disciplines">
        <div className="section-heading-row">
          <div>
            <SectionLabel>THE FOUR DISCIPLINES</SectionLabel>
            <h2>
              NOT ALL
              <br />
              <em>LIGHT HEALS.</em>
            </h2>
          </div>
          <p>Each spell leaves a different trace. Choose one above to feel the archive respond.</p>
        </div>

        <div className="discipline-list">
          {DISCIPLINES.map(([number, title, copy]) => (
            <div key={title} className="discipline" data-testid={`discipline-${testId(title)}`}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="magic-end page-section" data-testid="magic-end">
        <MagicEndIcon size={24} strokeWidth={1} />
        <p>
          The archive records the spell.
          <br />
          <em>You decide what it means.</em>
        </p>
        <EditorialButton to="/legends" testId="magic-legends-button">
          READ THE LEGENDS
        </EditorialButton>
      </section>
    </ArchiveLayout>
  );
}
