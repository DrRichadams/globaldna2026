"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaDna,
  FaArrowsLeftRight,
  FaUserCheck,
  FaPassport,
  FaScaleBalanced,
  FaFlask,
  FaShieldHalved,
  FaLocationDot,
  FaRegClock,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";
import { FiChevronDown, FiMessageCircle, FiHelpCircle } from "react-icons/fi";

import WhatsAppLink from "@/components/btns/WhatsAppLink";
import styles from "./pricing.module.css";

const services = [
  {
    title: "Paternity DNA Testing",
    description:
      "Establish biological paternity through DNA testing, with guidance on the appropriate testing option for your circumstances.",
    icon: FaDna,
    message:
      "Hello Global DNA, I would like to request a quote for Paternity DNA Testing. Please share the requirements, available options, sample collection process, and USD pricing.",
  },
  {
    title: "Relationship DNA Testing",
    description:
      "Explore biological relationships such as sibling, grandparent, and other family relationship testing, subject to availability.",
    icon: FaArrowsLeftRight,
    message:
      "Hello Global DNA, I would like to request a quote for Relationship DNA Testing. Please advise on the available relationship tests, participant requirements, sample collection, and USD pricing.",
  },
  {
    title: "Legal DNA Testing",
    description:
      "Enquire about DNA testing intended for legal proceedings or official use, including applicable identification and sample collection procedures.",
    icon: FaScaleBalanced,
    message:
      "Hello Global DNA, I would like to request a quote for Legal DNA Testing. Please explain the requirements, identification and sample collection process, and USD pricing.",
  },
  {
    title: "Immigration DNA Testing",
    description:
      "Get guidance on DNA testing enquiries connected to immigration or family relationship verification requirements.",
    icon: FaPassport,
    message:
      "Hello Global DNA, I would like to request a quote for Immigration DNA Testing. Please advise on the requirements, applicable procedures, sample collection arrangements, and USD pricing.",
  },
  {
    title: "Maternity DNA Testing",
    description:
      "Enquire about DNA testing used to establish a biological relationship between a mother and child.",
    icon: FaUserCheck,
    message:
      "Hello Global DNA, I would like to request a quote for Maternity DNA Testing. Please share the requirements, available options, sample collection process, and USD pricing.",
  },
  {
    title: "Other DNA Testing",
    description:
      "Need a different DNA test? Tell our team what you need so they can help you explore the appropriate available service.",
    icon: FaFlask,
    message:
      "Hello Global DNA, I would like to enquire about another DNA testing service. Please help me identify the appropriate test and provide the requirements and USD pricing.",
  },
];

const pricingFactors = [
  {
    title: "Type of test",
    description:
      "The service you require and the purpose for which the test will be used.",
    icon: FaDna,
  },
  {
    title: "Number of participants",
    description: "The people who need to participate in the testing process.",
    icon: FaArrowsLeftRight,
  },
  {
    title: "Sample collection",
    description:
      "The collection arrangements and location relevant to your enquiry.",
    icon: FaLocationDot,
  },
  {
    title: "Additional requirements",
    description:
      "Any documentation, special arrangements, or other requirements applicable to your case.",
    icon: FaShieldHalved,
  },
];

const quoteSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Choose a DNA testing service and contact our team through WhatsApp.",
  },
  {
    number: "02",
    title: "Confirm the requirements",
    description:
      "Our team can help clarify the relevant testing options, participants, and arrangements.",
  },
  {
    number: "03",
    title: "Receive your quote",
    description:
      "Discuss the applicable price in USD and the next steps before proceeding.",
  },
];

