import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_IMAGE } from "../data/navigation.js";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) =>
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", onMove);
    }

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      className="hero"
      aria-label="The Unicorn Archive introduction"
      data-testid="hero-section"
      style={{ "--pointer-x": `${pointer.x * 6}px`, "--pointer-y": `${pointer.y * 6}px` }}
    >
      <div
        className={videoFailed ? "hero-media is-fallback" : "hero-media"}
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        data-testid="hero-media"
      >
        {!videoFailed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_IMAGE}
            onError={() => setVideoFailed(true)}
            aria-hidden="true"
            data-testid="hero-video"
          >
            <source src="/videos/hero-unicorn-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
            <source src="/videos/hero-unicorn.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-content" data-testid="hero-content">
        <div className="hero-kicker" data-testid="hero-kicker">
          <span>MYTH / ARCHIVE 001</span>
          <span>EST. IN THE SPACE BETWEEN STORIES</span>
        </div>

        <h1 data-testid="hero-title">
          <span>THE</span>
          <span>UNICORN</span>
          <span>ARCHIVE</span>
        </h1>

        <p data-testid="hero-subtitle">
          A record of creatures the world was never meant to forget.
        </p>

        <div className="hero-actions">
          <Link to="/unicorn" className="editorial-button" data-testid="hero-enter-button">
            ENTER THE ARCHIVE <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
          <a href="#discover" className="hero-scroll" data-testid="hero-scroll-button">
            <ArrowDown size={14} /> SCROLL TO DISCOVER
          </a>
        </div>
      </div>

      <div className="hero-index" data-testid="hero-index">
        01 <span>06</span>
      </div>
    </section>
  );
}
