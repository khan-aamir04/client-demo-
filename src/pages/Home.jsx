import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero.jsx";
import {
  ArchiveLayout,
  EditorialButton,
  EditorialImage,
  SectionLabel,
} from "../components/archive.jsx";
import { ARCHIVE_STATS, DISCOVERIES } from "../data/home.js";
import useInViewFlag from "../hooks/useInViewFlag.js";
import { testId } from "../data/navigation.js";

export default function Home() {
  const statsVisible = useInViewFlag("[data-stats]");

  return (
    <ArchiveLayout>
      <Hero />

      <section id="discover" className="home-intro page-section" data-testid="home-intro-section">
        <div className="intro-mark" aria-hidden="true">
          ✦
        </div>

        <SectionLabel number="02">THE FIRST RECORD</SectionLabel>

        <div className="intro-grid">
          <h2 data-testid="home-intro-title">
            ONE HORN.
            <br />
            <em>COUNTLESS</em>
            <br />
            LEGENDS.
          </h2>

          <div className="intro-copy">
            <p data-testid="home-intro-copy">
              Unicorns have appeared in stories, manuscripts, artworks, and folklore across
              centuries. Their image has changed with every culture that remembered them.
            </p>
            <Link to="/unicorn" className="text-link" data-testid="home-intro-link">
              READ THE ORIGIN <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <EditorialImage
          src="https://images.unsplash.com/photo-1727311062274-00baba03167e?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="White horse standing in coastal mist"
          className="intro-image"
        />

        <span className="image-caption" data-testid="intro-image-caption">
          FIG. 02 / A CREATURE BETWEEN REALITY &amp; REMEMBRANCE
        </span>
      </section>

      <section className="stats-band" data-stats data-testid="archive-statistics">
        <div className="stats-intro">
          <SectionLabel number="03">THE SCALE OF A RUMOUR</SectionLabel>
          <p>
            Every culture gave the unicorn a different name. Every name kept a little of the wonder
            alive.
          </p>
        </div>

        <div className="stats-list">
          {ARCHIVE_STATS.map(([value, label]) => (
            <div
              key={label}
              className={statsVisible ? "stat is-visible" : "stat"}
              data-testid={`stat-${testId(label)}`}
            >
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="discoveries page-section" data-testid="featured-discoveries">
        <div className="section-heading-row">
          <div>
            <SectionLabel number="04">OPEN RECORDS</SectionLabel>
            <h2 data-testid="discoveries-title">
              THREE WAYS
              <br />
              <em>TO BELIEVE.</em>
            </h2>
          </div>
          <p>There is no single entrance to the archive. Begin wherever the story catches you.</p>
        </div>

        <div className="discovery-list">
          {DISCOVERIES.map((item, index) => (
            <Link
              key={item.label}
              to={item.to}
              className={`discovery-item discovery-item-${index + 1}`}
              data-testid={`discovery-${item.label.toLowerCase()}`}
            >
              <EditorialImage src={item.image} alt={item.title} />
              <div className="discovery-meta">
                <span>
                  {item.number} / {item.label}
                </span>
                <ArrowUpRight size={18} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-end" data-testid="home-final-cta">
        <div className="home-end-bg" aria-hidden="true" />
        <div className="home-end-content">
          <SectionLabel number="05">THE ARCHIVE IS OPEN</SectionLabel>
          <h2 data-testid="home-final-title">
            THE STORY
            <br />
            <em>CONTINUES.</em>
          </h2>
          <EditorialButton to="/species" testId="home-explore-button">
            EXPLORE THE UNICORNS
          </EditorialButton>
        </div>
      </section>
    </ArchiveLayout>
  );
}