const faqs = [
  {
    question: "How much does DNA testing cost at Global DNA?",
    answer:
      "Pricing depends on the type of test and the requirements of your case. Contact our team through WhatsApp for a personalised quote in USD.",
  },
  {
    question: "Why are prices not listed on this page?",
    answer:
      "Different tests may have different participant, collection, documentation, and procedural requirements. We request that you contact our team so the applicable service and price can be clarified before you proceed.",
  },
  {
    question:
      "What is the difference between legal and peace-of-mind DNA testing?",
    answer:
      "Peace-of-mind testing is generally intended for personal information, while legal testing may require identity verification, controlled sample collection, and documented procedures. If you need results for court or official use, explain this when requesting your quote so the appropriate requirements can be confirmed.",
  },
  {
    question: "Can I receive a quote before visiting a centre?",
    answer:
      "Yes. You can begin your enquiry through WhatsApp and discuss the service, requirements, and applicable pricing before making arrangements to visit a centre.",
  },
  {
    question: "Does the quote include sample collection?",
    answer:
      "The applicable collection arrangements and any associated charges should be confirmed with our team when your quote is prepared.",
  },
  {
    question: "How long does DNA testing take?",
    answer:
      "Turnaround times can depend on the test and the circumstances of the case. Ask our team about the expected timeframe for the specific service you require.",
  },
  {
    question: "Can several people participate in one DNA test?",
    answer:
      "Participant requirements depend on the type of test and the relationship being investigated. Include the number and relationship of the participants in your enquiry so our team can advise you.",
  },
  {
    question:
      "Will my DNA test be accepted by a court or immigration authority?",
    answer:
      "Acceptance depends on the requirements of the relevant court, authority, or institution. Tell our team the intended purpose and the relevant authority so the applicable procedures and requirements can be discussed. Acceptance cannot be guaranteed without confirmation from the relevant authority.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const generalQuoteMessage =
    "Hello Global DNA, I visited your website and would like help choosing a DNA testing service and receiving a personalised quote in USD. Please assist me.";

  return (
    <main className={styles.pricingPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Pricing &amp; Quotes</span>
            </nav>

            <span className={styles.eyebrow}>
              <FaDna aria-hidden="true" />
              DNA TESTING PRICES
            </span>

            <h1>
              Understand your options.
              <span> Get a personalised quote.</span>
            </h1>

            <p className={styles.heroDescription}>
              Every DNA testing enquiry is different. Tell us what you need and
              our team will help you understand the available service,
              requirements, and applicable price in USD.
            </p>

            <div className={styles.heroActions}>
              <WhatsAppLink
                className={styles.primaryButton}
                message={generalQuoteMessage}
              >
                Request a Quote
                <FaArrowRight aria-hidden="true" />
              </WhatsAppLink>

              <Link href="#testing-services" className={styles.secondaryButton}>
                Explore Testing Services
              </Link>
            </div>

            <div className={styles.heroTrust}>
              <span>
                <FaCheck aria-hidden="true" />
                Personalised quotes
              </span>
              <span>
                <FaCheck aria-hidden="true" />
                Prices discussed in USD
              </span>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={`${styles.dnaOrbit} dnaOrbitOne`} />
            <div className={`${styles.dnaOrbit} dnaOrbitTwo`} />

            <div className={styles.dnaVisual}>
              <FaDna />
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTop}`}>
              <span className={styles.floatingIcon}>
                <FaShieldHalved />
              </span>
              <span>
                <strong>Reliable guidance</strong>
                <small>Understand your options</small>
              </span>
            </div>

            <div
              className={`${styles.floatingCard} ${styles.floatingCardBottom}`}
            >
              <span className={styles.floatingIcon}>
                <FiMessageCircle />
              </span>
              <span>
                <strong>Personalised quote</strong>
                <small>Speak with our team</small>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroBottomLine} aria-hidden="true" />
      </section>

      {/* Pricing introduction */}
      <section className={styles.pricingIntro}>
        <div className={styles.sectionContainer}>
          <div className={styles.introPanel}>
            <div className={styles.introIcon}>
              <FiMessageCircle aria-hidden="true" />
            </div>

            <div className={styles.introContent}>
              <span className={styles.sectionEyebrow}>
                SIMPLE. PERSONAL. TRANSPARENT.
              </span>

              <h2>Get the right quote for your DNA test.</h2>

              <p>
                We do not display unconfirmed fixed prices. Contact Global DNA
                with your requirements so our team can clarify the appropriate
                service and provide the applicable quote.
              </p>
            </div>

            <WhatsAppLink
              className={styles.introButton}
              message={generalQuoteMessage}
            >
              Chat with us
              <FaArrowRight aria-hidden="true" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Testing services */}
      <section className={styles.servicesSection} id="testing-services">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>
              OUR DNA TESTING SERVICES
            </span>

            <h2>
              What would you like
              <span> to find out?</span>
            </h2>

            <p>
              Select the service that best matches your needs. Each option opens
              WhatsApp with a message prepared for that specific enquiry.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const ServiceIcon = service.icon;

              return (
                <article className={styles.serviceCard} key={service.title}>
                  <div className={styles.serviceIcon}>
                    <ServiceIcon aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>

                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>

                  <div className={styles.serviceCardFooter}>
                    <span className={styles.quoteLabel}>Request a quote</span>

                    <WhatsAppLink
                      className={styles.serviceButton}
                      message={service.message}
                    >
                      Get Quote
                      <FaArrowRight aria-hidden="true" />
                    </WhatsAppLink>
                  </div>
                </article>
              );
            })}
          </div>

          <p className={styles.servicesDisclaimer}>
            Service availability, testing requirements, and applicable pricing
            must be confirmed with our team. The options above are enquiry
            categories and do not guarantee that every test is available at
            every centre.
          </p>
        </div>
      </section>

      {/* Pricing factors */}
      <section className={styles.factorsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>
              UNDERSTANDING YOUR QUOTE
            </span>

            <h2>What may affect your quote?</h2>

            <p>
              A few details help our team understand your enquiry and provide
              more relevant pricing information.
            </p>
          </div>

          <div className={styles.factorsGrid}>
            {pricingFactors.map((factor) => {
              const FactorIcon = factor.icon;

              return (
                <article className={styles.factorCard} key={factor.title}>
                  <div className={styles.factorIcon}>
                    <FactorIcon aria-hidden="true" />
                  </div>

                  <h3>{factor.title}</h3>

                  <p>{factor.description}</p>
                </article>
              );
            })}
          </div>

          <div className={styles.factorsNote}>
            <FaShieldHalved aria-hidden="true" />

            <p>
              Not sure which details matter? You can simply describe your
              situation in WhatsApp and let our team guide you.
            </p>

            <WhatsAppLink
              className={styles.textLink}
              message="Hello Global DNA, I am not sure which DNA testing service I need. Could you help me understand my options and provide a personalised quote in USD?"
            >
              Ask our team
              <FaArrowRight aria-hidden="true" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Quote process */}
      <section className={styles.processSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>HOW IT WORKS</span>

            <h2>Your quote in three simple steps.</h2>

            <p>
              Start the conversation online and understand your options before
              making arrangements.
            </p>
          </div>

          <div className={styles.processGrid}>
            {quoteSteps.map((step, index) => (
              <article className={styles.processCard} key={step.number}>
                <div className={styles.processNumber}>{step.number}</div>

                {index < quoteSteps.length - 1 && (
                  <div className={styles.processConnector} aria-hidden="true" />
                )}

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.processAction}>
            <WhatsAppLink
              className={styles.primaryButton}
              message={generalQuoteMessage}
            >
              Start Your Enquiry
              <FaArrowRight aria-hidden="true" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} id="pricing-faq">
        <div className={styles.sectionContainer}>
          <div className={styles.faqLayout}>
            <div className={styles.faqIntro}>
              <span className={styles.sectionEyebrow}>
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                Questions about
                <span> pricing?</span>
              </h2>

              <p>
                Find answers to common questions about quotes, testing
                requirements, and the next steps.
              </p>

              <div className={styles.faqContactCard}>
                <div className={styles.faqContactIcon}>
                  <FiHelpCircle aria-hidden="true" />
                </div>

                <h3>Still need help?</h3>

                <p>Speak with our team about your specific enquiry.</p>

                <WhatsAppLink
                  className={styles.faqContactButton}
                  message="Hello Global DNA, I have a question about DNA testing prices and requirements. Could someone please assist me?"
                >
                  Ask a Question
                  <FaArrowRight aria-hidden="true" />
                </WhatsAppLink>
              </div>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `pricing-faq-answer-${index}`;

                return (
                  <article
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqItemOpen : ""
                    }`}
                    key={faq.question}
                  >
                    <h3 className={styles.faqQuestionHeading}>
                      <button
                        type="button"
                        className={styles.faqQuestion}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span>{faq.question}</span>

                        <FiChevronDown
                          className={styles.faqChevron}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      className={styles.faqAnswer}
                      hidden={!isOpen}
                    >
                      <p>{faq.answer}</p>

                      {index === 0 && (
                        <WhatsAppLink
                          className={styles.textLink}
                          message="Hello Global DNA, I would like to know the price of the DNA testing service I need. Could you help me get a personalised quote in USD?"
                        >
                          Request a quote
                          <FaArrowRight aria-hidden="true" />
                        </WhatsAppLink>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCtaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.finalCta}>
            <div className={styles.finalCtaGlow} aria-hidden="true" />

            <div className={styles.finalCtaContent}>
              <span className={styles.finalCtaEyebrow}>
                LET&apos;S GET STARTED
              </span>

              <h2>
                The answers you need
                <span> start with a conversation.</span>
              </h2>

              <p>
                Tell us what you need, ask your questions, and request a
                personalised DNA testing quote in USD.
              </p>

              <WhatsAppLink
                className={styles.finalCtaButton}
                message="Hello Global DNA, I visited your pricing page and would like to request a personalised quote for DNA testing. Please help me choose the right service and understand the requirements and pricing in USD."
              >
                <FiMessageCircle aria-hidden="true" />
                Contact Global DNA on WhatsApp
                <FaArrowRight aria-hidden="true" />
              </WhatsAppLink>

              <div className={styles.finalCtaFootnote}>
                <FaRegClock aria-hidden="true" />
                Begin your enquiry online at your convenience.
              </div>
            </div>

            <div className={styles.finalCtaVisual} aria-hidden="true">
              <FaDna />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
