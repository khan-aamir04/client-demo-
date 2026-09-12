import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { DESKTOP_NAV_LABELS, NAV_LINKS, testId } from "../data/navigation.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="archive-nav" data-testid="main-navbar">
        <Link to="/" className="archive-wordmark" data-testid="archive-wordmark">
          <span className="wordmark-mark" aria-hidden="true">
            ∧
          </span>
          <span>
            THE UNICORN
            <br />
            ARCHIVE
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_LINKS.filter((link) => DESKTOP_NAV_LABELS.includes(link.label)).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
              data-testid={`nav-link-${testId(link.label)}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/unicorn" className="nav-enter" data-testid="nav-enter-link">
          ENTER <ArrowUpRight size={14} strokeWidth={1.5} />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div
        className={open ? "mobile-menu is-open" : "mobile-menu"}
        aria-hidden={!open}
        data-testid="mobile-menu"
      >
        <div className="mobile-menu-top">
          <span>ARCHIVE INDEX / 001</span>
          <span>SELECT A RECORD</span>
        </div>

        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="mobile-menu-link"
              data-testid={`mobile-nav-link-${testId(link.label)}`}
            >
              <span className="menu-number">0{index + 1}</span>
              {link.label}
              <ArrowUpRight size={18} strokeWidth={1.2} />
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu-note">
          A record of creatures the world was never meant to forget.
        </div>
      </div>
    </>
  );
}
