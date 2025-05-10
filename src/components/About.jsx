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
            Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Unifacs. Eu sou
            apaixonado por POO e passo boa parte do meu tempo pesquisando e aprendendo sobre boas
            práticas, modularização e organização do código em geral.
            No meu tempo livre sou mergulhador e dou aula de mergulho voluntário com foco na preservação ambiental.
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
