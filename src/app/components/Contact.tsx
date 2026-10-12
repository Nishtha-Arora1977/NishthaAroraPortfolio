import { useState, type FormEvent } from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const EMAIL = 'anishtha33@gmail.com';
const LINKEDIN = 'https://linkedin.com/in/nishtha-arora-22aab626b';
const GITHUB = 'https://github.com/Nishtha-Arora1977';

const projectTypes = [
  'Business website',
  'E-commerce store',
  'Redesign of an existing site',
  'Not sure yet — let’s talk',
];

type Errors = Partial<Record<'name' | 'email' | 'projectType' | 'message', string>>;

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-clay focus:outline-none';

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (!values.projectType) next.projectType = 'Please choose a project type.';
    if (values.message.trim().length < 10)
      next.message = 'Please add a little more detail (at least 10 characters).';
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    const subject = `New project inquiry — ${values.projectType}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Project type: ${values.projectType}`,
      '',
      'Project details:',
      values.message,
    ].join('\n');

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-clay-soft">
                Contact
              </p>
              <h2 className="text-balance font-serif text-4xl text-paper sm:text-5xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-paper/70">
                Whether you&apos;re launching a new business or bringing your store online, let&apos;s
                discuss how we can build the right website for you.
              </p>

              <ul className="mt-10 space-y-4">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-center gap-4 text-paper transition-colors hover:text-clay-soft"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-clay-soft transition-colors group-hover:border-clay-soft">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="text-sm">{EMAIL}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-paper transition-colors hover:text-clay-soft"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-clay-soft transition-colors group-hover:border-clay-soft">
                      <Linkedin className="h-5 w-5" />
                    </span>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-paper transition-colors hover:text-clay-soft"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-clay-soft transition-colors group-hover:border-clay-soft">
                      <Github className="h-5 w-5" />
                    </span>
                    <span className="text-sm">GitHub</span>
                  </a>
                </li>
                <li className="flex items-center gap-4 text-paper/70">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-clay-soft">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="text-sm">India · available for remote projects</span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-paper/80">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) => update('name', event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputClass}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-[#f0a48f]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-paper/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(event) => update('email', event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-[#f0a48f]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm text-paper/80">
                    Business or project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={values.projectType}
                    onChange={(event) => update('projectType', event.target.value)}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className="mt-2 text-sm text-[#f0a48f]">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-paper/80">
                    Brief project description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={(event) => update('message', event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me a little about your business and what you need."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-[#f0a48f]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-clay-strong sm:w-auto"
                >
                  Send inquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p role="status" className="text-sm text-paper/60">
                  {sent
                    ? 'Your email app should now open with the details filled in. If it doesn’t, email me directly at '
                    : 'This form opens your email app with the details filled in — no data is stored on this site.'}
                  {sent && (
                    <a href={`mailto:${EMAIL}`} className="text-clay-soft underline">
                      {EMAIL}
                    </a>
                  )}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
