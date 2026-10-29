"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import styles from "./contact.module.css";

const WHATSAPP_NUMBER = "YOURWHATSAPPNUMBER";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak to our team",
    value: "+263 71 942 8436",
    href: "tel:+263719428436",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your enquiry",
    value: "info@globaldnaintl.com",
    href: "mailto:info@globaldnaintl.com",
  },
  {
    icon: MapPin,
    title: "Visit a Centre",
    description: "Find a convenient location",
    value: "Explore our testing centres",
    href: "/#centers",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("General Enquiry");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const whatsappMessage = [
      "Hello Global DNA!",
      "",
      "I would like to make an enquiry.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Enquiry type: ${enquiryType}`,
      "",
      `Message: ${message}`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className={styles.contact_page}>
      <ul className={styles.contact_menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>/</li>
        <li className={styles.active_link}>Contact</li>
      </ul>
      <section className={styles.hero}>
        <div className={styles.hero_grid} aria-hidden="true" />
        <div className={styles.hero_glow} aria-hidden="true" />

        <div className={styles.hero_content}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrow_dot} />
            WE ARE HERE TO HELP
          </span>

          <h1>
            Let&apos;s Talk
            <span> Genetics.</span>
          </h1>

          <p className={styles.hero_description}>
            Questions about DNA testing? Our team is ready to help you
            understand your options, choose the right test, and take the next
            step with confidence.
          </p>

          <div className={styles.hero_actions}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Global DNA! I would like to make an enquiry about your DNA testing services.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary_button}
            >
              <MessageCircle size={19} />
              Chat on WhatsApp
              <ArrowRight size={17} />
            </a>

            <a href="#contact_form" className={styles.secondary_button}>
              Send an Enquiry
              <ArrowRight size={17} />
            </a>
          </div>

          <div className={styles.trust_note}>
            <ShieldCheck size={18} />
            <span>Your privacy matters to us.</span>
          </div>
        </div>

        <div className={styles.hero_visual} aria-hidden="true">
          <div className={styles.visual_orbit} />
          <div className={styles.visual_orbit_inner} />

          <div className={styles.dna_visual}>
            <svg
              viewBox="0 0 220 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {Array.from({ length: 15 }, (_, index) => {
                const y = 20 + index * 21;
                const x1 = 65 + Math.sin(index * 0.48) * 43;
                const x2 = 155 - Math.sin(index * 0.48) * 43;

                return (
                  <g key={index}>
                    <line
                      x1={x1}
                      y1={y}
                      x2={x2}
                      y2={y}
                      stroke="#38a3ff"
                      strokeWidth="1.5"
                      opacity="0.65"
                    />
                    <circle cx={x1} cy={y} r="3.5" fill="#38a3ff" />
                    <circle cx={x2} cy={y} r="3.5" fill="#6ee7f9" />
                  </g>
                );
              })}

              <path
                d={Array.from({ length: 71 }, (_, index) => {
                  const y = 20 + index * 4.3;
                  const x = 110 + Math.sin(index * 0.14) * 43;
                  return `${index === 0 ? "M" : "L"} ${x} ${y}`;
                }).join(" ")}
                stroke="#38a3ff"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d={Array.from({ length: 71 }, (_, index) => {
                  const y = 20 + index * 4.3;
                  const x = 110 - Math.sin(index * 0.14) * 43;
                  return `${index === 0 ? "M" : "L"} ${x} ${y}`;
                }).join(" ")}
                stroke="#6ee7f9"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className={styles.visual_label}>
            <span className={styles.visual_label_dot} />
            Science you can trust
          </div>
        </div>

        <div className={styles.hero_bottom_line} />
      </section>

      <section className={styles.contact_details}>
        <div className={styles.section_heading}>
          <span className={styles.section_eyebrow}>GET IN TOUCH</span>
          <h2>We&apos;re just a message away.</h2>
          <p>Choose the contact method that works best for you.</p>
        </div>

        <div className={styles.contact_cards}>
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className={styles.contact_card}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span className={styles.contact_icon}>
                  <Icon size={23} />
                </span>

                <span className={styles.card_title}>{item.title}</span>
                <span className={styles.card_description}>
                  {item.description}
                </span>
                <span className={styles.card_value}>{item.value}</span>

                <span className={styles.card_arrow}>
                  <ArrowRight size={17} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className={styles.enquiry_section} id="contact_form">
        <div className={styles.enquiry_info}>
          <span className={styles.section_eyebrow}>HOW CAN WE HELP?</span>

          <h2>
            Tell us what
            <span> you need.</span>
          </h2>

          <p>
            Whether you need information about a paternity test, immigration DNA
            testing, or another service, send us a message and we&apos;ll help
            you find the right next step.
          </p>

          <div className={styles.info_points}>
            <div className={styles.info_point}>
              <span className={styles.info_point_icon}>
                <ShieldCheck size={20} />
              </span>
              <div>
                <strong>Confidential enquiries</strong>
                <p>We treat your enquiry with care and discretion.</p>
              </div>
            </div>

            <div className={styles.info_point}>
              <span className={styles.info_point_icon}>
                <MessageCircle size={20} />
              </span>
              <div>
                <strong>Personal assistance</strong>
                <p>Get guidance on available tests and next steps.</p>
              </div>
            </div>

            <div className={styles.info_point}>
              <span className={styles.info_point_icon}>
                <Clock3 size={20} />
              </span>
              <div>
                <strong>Convenient communication</strong>
                <p>Continue your enquiry directly on WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>

        <form className={styles.enquiry_form} onSubmit={handleSubmit}>
          <div className={styles.form_heading}>
            <h3>Send us an enquiry</h3>
            <p>Complete the details below to continue on WhatsApp.</p>
          </div>

          <div className={styles.form_row}>
            <div className={styles.form_group}>
              <label htmlFor="contact_name">Full name *</label>
              <input
                id="contact_name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="contact_phone">Phone number *</label>
              <input
                id="contact_phone"
                name="phone"
                type="tel"
                placeholder="+263 ..."
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="contact_email">Email address (optional)</label>
            <input
              id="contact_email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="enquiry_type">What can we help you with? *</label>
            <select
              id="enquiry_type"
              name="enquiryType"
              value={enquiryType}
              onChange={(event) => setEnquiryType(event.target.value)}
              required
            >
              <option>General Enquiry</option>
              <option>Paternity DNA Testing</option>
              <option>Maternity DNA Testing</option>
              <option>Immigration DNA Testing</option>
              <option>Relationship DNA Testing</option>
              <option>Forensic DNA Testing</option>
              <option>Ancestry DNA Testing</option>
              <option>Legal DNA Testing</option>
              <option>Testing Centre Information</option>
              <option>Other Enquiry</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="contact_message">Your message *</label>
            <textarea
              id="contact_message"
              name="message"
              placeholder="Tell us how we can assist you..."
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>

          <p className={styles.privacy_note}>
            Please do not include genetic, medical, or other sensitive personal
            information in this initial enquiry.
          </p>

          <button type="submit" className={styles.submit_button}>
            <MessageCircle size={19} />
            Continue on WhatsApp
            <ArrowRight size={18} />
          </button>

          <p className={styles.form_footer}>
            Your message will open in WhatsApp for you to review and send.
          </p>
        </form>
      </section>

      <section className={styles.centres_cta}>
        <div className={styles.centres_cta_content}>
          <span className={styles.section_eyebrow}>FIND US NEAR YOU</span>
          <h2>Looking for a testing centre?</h2>
          <p>
            Find a convenient Global DNA location and get guidance on arranging
            your test.
          </p>

          <Link href="/#centers" className={styles.centres_button}>
            Explore Our Centres
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
