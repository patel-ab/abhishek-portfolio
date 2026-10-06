import { useEffect, useState } from "react";
import profilePhoto from "../../../../assets/profile-photo-cropped.jpg";
import epicLogo from "../../../../assets/company_logo/epic_logo.png";
import tcsLogo from "../../../../assets/company_logo/TCS-1.png";
import awsLogo from "../../../../assets/tech_logo/awslogo.png";
import msuLogo from "../../../../assets/company_logo/MSU-1.png";
import Reveal from "../Reveal";

const CASE_FACTS = [
  {
    label: "Current role",
    value: "Software Engineer, Epic Medical Research",
    logo: epicLogo,
    href: "https://epicmedresearch.com/",
  },
  {
    label: "Prior role",
    value: "Software Engineer, Tata Consultancy Services",
    logo: tcsLogo,
    href: "https://www.tcs.com/",
  },
  { label: "Education", value: "M.S. Computer Science, Michigan State University", logo: msuLogo },
  { label: "Certifications", value: "3x AWS Certified", logo: awsLogo, darkChip: true },
  { label: "Core stack", value: "Java · Spring Boot · Python · React · AWS" },
];

const HIGHLIGHTS = [
  "Built 3 production platforms solo, owning architecture, backend, frontend, and deployment, for clinical-trial software used daily by research staff",
  "Shipped AI tools into a HIPAA-regulated environment, where getting it wrong isn't an option",
  "Proven at enterprise scale on Equifax credit-monitoring microservices covering millions of borrower profiles",
];

const useMountReveal = (delay = 0) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return visible;
};

const About = () => {
  const show0 = useMountReveal(0);
  const show1 = useMountReveal(120);
  const show2 = useMountReveal(220);
  const show3 = useMountReveal(320);
  const show4 = useMountReveal(420);

  const heroStyle = (visible) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(14px)",
    transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
  });

  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-rule bg-paper px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12 lg:pb-24 lg:pt-12 xl2:px-16"
    >
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:gap-14 xl2:gap-20">
          <div className="lg:max-w-2xl">
            <span style={heroStyle(show0)} className="font-mono-id text-micro uppercase tracking-wide text-slate block">
              Exhibit 01
            </span>

            <p style={heroStyle(show1)} className="mt-5 text-body text-ink-muted">Hi, my name is</p>
            <h1 style={heroStyle(show1)} className="mt-2 max-w-xl text-display-lg font-semibold text-stamp">
              Abhishek Patel
            </h1>

            <p style={heroStyle(show2)} className="mt-3 text-heading-md font-medium text-ink-muted">
              Software Engineer · Backend Systems &amp; Applied AI
            </p>

            <div style={heroStyle(show2)} className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
              <span className="text-display-md font-bold leading-none text-stamp">4+</span>
              <p className="max-w-[65ch] text-body-lg text-ink-muted">
                Years of professional experience building backend systems and
                AI-powered applications, from data modeling and API design to
                testing, deployment, and monitoring. My work blends
                traditional backend engineering with distributed
                microservices and applied AI, including retrieval-augmented
                generation and LLM integration on the cloud. I care about
                writing code that's well-tested, easy to reason about, and
                built to scale.
              </p>
            </div>
          </div>

          <div style={heroStyle(show3)} className="flex flex-col items-center lg:items-start">
            <div
              className="aspect-square w-56 shrink-0 overflow-hidden rounded-full border-4 border-stamp sm:w-64 lg:w-64"
              style={{ boxShadow: "0 20px 44px -20px rgba(42,90,160,0.35)" }}
            >
              <img
                src={profilePhoto}
                alt="Abhishek Patel"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-6 max-w-[32ch] border-l-2 border-stamp pl-4 text-heading-md italic leading-snug text-ink-muted">
              I use AI to help me work faster, not to do the thinking for me.
            </p>

            <div className="mt-8 w-full max-w-[44ch]">
              <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
                | Highlights
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-small text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-stamp" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Reveal as="div" style={heroStyle(show4)} className="mt-14 border-t border-rule pt-10">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {CASE_FACTS.map((fact, index) => (
              <Reveal key={fact.label} as="div" delay={index * 60}>
                <dt className="font-mono-id text-micro uppercase tracking-wide text-slate">
                  {fact.label}
                </dt>
                <dd className="mt-1 flex items-center gap-2 text-body text-ink">
                  {fact.logo && fact.href ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-stamp"
                    >
                      <img
                        src={fact.logo}
                        alt=""
                        className={
                          fact.darkChip
                            ? "h-5 w-5 shrink-0 rounded bg-ink object-contain p-0.5"
                            : "h-5 w-5 shrink-0 object-contain"
                        }
                      />
                      <span>{fact.value}</span>
                    </a>
                  ) : fact.logo ? (
                    <>
                      <img
                        src={fact.logo}
                        alt=""
                        className={
                          fact.darkChip
                            ? "h-5 w-5 shrink-0 rounded bg-ink object-contain p-0.5"
                            : "h-5 w-5 shrink-0 object-contain"
                        }
                      />
                      <span>{fact.value}</span>
                    </>
                  ) : (
                    fact.value
                  )}
                </dd>
              </Reveal>
            ))}
          </dl>

          <a
            href="https://drive.google.com/file/d/1k1uKVZq8CRGdMzo3yLSFuQTaf0eROjqz/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-stamp px-6 text-small font-semibold text-paper transition-transform hover:scale-[1.03]"
          >
            Download CV
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
