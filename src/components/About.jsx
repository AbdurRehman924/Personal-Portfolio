import useFadeIn from '../hooks/useFadeIn';

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-24 bg-white">
      <div ref={ref} className="max-w-5xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">About</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 space-y-5 text-gray-700 leading-relaxed">
          <p>
            I'm a <span className="font-semibold text-gray-900">Cloud Infrastructure & DevSecOps Engineer</span> who architects, secures, and scales cloud environments across AWS, Azure, and GCP. I own outcomes — uptime, security posture, deployment velocity, cost efficiency — not just configurations.
          </p>
          <p>
            I came up through two years of <span className="font-semibold text-gray-900">full-stack engineering</span> before moving into infrastructure. That background matters: I understand what developers actually need from their platform, where systems break under real load, and how to build infrastructure that serves the product — not the other way around.
          </p>
          <p>
            I work best on problems that require someone to go deep — the kind where the answer isn't in the docs and the only way through is to understand the system well enough to reason about it from first principles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
