import Link from "next/link";
import {
  Users,
  GitBranch,
  Scale,
  HeartHandshake,
  ArrowUpRight,
  Dna,
} from "lucide-react";
import styles from "./services.module.css";

const services = [
  {
    title: "Paternity Testing",
    description:
      "Establish biological fatherhood through scientific DNA analysis.",
    icon: Users,
    href: "/services/paternity-testing",
    number: "01",
  },
  {
    title: "Relationship Testing",
    description: "Investigate biological relationships between family members.",
    icon: GitBranch,
    href: "/services/relationship-testing",
    number: "02",
  },
  {
    title: "Legal DNA Testing",
    description:
      "DNA testing with identity verification and documented procedures for legal purposes.",
    icon: Scale,
    href: "/services/legal-dna-testing",
    number: "03",
  },
  {
    title: "Immigration DNA Testing",
    description:
      "Relationship testing for eligible immigration and family-reunification cases.",
    icon: HeartHandshake,
    href: "/services/immigration-dna-testing",
    number: "04",
  },
];

export default function Services() {
  return (
    <section
      id="categories"
      className={styles.services_section}
      aria-labelledby="services_heading"
    >
      <div className={styles.services_container}>
        <div className={styles.services_header}>
          <div className={styles.services_intro}>
            <span className={styles.section_eyebrow}>
              <Dna size={16} aria-hidden="true" />
              OUR SERVICES
            </span>

            <h2 id="services_heading">
              DNA testing for the answers
              <span> that matter.</span>
            </h2>

            <p>
              Every question deserves careful attention. Explore our DNA testing
              services and find the right starting point for your needs.
            </p>
          </div>

          <Link href="/services" className={styles.view_all_link}>
            View all services
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.services_grid}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href={service.href}
                className={styles.service_card}
                key={service.number}
              >
                <div className={styles.card_top}>
                  <span className={styles.service_number}>
                    {service.number}
                  </span>

                  <span className={styles.service_icon}>
                    <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                </div>

                <div className={styles.card_content}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className={styles.card_footer}>
                  <span>Explore service</span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className={styles.card_arrow}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.services_note}>
          <span className={styles.note_indicator} />
          <p>
            Not sure which test you need? Contact our team for guidance on the
            available options.
          </p>

          <Link href="/contact" className={styles.note_link}>
            Talk to our team
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
