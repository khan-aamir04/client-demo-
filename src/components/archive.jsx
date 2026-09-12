import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { FALLBACK_IMAGE } from "../data/navigation.js";

export function ArchiveLayout({ children }) {
  return (
    <div className="archive-app">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export function SectionLabel({ children, number }) {
  return (
    <div className="section-label" data-testid="section-label">
      <span className="label-rule" />
      {number && <span>{number}</span>}
      <span>{children}</span>
    </div>
  );
}

export function EditorialButton({
  to,
  children,
  onClick,
  type = "button",
  testId,
  variant = "primary",
}) {
  const className =
    variant === "primary" ? "editorial-button" : "editorial-button editorial-button-quiet";

  if (to) {
    return (
      <Link to={to} className={className} data-testid={testId}>
        {children}
        <ArrowUpRight size={16} strokeWidth={1.5} />
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} data-testid={testId}>
      {children}
      <ArrowUpRight size={16} strokeWidth={1.5} />
    </button>
  );
}

export function EditorialHeader({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`editorial-header align-${align}`} data-testid="editorial-header">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1 data-testid="page-title">{title}</h1>
      {copy && <p data-testid="page-intro-copy">{copy}</p>}
    </div>
  );
}

export function EditorialImage({ src, alt, className = "" }) {
  return (
    <div className={`image-frame ${className}`} data-testid="editorial-image">
      <img
        src={src}
        alt={alt}
        onError={(event) => {
          event.currentTarget.src = FALLBACK_IMAGE;
        }}
      />
    </div>
  );
}
