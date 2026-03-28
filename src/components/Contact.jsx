import useFadeIn from '../hooks/useFadeIn';

const contacts = [
  {
    label: "Email",
    value: "pure.art.endeavor@gmail.com",
    href: "mailto:pure.art.endeavor@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "khan-abdurrehman",
    href: "https://www.linkedin.com/in/khan-abdurrehman-883653214/",
  },
  {
    label: "GitHub",
    value: "AbdurRehman924",
    href: "https://github.com/AbdurRehman924",
  },
];

const Contact = () => {
  const ref = useFadeIn();
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div ref={ref} className="max-w-2xl mx-auto px-6 text-center opacity-0 translate-y-6 transition-all duration-700">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Get In Touch</h2>
        <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-500 mb-10 leading-relaxed">
          Open to DevSecOps, Cloud Engineering, and Platform Engineering roles. If you're building something ambitious, let's talk.
        </p>

        <div className="space-y-3 mb-10">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all duration-200 text-left group"
            >
              <div>
                <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-400">
          Based in Pakistan · Available for remote roles worldwide
        </p>
      </div>
    </section>
  );
};

export default Contact;
