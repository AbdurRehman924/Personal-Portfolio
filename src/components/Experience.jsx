const experience = [
  {
    role: "DevSecOps Engineer",
    company: "Freelance / Self-Directed",
    period: "2024 – Present",
    type: "Cloud & Infrastructure",
    points: [
      "Built a production-grade self-managed Kubernetes platform on AWS EC2 from scratch using kubeadm — 6-node HA cluster, 12 microservices, 43 AWS resources",
      "Implemented full observability stack: Prometheus, Grafana, Loki, Promtail, Jaeger distributed tracing",
      "Deployed Istio service mesh with mTLS, VirtualServices, and PeerAuthentication policies",
      "Set up ArgoCD GitOps, Falco runtime security, Trivy scanning, HPA/VPA autoscaling, and cert-manager",
      "Provisioned all infrastructure with Terraform modules; automated cluster bootstrap with shell scripts",
    ],
  },
  {
    role: "Full-Stack JavaScript Developer",
    company: "Professional Experience",
    period: "2022 – 2024",
    type: "Software Engineering",
    points: [
      "Built and maintained web applications using Node.js, Express.js, React.js, Vue.js, and MongoDB",
      "Designed and implemented RESTful APIs with authentication, authorization, and data validation",
      "Worked with cloud deployments on AWS (EC2, S3, RDS) and containerized apps with Docker",
      "Collaborated in Agile/Scrum teams, managed code via Git, and participated in code reviews",
    ],
  },
];

import useFadeIn from '../hooks/useFadeIn';

const Experience = () => {
  const ref = useFadeIn();
  return (
    <section id="experience" className="py-24 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Experience</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:left-1/2"></div>

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow -translate-x-1.5 mt-6"></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{exp.role}</h3>
                    <span className="text-xs text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full shrink-0">{exp.type}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-400 mb-4 font-medium">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
