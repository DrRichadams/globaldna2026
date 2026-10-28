"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

import styles from "./faq.module.css";

const faqs = [
  {
    question: "What is DNA testing?",
    answer:
      "DNA testing examines genetic material from a sample to help establish biological relationships or answer other specific genetic questions. The type of test performed depends on the purpose of the enquiry.",
  },
  {
    question: "What types of DNA tests does Global DNA offer?",
    answer:
      "Global DNA provides DNA testing services for different needs, including paternity and other biological relationship enquiries. Contact our team to confirm which tests are currently available and which is appropriate for your situation.",
  },
  {
    question:
      "What is the difference between peace of mind and legal DNA testing?",
    answer:
      "Peace of mind testing is generally intended for personal information. Legal DNA testing involves additional procedures, which may include identity verification and documented sample handling. If you need results for court or another official purpose, tell us before arranging a test.",
  },
  {
    question: "How are DNA samples collected?",
    answer:
      "Many DNA tests use a cheek swab to collect cells from inside the mouth. Collection requirements can vary by test and purpose. Our team can explain the applicable procedure and whether collection must take place at an approved centre.",
  },
  {
    question: "How long does it take to receive DNA test results?",
    answer:
      "Turnaround time depends on the type of test, sample receipt, laboratory processing and any additional requirements. Contact Global DNA for an estimate for your particular test before proceeding.",
  },
  {
    question: "Is DNA testing confidential?",
    answer:
      "DNA testing involves sensitive personal information. Before proceeding, ask our team how your information and samples are handled, who may access the results, and what confidentiality arrangements apply to your test.",
  },
  {
    question: "Can I use peace of mind results for legal purposes?",
    answer:
      "Not necessarily. A peace of mind test may not meet the identity verification, sample collection or chain-of-custody requirements of a court or other authority. Confirm the requirements with the relevant institution and Global DNA before choosing a test.",
  },
  {
    question: "How do I arrange a DNA test with Global DNA?",
    answer:
      "Start by contacting our team and explaining what you need the test for. We can help you understand the available service, the next steps, and the relevant sample collection arrangements.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className={styles.faq_section}
      aria-labelledby="faq_heading"
    >
      <div className={styles.faq_container}>
        <header className={styles.faq_header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrow_line} />
            WE'RE HERE TO HELP
          </span>

          <h2 id="faq_heading">
            Frequently Asked <span>Questions</span>
          </h2>

          <p>
            Have questions about DNA testing? Find answers to common questions
            about the process, available tests and what to consider before
            getting started.
          </p>
        </header>

        <div className={styles.faq_layout}>
          <div className={styles.faq_list}>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const questionId = `faq-question-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  key={faq.question}
                  className={`${styles.faq_item} ${
                    isOpen ? styles.faq_item_open : ""
                  }`}
                >
                  <h3 className={styles.question_heading}>
                    <button
                      id={questionId}
                      type="button"
                      className={styles.faq_question}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                    >
                      <span className={styles.question_number}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={styles.question_text}>
                        {faq.question}
                      </span>

                      <span className={styles.chevron}>
                        <ChevronDown size={19} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    className={styles.faq_answer}
                    role="region"
                    aria-labelledby={questionId}
                    hidden={!isOpen}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className={styles.faq_sidebar}>
            <div className={styles.sidebar_icon}>
              <MessageCircleQuestion size={31} strokeWidth={1.5} />
            </div>

            <span className={styles.sidebar_eyebrow}>
              STILL HAVE QUESTIONS?
            </span>

            <h3>Every situation is different.</h3>

            <p>
              Tell us what you need to know. Our team can help you understand
              the available testing options and the next steps for your
              situation.
            </p>

            <Link href="/contact" className={styles.contact_button}>
              Ask us a question
              <span aria-hidden="true">↗</span>
            </Link>

            <div className={styles.sidebar_footer}>
              <span className={styles.footer_dot} />
              Personal guidance starts with an enquiry.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
