/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
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

            <div className="">
              <span className="">
                <span className=""></span>
              </span>
              Software Developer
            </div>
          </div>
          <h2 className="">Vamos construir o futuro!</h2>
          <div className="">ButtonPrimary ButtonOutline</div>
        </div>
        <div className="">
          <figure className="">
            <img
              src="/profile.png"
              width={656}
              height={800}
              alt="André Rocha"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
