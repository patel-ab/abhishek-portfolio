import { SkillsInfo } from "../../../../constants";
import Reveal from "../Reveal";

const Skills = () => (
  <section
    id="skills"
    className="scroll-mt-16 border-b border-rule px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl2:px-16"
  >
    <div className="mx-auto max-w-content">
      <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
        Exhibit 05
      </span>
      <h2 className="mt-4 text-display-md font-semibold text-ink">
        Skills
      </h2>

      <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {SkillsInfo.map((category, index) => (
          <Reveal key={category.title} as="div" delay={index * 60} className="border-t border-rule pt-5">
            <dt className="font-mono-id text-micro uppercase tracking-wide text-slate">
              {category.title}
            </dt>
            <dd className="mt-2 text-body text-ink-muted">
              {category.skills.map((s) => s.name).join(", ")}
            </dd>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Skills;
