import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, testId } from "../data/navigation.js";

export default function Footer() {
  return (
    <footer className="archive-footer" data-testid="archive-footer">
      <div className="footer-quote" data-testid="footer-quote">
        Some legends disappear.
        <br />
        <em>Others wait to be discovered.</em>
      </div>

      <div className="footer-bottom">
        <Link to="/" className="archive-wordmark" data-testid="footer-wordmark">
          <span className="wordmark-mark" aria-hidden="true">
            ∧
          </span>
          <span>
            THE UNICORN
            <br />
            ARCHIVE
          </span>
        </Link>

        <div className="footer-links" data-testid="footer-links">
          {NAV_LINKS.filter((link) => link.label !== "THE UNICORN").map((link) => (
            <Link key={link.to} to={link.to} data-testid={`footer-link-${testId(link.label)}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <span className="footer-credit" data-testid="footer-copyright">
          © 2025 / A LIVING ARCHIVE
        </span>
      </div>
    </footer>
  );
}
