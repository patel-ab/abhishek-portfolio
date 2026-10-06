import { certifications } from "../../../../constants";
import Reveal from "../Reveal";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="scroll-mt-16 border-b border-rule px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl2:px-16"
    >
      <div className="mx-auto max-w-content">
        <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
          Exhibit 04
        </span>
        <h2 className="mt-4 text-display-md font-semibold text-ink">
          Certificates
        </h2>

        <ol className="mt-12 flex flex-col">
          {certifications.map((cert, index) => (
            <Reveal
              key={cert.id}
              as="li"
              delay={index * 70}
              className="grid grid-cols-1 items-center gap-4 border-t border-rule py-6 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_1fr_auto] sm:gap-8"
            >
              <span className="font-mono-id text-micro text-slate">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden bg-paper-raised">
                  <img
                    src={cert.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-body font-medium text-ink">{cert.title}</h3>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-small font-medium text-ink underline decoration-rule underline-offset-4 hover:text-stamp"
              >
                Visit &rarr;
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Certifications;
