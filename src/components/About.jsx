/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <h2 className="text-5xl font-bold headline-2 mb-4">Sobre mim</h2>
          <p className="mb-4 md:-mb-8 md:text-xl md:max-w-[60ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <img
            src="/logo-no-bg.png"
            alt="logo_zanwalker"
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
