"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import logo from "../../public/logo3.png";
import styles from "./navigation.module.css";

const navLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={styles.nav_container} aria-label="Main navigation">
      <Link
        href="/"
        className={styles.logo}
        aria-label="Global DNA homepage"
        onClick={closeMenu}
      >
        <Image src={logo} alt="Global DNA" width={135} height={70} priority />
      </Link>

      <ul
        id="main-navigation-links"
        className={`${styles.nav_links_container} ${
          menuOpen ? styles.nav_links_open : ""
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.nav_actions}>
        <Link
          href="https://wa.me/YOURWHATSAPPNUMBER"
          className={styles.whatsapp_button}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Global DNA on WhatsApp"
        >
          <MessageCircle
            size={20}
            aria-hidden="true"
            className={styles.whatsapp_icon}
          />
          <span>WhatsApp Us</span>
        </Link>

        <button
          type="button"
          className={`${styles.menu_toggle} ${
            menuOpen ? styles.menu_toggle_open : ""
          }`}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
