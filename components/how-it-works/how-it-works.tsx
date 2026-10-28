import Link from "next/link";
import {
  ClipboardList,
  MapPin,
  Dna,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import styles from "./how-it-works.module.css";

const steps = [
  {
    number: "01",
    title: "Choose Your Test",
    description:
      "Explore our DNA testing services and identify the test that best matches your needs.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Arrange Sample Collection",
    description:
      "Contact our team for guidance on the sample collection process and available centre options.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Laboratory Analysis",
    description:
      "Your submitted sample proceeds through the applicable DNA testing and analysis process.",
    icon: Dna,
  },
  {
    number: "04",
    title: "Receive Your Results",
    description:
      "Results are communicated through the applicable process, with guidance available for questions.",
    icon: FileCheck2,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={styles.process_section}
      aria-labelledby="process_heading"
    >
      <div className={styles.process_container}>
        <header className={styles.process_header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrow_line} />A SIMPLE, GUIDED PROCESS
          </span>

          <h2 id="process_heading">
            How It <span>Works</span>
          </h2>

          <p>
            Getting started with DNA testing doesn't have to feel complicated.
            Here's an overview of the journey from your first enquiry to
            receiving your results.
          </p>
        </header>

        <div className={styles.steps_grid}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className={styles.step_card} key={step.number}>
                <div className={styles.step_top}>
                  <span className={styles.step_number}>{step.number}</span>

                  <div className={styles.step_icon}>
                    <Icon size={27} strokeWidth={1.6} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <div className={styles.step_bottom}>
                  <CheckCircle2 size={16} />
                  <span>YOUR NEXT STEP</span>
                </div>

                {index < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true">
                    <ArrowRight size={18} />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className={styles.process_cta}>
          <div>
            <span className={styles.cta_eyebrow}>READY TO GET STARTED?</span>

            <h3>Let's find the right DNA test for you.</h3>

            <p>
              Speak with our team about your requirements and the next steps for
              your chosen service.
            </p>
          </div>

          <Link href="/contact" className={styles.cta_button}>
            Make an enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
