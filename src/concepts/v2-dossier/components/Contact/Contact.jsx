import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const REACH_LINKS = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhishek-patel2000",
    href: "https://www.linkedin.com/in/abhishek-patel2000",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    value: "abhishekvpatel20@gmail.com",
    href: "mailto:abhishekvpatel20@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "github.com/patel-ab",
    href: "https://github.com/patel-ab",
    icon: FaGithub,
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o2pv5jc",
        "template_tl420pg",
        form.current,
        "rReABIC3FESmcq_mt"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl2:px-16"
    >
      <ToastContainer />
      <div className="mx-auto max-w-content">
        <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
          Exhibit 07
        </span>
        <h2 className="mt-4 text-display-md font-semibold text-ink">
          Let's talk
        </h2>
        <p className="mt-4 max-w-[60ch] text-body-lg text-ink-muted">
          Want to build something together, or just say hello? Send a
          message below or email me directly.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid max-w-xl grid-cols-1 gap-6"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="user_name" className="text-small font-medium text-ink">
                Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                required
                className="min-h-[44px] border-b border-rule bg-transparent py-2 text-body text-ink placeholder:text-slate focus-visible:border-stamp"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user_email" className="text-small font-medium text-ink">
                Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                required
                className="min-h-[44px] border-b border-rule bg-transparent py-2 text-body text-ink placeholder:text-slate focus-visible:border-stamp"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-small font-medium text-ink">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                className="min-h-[44px] border-b border-rule bg-transparent py-2 text-body text-ink placeholder:text-slate focus-visible:border-stamp"
                placeholder="What is this about?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-small font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="border-b border-rule bg-transparent py-2 text-body text-ink placeholder:text-slate focus-visible:border-stamp"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex min-h-[44px] w-fit items-center border border-ink bg-ink px-6 text-small font-medium text-paper transition-colors hover:bg-stamp hover:border-stamp"
            >
              Send message
            </button>
          </form>

          <div>
            <span className="font-mono-id text-micro uppercase tracking-wide text-slate">
              You can also reach me on
            </span>
            <ul className="mt-5 flex flex-col">
              {REACH_LINKS.map(({ label, value, href, icon: Icon }) => (
                <li key={label} className="border-t border-rule first:border-t-0">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex min-h-[64px] items-center gap-4 py-4 text-ink-muted transition-colors hover:text-stamp"
                  >
                    <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="block text-small font-medium text-ink group-hover:text-stamp">
                        {label}
                      </span>
                      <span className="block text-small text-ink-muted">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
