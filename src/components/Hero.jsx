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
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/avatar.png"
                width={40}
                height={40}
                alt="my-portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-indigo-400 txt-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-indigo-300">
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Software Developer
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Vamos construir o futuro!
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Currículo" icon="download" />
            <ButtonOutline
              href="#about"
              label="Sobre mim"
              icon="keyboard_double_arrow_down"
            />
          </div>
        </div>
        <div className="lg:block">
          <figure className="w-full max-w-[150px] sm:max-w-[300px] md:max-w-[480px] ml-auto mr-auto">
            {" "}
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
