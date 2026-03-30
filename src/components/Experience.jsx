const experience = [
  {
    role: "DevSecOps Engineer",
    company: "Personal Project — Production-Grade K8s on AWS",
    period: "",
    type: "Self-Directed",
    points: [
      "Built a self-managed 6-node HA Kubernetes cluster on AWS EC2 from scratch using kubeadm and Terraform — no managed services.",
      "Deployed 12 microservices with full observability: Prometheus, Grafana, Loki, Promtail, and Jaeger distributed tracing.",
      "Implemented Istio service mesh with mTLS STRICT mode, VirtualServices, and canary deployments.",
      "Set up ArgoCD GitOps with auto-sync and self-heal across 7 applications.",
      "Hardened security with Falco runtime detection, Trivy image scanning, network policies, and cert-manager.",
    ],
  },
  {
    role: "DevSecOps Engineer",
    company: "Confidential (FinTech / SaaS)",
    period: "Jul 2025 – Present",
    type: "Remote",
    points: [
      "Spearheaded a multi-cloud migration across Azure and AWS, driving a 30% improvement in operational efficiency.",
      "Deployed automated threat detection pipelines using Azure Sentinel, reducing Mean Time to Remediate (MTTR) by 50%.",
      "Enforced Zero Trust architecture through IAM role optimization and network segmentation, achieving 100% audit compliance.",
      "Hardened Kubernetes clusters via network policies, HashiCorp Vault secrets management, and automated container image scanning.",
    ],
  },
  {
    role: "Cloud Engineer",
    company: "Confidential",
    period: "Nov 2024 – Jul 2025",
    type: "Remote",
    points: [
      "Architected highly available cloud infrastructure supporting 10,000+ concurrent users at 99.99% uptime.",
      "Developed modular, reusable Terraform stacks that reduced infrastructure provisioning time by 75% (2 hrs → 30 min).",
      "Reduced annual cloud expenditure by $15,000 through instance right-sizing and strategic spot instance utilization.",
      "Designed and validated multi-region Disaster Recovery (DR) strategies achieving RTO < 1 hour.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Digital Perception",
    period: "Feb 2022 – Sep 2024",
    type: "On Site",
    points: [
      "Built and maintained full-stack web applications serving 10,000+ users using the MEVN stack (MongoDB, Express, Vue.js, Node.js).",
      "Designed RESTful APIs for real-time data processing, significantly improving application responsiveness and UX.",
      "Delivered dynamic, responsive frontends with Vue.js and React.js, boosting user engagement and accessibility.",
      "Led migration from monolithic to microservices architecture, improving system performance by 20%.",
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
                  {exp.period && <p className="text-xs text-gray-400 mb-4 font-medium">{exp.period}</p>}
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
