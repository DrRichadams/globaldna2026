import Link from "next/link";
import {
  FaDna,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiShield,
} from "react-icons/fi";
import styles from "./footer.module.css";

const companyLinks = [
  { label: "About Global DNA", href: "/about" },
  { label: "Our Testing Services", href: "#dna-testing-services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Our Centres", href: "#centres" },
];

const serviceLinks = [
  { label: "Paternity Testing", href: "/services/paternity-testing" },
  { label: "Relationship Testing", href: "/services/relationship-testing" },
  { label: "Legal DNA Testing", href: "/services/legal-dna-testing" },
  {
    label: "Immigration DNA Testing",
    href: "/services/immigration-dna-testing",
  },
];

const supportLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Frequently Asked Questions", href: "#faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Find a Testing Centre", href: "#centres" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "", // Add your Facebook page URL
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "", // Add your Instagram profile URL
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "", // Add your YouTube channel URL
    icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "", // Add your LinkedIn page URL
    icon: FaLinkedinIn,
  },
];

const contact = {
  phone: "", // Add your official phone number
  email: "", // Add your official email address
  whatsapp: "", // Add your WhatsApp number in international format
  address: "", // Add your official address
  hours: "", // Add verified business hours
};

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternalSection = href.startsWith("#");

  return (
    <Link href={href} className={styles.footerLink} scroll={isExternalSection}>
      <FiChevronRight className={styles.linkChevron} aria-hidden="true" />
      <span>{children}</span>
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top call-to-action */}
      <div className={styles.footerCta}>
        <div className={styles.ctaGlow} aria-hidden="true" />

        <div className={styles.ctaContent}>
          <div className={styles.ctaEyebrow}>
            <span className={styles.statusDot} />
            CLARITY STARTS WITH ANSWERS
          </div>

          <h2 className={styles.ctaTitle}>
            Your questions deserve
            <span> clear answers.</span>
          </h2>

          <p className={styles.ctaDescription}>
            Whether you need peace of mind or testing for official purposes,
            Global DNA can help you understand your options and take the next
            step with confidence.
          </p>

          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Get in Touch
              <FiArrowRight aria-hidden="true" />
            </Link>

            <Link
              href="#dna-testing-services"
              className={styles.secondaryButton}
            >
              Explore Our Services
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Animated DNA illustration */}
        <div className={styles.dnaVisual} aria-hidden="true">
          <div className={styles.dnaOrbit}>
            <span />
          </div>

          <div className={`${styles.dnaOrbit} ${styles.dnaOrbitTwo}`}>
            <span />
          </div>

          <div className={styles.dnaCircle}>
            <div className={styles.dnaIcon}>
              <FaDna />
            </div>
          </div>

          <div className={`${styles.dnaBadge} ${styles.dnaBadgeTop}`}>
            <FiShield />
          </div>

          <div className={`${styles.dnaBadge} ${styles.dnaBadgeBottom}`}>
            <span className={styles.badgeDot} />
            Precision & Care
          </div>

          <span className={`${styles.dnaSpark} ${styles.sparkOne}`} />
          <span className={`${styles.dnaSpark} ${styles.sparkTwo}`} />
          <span className={`${styles.dnaSpark} ${styles.sparkThree}`} />
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.footerMain}>
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="Global DNA home"
            >
              <span className={styles.brandIcon}>
                <FaDna />
              </span>

              <span className={styles.brandText}>
                <span className={styles.brandName}>
                  GLOBAL<span>DNA</span>
                </span>
                <span className={styles.brandTagline}>
                  KNOW THE TRUTH. FIND CLARITY.
                </span>
              </span>
            </Link>

            <p className={styles.brandDescription}>
              Global DNA provides access to DNA testing services designed to
              help individuals and families find answers, understand biological
              relationships, and navigate testing requirements.
            </p>

            <div className={styles.trustNote}>
              <FiShield aria-hidden="true" />
              <span>
                Your privacy and the responsible handling of your information
                matter.
              </span>
            </div>

            {socialLinks.some((social) => social.href.trim() !== "") && (
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Connect with us</h3>

                <div className={styles.socialLinks}>
                  {socialLinks
                    .filter((social) => social.href.trim() !== "")
                    .map((social) => {
                      const SocialIcon = social.icon;

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={`Visit Global DNA on ${social.label}`}
                        >
                          <SocialIcon aria-hidden="true" />
                        </a>
                      );
                    })}
                </div>
              </div>
            )}
          </div>

          {/* Company */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Company</h3>

            <nav aria-label="Company links" className={styles.linkList}>
              {companyLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>DNA Testing</h3>

            <nav aria-label="DNA testing services" className={styles.linkList}>
              {serviceLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Help & Support</h3>

            <nav aria-label="Help and support" className={styles.linkList}>
              {supportLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Get in Touch</h3>

            <p className={styles.contactIntro}>
              Need help choosing a test? Reach out to our team.
            </p>

            <div className={styles.contactList}>
              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>
                    <FiPhone />
                  </span>
                  <span className={styles.contactText}>
                    <span className={styles.contactLabel}>Call us</span>
                    <span className={styles.contactValue}>{contact.phone}</span>
                  </span>
                </a>
              )}

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>
                    <FiMail />
                  </span>
                  <span className={styles.contactText}>
                    <span className={styles.contactLabel}>Email us</span>
                    <span className={styles.contactValue}>{contact.email}</span>
                  </span>
                </a>
              )}

              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>
                    <FaWhatsapp />
                  </span>
                  <span className={styles.contactText}>
                    <span className={styles.contactLabel}>WhatsApp</span>
                    <span className={styles.contactValue}>
                      Chat with our team
                    </span>
                  </span>
                </a>
              )}

              {contact.address && (
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <FiMapPin />
                  </span>
                  <span className={styles.contactText}>
                    <span className={styles.contactLabel}>Visit us</span>
                    <span className={styles.contactValue}>
                      {contact.address}
                    </span>
                  </span>
                </div>
              )}

              {contact.hours && (
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <FiClock />
                  </span>
                  <span className={styles.contactText}>
                    <span className={styles.contactLabel}>Business hours</span>
                    <span className={styles.contactValue}>{contact.hours}</span>
                  </span>
                </div>
              )}

              {!contact.phone &&
                !contact.email &&
                !contact.whatsapp &&
                !contact.address &&
                !contact.hours && (
                  <Link href="/contact" className={styles.contactFallback}>
                    <span className={styles.contactIcon}>
                      <FiMessageCircle />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>
                        Contact our team
                      </span>
                      <span className={styles.contactValue}>
                        We&apos;re here to help
                      </span>
                    </span>
                    <FiArrowUpRight className={styles.fallbackArrow} />
                  </Link>
                )}
            </div>

            <Link href="/contact" className={styles.contactCta}>
              Contact Global DNA
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <span className={styles.disclaimerIcon}>
            <FiShield aria-hidden="true" />
          </span>

          <p>
            <strong>Important information:</strong> DNA testing requirements,
            sample collection procedures, turnaround times, and the suitability
            of results for legal or official purposes can vary by test and
            situation. Confirm the applicable requirements with Global DNA
            before proceeding. Personal-use testing may not be accepted for
            legal or official purposes.
          </p>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Global DNA. All rights reserved.
          </p>

          <nav aria-label="Legal links" className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="#top" className={styles.backToTop}>
            Back to top
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
