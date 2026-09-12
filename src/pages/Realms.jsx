import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Compass } from "lucide-react";
import {
  ArchiveLayout,
  EditorialButton,
  EditorialHeader,
  EditorialImage,
  SectionLabel,
} from "../components/archive.jsx";
import { REALMS, SPECIES } from "../data/archive.js";

export default function Realms() {
  const [activeId, setActiveId] = useState(REALMS[2].id);

  const realm = REALMS.find((entry) => entry.id === activeId) ?? REALMS[0];
  const inhabitant = SPECIES.find((entry) => entry.id === realm.species) ?? SPECIES[0];

  return (
    <ArchiveLayout>
      <section className="page-section realms-intro" data-testid="realms-page-intro">
        <EditorialHeader
          eyebrow="CARTOGRAPHY / 001—005"
          title={
            <>
              WHERE
              <br />
              <em>MAGIC LIVES.</em>
            </>
          }
          copy="The world of the archive is not a place on a map. It is the shape a story takes when it has somewhere to return to."
        />

        <div className="compass-mark" aria-hidden="true">
          <Compass size={90} strokeWidth={0.6} />
          <span>NORTH / UNKNOWN</span>
        </div>
      </section>

      <section className="realm-explorer page-section" data-testid="realm-explorer">
        <div className="realm-map" data-testid="realm-map">
          <div className="map-lines" aria-hidden="true" />
          <div className="map-title" data-testid="map-title">
            THE UNMAPPED WORLD <span>FIELD CHART / 05</span>
          </div>

          {REALMS.map((entry) => (
            <button
              key={entry.id}
              type="button"
              className={entry.id === activeId ? "realm-marker is-active" : "realm-marker"}
              style={entry.coordinates}
              onClick={() => setActiveId(entry.id)}
              data-testid={`realm-marker-${entry.id}`}
              aria-label={`Select ${entry.name}`}
            >
              <span>{entry.number}</span>
              <i />
            </button>
          ))}
        </div>

        <div className="realm-list" data-testid="realm-list">
          <SectionLabel>SELECT A LOCATION</SectionLabel>
          {REALMS.map((entry) => (
            <button
              key={entry.id}
              type="button"
              className={entry.id === activeId ? "realm-list-item is-active" : "realm-list-item"}
              onClick={() => setActiveId(entry.id)}
              data-testid={`realm-list-${entry.id}`}
            >
              <span>{entry.number}</span>
              <strong>{entry.name}</strong>
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>

        <div className="realm-panel" data-testid="realm-panel">
          <div className="realm-panel-image">
            <EditorialImage src={realm.image} alt={`${realm.name} atmospheric view`} />
            <span className="realm-panel-number">{realm.number}</span>
          </div>

          <div className="realm-panel-copy">
            <SectionLabel>ACTIVE LOCATION</SectionLabel>
            <h2 data-testid="realm-name">{realm.name}</h2>
            <p data-testid="realm-description">{realm.description}</p>

            <div className="realm-inhabitant">
              <span>KNOWN INHABITANT</span>
              <Link to={`/species?species=${inhabitant.id}`} data-testid="realm-inhabitant-link">
                {inhabitant.name} / {inhabitant.element}
              </Link>
            </div>

            <EditorialButton to={`/species?species=${inhabitant.id}`} testId="realm-discover-button">
              DISCOVER REALM
            </EditorialButton>
          </div>
        </div>
      </section>

      <section className="realms-note page-section" data-testid="realms-note">
        <SectionLabel number="03">A LIVING MAP</SectionLabel>
        <p>Touch a marker. Every place remembers the creature that made it home.</p>
      </section>
    </ArchiveLayout>
  );
}
