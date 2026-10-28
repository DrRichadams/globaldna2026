import Link from "next/link";
import { MessageCircle, ShieldCheck, Microscope, Clock3 } from "lucide-react";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner_container}>
      <div className={styles.banner_glow} aria-hidden="true" />

      {/* One SVG grid, with light pulses following its lines */}
      <div className={styles.banner_grid} aria-hidden="true">
        <svg
          className={styles.grid_flow_svg}
          viewBox="0 0 600 400"
          preserveAspectRatio="none"
        >
          <g className={styles.grid_tracks}>
            {Array.from({ length: 9 }, (_, i) => (
              <path key={`h-${i}`} d={`M0 ${i * 50} H600`} />
            ))}

            {Array.from({ length: 13 }, (_, i) => (
              <path key={`v-${i}`} d={`M${i * 50} 0 V400`} />
            ))}
          </g>

          <path
            pathLength={1000}
            d="M0 150 H250 V250 H450 V100 H600"
            className={styles.grid_light_path}
          />

          <path
            pathLength={1000}
            d="M150 0 V200 H350 V350 H500 V400"
            className={styles.grid_light_path}
            style={{ animationDelay: "-3s", animationDuration: "10s" }}
          />

          <path
            pathLength={1000}
            d="M0 300 H100 V100 H400 V200 H600"
            className={styles.grid_light_path}
            style={{ animationDelay: "-6s", animationDuration: "12s" }}
          />
        </svg>
      </div>

      {/* Decorative connection points */}
      <div className={styles.network_nodes} aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} />
        ))}
      </div>

      {/* Hero content */}
      <div className={styles.banner_content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrow_dot} />
          GLOBAL DNA ZIMBABWE
        </div>

        <h1>
          For your <span>peace of mind,</span> we are here for you.
        </h1>

        <p className={styles.banner_description}>
          Providing accurate, confidential, and legally recognized DNA testing
          services across Zimbabwe, with fast turnaround times and compassionate
          support every step of the way.
        </p>

        <div className={styles.banner_actions}>
          <Link
            href="https://wa.me/YOURWHATSAPPNUMBER"
            className={styles.primary_button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} aria-hidden="true" />
            <span>Chat with us on WhatsApp</span>
          </Link>

          <Link href="#categories" className={styles.secondary_button}>
            Explore our services
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={styles.trust_points}>
          <div className={styles.trust_item}>
            <ShieldCheck size={19} aria-hidden="true" />
            <span>Confidential care</span>
          </div>

          <div className={styles.trust_item}>
            <Microscope size={19} aria-hidden="true" />
            <span>Precision testing</span>
          </div>

          <div className={styles.trust_item}>
            <Clock3 size={19} aria-hidden="true" />
            <span>Timely support</span>
          </div>
        </div>
      </div>

      {/* DNA double helix */}
      <div className={styles.science_visual} aria-hidden="true">
        <div className={styles.visual_orbit}>
          <div className={styles.visual_core}>
            <svg
              className={styles.dna_helix}
              viewBox="0 0 240 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="dnaStrandA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a5f3fc" />
                  <stop offset="50%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>

                <linearGradient id="dnaStrandB" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#a5f3fc" />
                </linearGradient>
              </defs>

              {/* Connecting base pairs */}
              <g className={styles.dna_rungs}>
                <path d="M82 35 H158" />
                <path d="M100 65 H140" />
                <path d="M140 95 H100" />
                <path d="M158 125 H82" />
                <path d="M140 155 H100" />
                <path d="M100 185 H140" />
                <path d="M82 215 H158" />
                <path d="M100 245 H140" />
                <path d="M140 275 H100" />
                <path d="M158 305 H82" />
                <path d="M140 335 H100" />
                <path d="M100 365 H140" />
              </g>

              {/* First strand */}
              <path
                className={styles.dna_strand_a}
                d="
                  M80 20
                  C80 50 160 50 160 80
                  C160 110 80 110 80 140
                  C80 170 160 170 160 200
                  C160 230 80 230 80 260
                  C80 290 160 290 160 320
                  C160 350 80 350 80 380
                "
              />

              {/* Second strand */}
              <path
                className={styles.dna_strand_b}
                d="
                  M160 20
                  C160 50 80 50 80 80
                  C80 110 160 110 160 140
                  C160 170 80 170 80 200
                  C80 230 160 230 160 260
                  C160 290 80 290 80 320
                  C80 350 160 350 160 380
                "
              />

              <g className={styles.dna_nodes}>
                <circle cx="120" cy="20" r="4" />
                <circle cx="120" cy="80" r="4" />
                <circle cx="120" cy="140" r="4" />
                <circle cx="120" cy="200" r="4" />
                <circle cx="120" cy="260" r="4" />
                <circle cx="120" cy="320" r="4" />
                <circle cx="120" cy="380" r="4" />
              </g>
            </svg>
          </div>
        </div>

        <div className={styles.visual_label}>
          <span className={styles.visual_label_dot} />
          SCIENCE. CLARITY. CONFIDENCE.
        </div>
      </div>

      <div className={styles.banner_bottom_line} aria-hidden="true" />
    </section>
  );
}
