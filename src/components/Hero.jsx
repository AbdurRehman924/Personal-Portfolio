import { useEffect, useState } from 'react';

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Python', 'Linux', 'Git', 'CI / CD', 'Actions', 'Ansible', 'Monitoring', 'Security', 'Logging'];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 700);

    return () => clearInterval(interval);
  }, [skills.length]);

  const handleScrollClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="text-center max-w-4xl px-6">
        <img
          src={`${process.env.PUBLIC_URL}/portfolio.jpeg`}
          alt="Portfolio"
          className="w-[200px] h-[200px] rounded-full mx-auto mb-4"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Khan AbdurRehman
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-4">
          DevSecOps | Cloud Engineer
        </p>

        {/* Auto-sliding tech skills */}
        <div className="h-12 flex items-center justify-center mb-8">
          <div className="text-lg md:text-xl text-gray-600 flex items-end gap-2">
            <span>Specialized in</span>
            <span className="font-semibold text-blue-600 min-w-[120px] inline-block transition-all duration-500">
              {skills[currentSkill]}
            </span>
          </div>
        </div>

        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div
          className="absolute bottom-8  transform -translate-x-1/2 animate-bounce"
          onClick={handleScrollClick}
        >
          <div className="flex flex-col items-center text-gray-500 cursor-pointer text-xs transition-colors">Scroll down
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
