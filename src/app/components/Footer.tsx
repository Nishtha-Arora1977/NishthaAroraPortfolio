import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Email', href: 'mailto:anishtha33@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nishtha-arora-22aab626b', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Nishtha-Arora1977', icon: Github },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-baseline gap-2 font-serif text-xl text-ink">
              Nishtha Arora
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Freelance website developer building modern business websites and e-commerce stores.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nishtha Arora. All rights reserved.</p>
          <p>Designed and built by Nishtha Arora.</p>
        </div>
      </div>
    </footer>
  );
}
