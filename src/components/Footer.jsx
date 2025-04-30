/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

// Components
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Início",
    href: "#home",
  },
  {
    label: "Sobre mim",
    href: "#about",
  },
  {
    label: "Projetos",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/zanwalker-dev",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/decode-src",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arroba-zan",
  },
];

const Footer = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Vamos construir o futuro hoje!
            </h2>
            <ButtonPrimary
              href="mailto:andre.rocha2302@gmail.com"
              label="Começar um projeto"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Mapa do site</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-50 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 reveal-up">Redes Sociais</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-50 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/logo-no-bg.png" width={40} height={40} alt="Logo" />
          </a>

          <p className="text-zinc-500 text-sm h-4">
            &copy; 2025 <span className="text-zinc-300">zanwalker-dev</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
