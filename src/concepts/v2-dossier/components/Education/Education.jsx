import { education } from "../../../../constants";
import Reveal from "../Reveal";

const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-b border-rule px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl2:px-16"
    >
      <div className="mx-auto max-w-content">
        <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
          Exhibit 06
        </span>
        <h2 className="mt-4 text-display-md font-semibold text-ink">
          Education
        </h2>

        <ol className="mt-12 flex flex-col">
          {education.map((edu, index) => (
            <Reveal
              key={edu.id}
              as="li"
              delay={index * 80}
              className="grid grid-cols-1 gap-4 border-t border-rule py-8 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_1fr] sm:gap-8 lg:grid-cols-[9rem_1fr]"
            >
              <div className="flex flex-row items-start gap-3 sm:flex-col sm:gap-2">
                <span className="font-mono-id text-micro text-slate">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono-id text-small text-ink-muted">
                  {edu.date}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden bg-paper-raised">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-ink">
                      {edu.degree}
                    </h3>
                    <p className="text-small text-ink-muted">{edu.school}</p>
                  </div>
                </div>

                <p className="mt-4 max-w-[70ch] text-body text-ink-muted">
                  {edu.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
