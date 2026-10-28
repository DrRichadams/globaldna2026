import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  UserRoundCheck,
  FileCheck2,
  LockKeyhole,
  ArrowRight,
  Check,
} from "lucide-react";

import styles from "./dna-testing-options.module.css";

const peaceOfMindFeatures = [
  "Designed for personal knowledge and reassurance",
  "Suitable when results are for private informational use",
  "Guidance on the appropriate test for your situation",
  "A private route to exploring biological relationships",
];

const legalFeatures = [
  "Intended for legal or official proceedings",
  "Identity verification may be required",
  "Documented sample collection procedures",
  "Chain of custody to help protect sample integrity",
];

export default function DnaTestingOptions() {
  return (
    <section
      id="dna-testing-options"
      className={styles.options_section}
      aria-labelledby="options_heading"
    >
      <div className={styles.options_container}>
        <header className={styles.section_header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrow_line} />
            CHOOSE THE RIGHT TEST
          </span>

          <h2 id="options_heading">
            Peace of Mind <span>vs</span> Legal DNA Testing
          </h2>

          <p>
            Different situations call for different types of DNA testing.
            Understand the key differences before deciding which option is right
            for you.
          </p>
        </header>

        <div className={styles.comparison_grid}>
          {/* Peace of Mind Testing */}
          <article className={`${styles.option_card} ${styles.personal_card}`}>
            <div className={styles.card_header}>
              <div className={styles.card_icon}>
                <ShieldCheck size={29} strokeWidth={1.6} />
              </div>

              <span className={styles.card_tag}>PERSONAL USE</span>
            </div>

            <h3>Peace of Mind DNA Testing</h3>

            <p className={styles.card_description}>
              Seeking answers for yourself? This option is intended for personal
              knowledge when the results are not being obtained for formal legal
              proceedings.
            </p>

            <div className={styles.feature_divider} />

            <h4>What to expect</h4>

            <ul className={styles.feature_list}>
              {peaceOfMindFeatures.map((feature) => (
                <li key={feature}>
                  <span className={styles.check_icon}>
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className={styles.best_for}>
              <LockKeyhole size={18} />
              <p>
                <strong>Best for:</strong> Individuals seeking private, personal
                answers.
              </p>
            </div>

            <Link
              href="/services/paternity-testing"
              className={styles.personal_button}
            >
              Explore DNA testing
              <ArrowRight size={18} />
            </Link>
          </article>

          {/* Legal DNA Testing */}
          <article className={`${styles.option_card} ${styles.legal_card}`}>
            <div className={styles.card_header}>
              <div className={styles.card_icon}>
                <Scale size={29} strokeWidth={1.6} />
              </div>

              <span className={styles.legal_tag}>OFFICIAL USE</span>
            </div>

            <h3>Legal DNA Testing</h3>

            <p className={styles.card_description}>
              Need DNA evidence for a legal or official matter? Legal testing
              follows additional identity and sample-handling requirements that
              may be necessary for results to be considered by the relevant
              authority.
            </p>

            <div className={styles.feature_divider} />

            <h4>What to expect</h4>

            <ul className={styles.feature_list}>
              {legalFeatures.map((feature) => (
                <li key={feature}>
                  <span className={styles.check_icon}>
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className={styles.best_for}>
              <FileCheck2 size={18} />
              <p>
                <strong>Best for:</strong> Cases where results may be required
                for official or legal purposes.
              </p>
            </div>

            <Link href="/contact" className={styles.legal_button}>
              Enquire about legal testing
              <ArrowRight size={18} />
            </Link>
          </article>
        </div>

        <div className={styles.important_note}>
          <div className={styles.note_icon}>
            <UserRoundCheck size={21} />
          </div>

          <p>
            <strong>Important distinction:</strong> A peace of mind DNA test may
            not be accepted for legal purposes. If you need results for court,
            immigration, or another official process, contact us first to
            confirm the applicable requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
