import { experiences } from "../../../../constants";
import Reveal from "../Reveal";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-rule px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl2:px-16"
    >
      <div className="mx-auto max-w-content">
        <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
          Exhibit 02
        </span>
        <h2 className="mt-4 text-display-md font-semibold text-ink">
          Experience
        </h2>

        <ol className="mt-12 flex flex-col">
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.id}
              as="li"
              delay={index * 80}
              className="grid grid-cols-1 gap-4 border-t border-rule py-10 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_1fr] sm:gap-8 lg:grid-cols-[9rem_1fr]"
            >
              <div className="flex flex-row items-start gap-3 sm:flex-col sm:gap-2">
                <span className="font-mono-id text-micro text-slate">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono-id text-small text-ink-muted">
                  {experience.date}
                </span>
                {index === 0 && (
                  <span className="inline-flex items-center bg-stamp-tint px-2 py-0.5 text-micro font-medium uppercase tracking-wide text-stamp">
                    Current
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden bg-paper-raised">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-ink">
                      {experience.role}
                    </h3>
                    <p className="text-small text-ink-muted">{experience.company}</p>
                  </div>
                </div>

                <p className="mt-4 max-w-[70ch] text-body text-ink-muted">
                  {experience.desc}
                </p>

                <p className="mt-4 text-small text-ink-muted">
                  <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
                    Stack{" "}
                  </span>
                  {experience.skills.join(", ")}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
