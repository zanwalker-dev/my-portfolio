/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

// Components
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container flex flex-col-reverse lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex  items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/avatar.png"
                width={40}
                height={40}
                alt="my-portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-indigo-400 txt-sm tracking-wide txt-animate">
              <span className="relative w-2 h-2 rounded-full bg-indigo-300">
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="line">zanwalker-dev</span>
              <span className="cursor w-2.5 h-0.5 top-1.5 rounded-2xl"></span>
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[40ch] lg:max-w-[15ch] mt-5">
            André Rocha
          </h2>
          <p className="text-lg font-extralight text-indigo-400">
            Software Developer
          </p>
          <p className="text-sm text-zinc-400 mb-8 lg:mb-10">
            #FullStack #FrontEnd #BackEnd
          </p>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Currículo"
              icon="download"
              target="_blank"
              href="/curriculo_andre_rocha_2025.pdf"
              download
            />
            <ButtonOutline
              href="#about"
              label="Sobre mim"
              icon="keyboard_double_arrow_down"
            />
          </div>
        </div>
        <div className="mb-8 lg:block">
          <figure className="w-full max-w-[200px] ml-auto md:max-w-[300px] lg:max-w-[480px]">
            <img
              src="/profile.png"
              width={656}
              height={800}
              alt="André Rocha"
              className="profile-image w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
