import { useState } from "react";
import { projects1, projects2 } from "../../../../constants";
import ImageLightbox from "./ImageLightbox";
import Reveal from "../Reveal";

const SectionLabel = ({ index, children }) => (
  <div className="flex items-baseline gap-3 border-t-2 border-ink pt-3">
    <span className="font-mono-id text-micro text-stamp">{index}</span>
    <h3 className="text-heading-md font-semibold text-ink">{children}</h3>
  </div>
);

const ZoomHint = () => (
  <span
    className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 bg-ink/70 px-2 py-1 text-micro font-medium text-paper opacity-0 transition-opacity group-hover:opacity-100"
    aria-hidden="true"
  >
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7.5 7.5L10.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 3.5V6.5M3.5 5H6.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
    Enlarge
  </span>
);

const ProjectRow = ({ project, index, onImageClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal as="li" delay={index * 70} className="border-t border-rule py-10 first:border-t-0 first:pt-0">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-10">
        <div className="order-2 lg:order-1">
          <button
            type="button"
            onClick={() => onImageClick(project.image, project.title)}
            className="group relative block aspect-[4/3] w-full overflow-hidden border border-rule bg-paper-raised sm:aspect-[16/10]"
            aria-label={`Enlarge screenshot for ${project.title}`}
          >
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <ZoomHint />
          </button>
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-mono-id text-micro text-slate">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="mt-3 text-heading-lg font-semibold text-ink">
            {project.title}
          </h3>

          <p className="mt-3 max-w-[65ch] text-body text-ink-muted">
            {project.description}
          </p>

          {project.highlights && (
            <div className="mt-4">
              <button
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="inline-flex min-h-[44px] items-center text-small font-medium text-ink underline decoration-rule underline-offset-4 hover:text-stamp"
              >
                {expanded ? "Hide details" : "Details"}
              </button>

              {expanded && (
                <ul className="mt-4 flex flex-col gap-3">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-body text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-stamp" aria-hidden="true" />
                      <span>
                        <span className="font-medium text-ink">{point.label}</span>
                        {point.detail ? `, ${point.detail}` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.map((tag) => (
              <li key={tag} className="font-mono-id text-micro text-ink-muted">
                {tag}
              </li>
            ))}
          </ul>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center text-small font-medium text-ink underline decoration-rule underline-offset-4 hover:text-stamp"
            >
              View Code &rarr;
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
};

const ProjectCard = ({ project, index, onImageClick }) => (
  <Reveal as="li" delay={index * 70} className="flex flex-col border border-rule">
    <button
      type="button"
      onClick={() => onImageClick(project.image, project.title)}
      className="group relative block aspect-[16/10] w-full overflow-hidden bg-paper-raised"
      aria-label={`Enlarge screenshot for ${project.title}`}
    >
      <img
        src={project.image}
        alt=""
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <ZoomHint />
    </button>
    <div className="flex flex-1 flex-col p-5">
      <h4 className="text-body font-semibold text-ink">{project.title}</h4>
      <p className="mt-2 flex-1 text-small text-ink-muted">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
        {project.tags.slice(0, 4).map((tag) => (
          <li key={tag} className="font-mono-id text-micro text-ink-muted">
            {tag}
          </li>
        ))}
      </ul>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[44px] w-fit items-center text-small font-medium text-ink underline decoration-rule underline-offset-4 hover:text-stamp"
        >
          View Code &rarr;
        </a>
      )}
    </div>
  </Reveal>
);

const Projects = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, title) => setLightbox({ src, title });
  const closeLightbox = () => setLightbox(null);

  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-rule px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl2:px-16"
    >
      <div className="mx-auto max-w-content">
        <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
          Exhibit 03
        </span>
        <h2 className="mt-4 text-display-md font-semibold text-ink">
          Projects
        </h2>

        <div className="mt-14">
          <SectionLabel index="A">Production systems, delivered professionally</SectionLabel>
          <ol className="mt-2">
            {projects1.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                onImageClick={openLightbox}
              />
            ))}
          </ol>
        </div>

        <div className="mt-16">
          <SectionLabel index="B">Independent projects</SectionLabel>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects2.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onImageClick={openLightbox} />
            ))}
          </ul>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.title} onClose={closeLightbox} />
      )}
    </section>
  );
};

export default Projects;
