import { useEffect, useState } from 'react';

const SUBTITLE = 'Cloud Infrastructure & DevSecOps Engineer';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(SUBTITLE.slice(0, i + 1));
      i++;
      if (i === SUBTITLE.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center justify-center relative">
      <div className="text-center max-w-4xl px-6 pt-16">
        <img
          src={`${process.env.PUBLIC_URL}/portfolio.jpeg`}
          alt="Khan AbdurRehman"
          className="w-[180px] h-[180px] rounded-full mx-auto mb-6 object-cover ring-4 ring-white shadow-lg"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
          Khan AbdurRehman
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-2 min-h-[2rem]">
          {typed}<span className="animate-pulse">|</span>
        </p>
        <p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">
          I architect production-grade cloud infrastructure, harden systems end-to-end, and build full-stack applications — from the platform layer down to the product.
        </p>

        {/* Credibility bar */}
        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          {["AWS · Azure · GCP", "Kubernetes · Terraform · Istio", "Node.js · Vue.js · React"].map((item, i) => (
            <span key={i} className="text-sm text-gray-600 font-medium">{item}</span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#architectural-reference"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            View My Work
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            Work With Me
          </a>
        </div>
      </div>

      {showScroll && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center text-gray-400 text-xs gap-1">
            <span>Scroll</span>
            <div className="w-5 h-9 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
