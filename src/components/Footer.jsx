const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-bold text-white text-lg">AR.</span>
      <p className="text-sm">© {new Date().getFullYear()} Khan AbdurRehman · DevSecOps Engineer</p>
      <div className="flex gap-5 text-sm">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#highlights-&-journey" className="hover:text-white transition-colors">Highlights & Journey</a>
        <a href="#architectural-reference" className="hover:text-white transition-colors">Architectural Reference</a>
        <a href="https://github.com/AbdurRehman924" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
