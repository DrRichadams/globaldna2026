import Link from "next/link";
import {
  Microscope,
  ShieldCheck,
  FileCheck2,
  Headset,
  MapPinned,
  HeartHandshake,
  ArrowUpRight,
  Dna,
} from "lucide-react";

import styles from "./why-choose-us.module.css";

const reasons = [
  {
    number: "01",
    title: "Scientific Approach",
    description:
      "Our DNA testing services are built around scientific analysis and structured testing procedures.",
    icon: Microscope,
  },
  {
    number: "02",
    title: "Privacy and Confidentiality",
    description:
      "We understand that DNA testing involves sensitive personal information and deserves careful handling.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Clear, Dependable Processes",
    description:
      "We aim to make the testing journey easier to understand, from initial enquiries to receiving results.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Guidance and Support",
    description:
      "Our team helps clients understand the testing process and identify the service that suits their needs.",
    icon: Headset,
  },
  {
    number: "05",
    title: "Accessible Testing Centres",
    description:
      "Our centre network helps clients connect with Global DNA and enquire about available testing services.",
    icon: MapPinned,
  },
  {
    number: "06",
    title: "Answers That Matter",
    description:
      "From family relationships to other DNA testing needs, we recognise the importance behind every enquiry.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-global-dna"
      className={styles.why_section}
      aria-labelledby="why_heading"
    >
      <div className={styles.background_glow} aria-hidden="true" />

      <div className={styles.why_container}>
        <div className={styles.section_header}>
          <div className={styles.header_copy}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrow_line} />
              THE GLOBAL DNA DIFFERENCE
            </span>

            <h2 id="why_heading">
              Why Choose <span>Global DNA?</span>
            </h2>

            <p className={styles.section_description}>
              Choosing a DNA testing provider is a personal decision. We aim to
              make your experience clearer, more accessible, and centred around
              the answers you need.
            </p>
          </div>

          <div className={styles.header_visual} aria-hidden="true">
            <div className={styles.visual_ring}>
              <div className={styles.visual_inner}>
                <Dna size={58} strokeWidth={1.2} />
              </div>
            </div>
            <span className={styles.visual_dot} />
            <span className={styles.visual_orbit_dot} />
          </div>
        </div>

        <div className={styles.reasons_grid}>
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article key={reason.number} className={styles.reason_card}>
                <div className={styles.card_top}>
                  <div className={styles.icon_box}>
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className={styles.reason_number}>{reason.number}</span>
                </div>

                <div className={styles.card_content}>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>

                <div className={styles.card_accent} aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <div className={styles.bottom_cta}>
          <div className={styles.cta_copy}>
            <span className={styles.cta_label}>YOUR QUESTIONS MATTER</span>
            <h3>Let's help you find the right next step.</h3>
            <p>
              Talk to our team about your DNA testing needs and the services
              available to you.
            </p>
          </div>

          <Link href="/contact" className={styles.cta_button}>
            Speak to our team
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
