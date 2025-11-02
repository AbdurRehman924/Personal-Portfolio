const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center max-w-4xl px-6">
        <img 
          src="/portfolio.jpeg" 
          alt="Portfolio" 
          className="w-[200px] h-[200px] rounded-full mx-auto mb-4"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Khan AbdurRehman
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-8">
          DevSecOps | Cloud Engineer
        </p>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
