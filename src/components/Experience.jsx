const solutions = [
  {
    title: "Production-Grade Kubernetes Platform on AWS",
    context: "Self-Directed · Infrastructure & Platform Engineering",
    period: "",
    type: "Case Study",
    outcomes: [
      "Architected and delivered a self-managed 6-node HA Kubernetes cluster on AWS EC2 from scratch using kubeadm and Terraform — no managed services, full ownership.",
      "Deployed 12 microservices with a complete observability stack: Prometheus, Grafana, Loki, Promtail, and Jaeger distributed tracing — zero blind spots in production.",
      "Enforced mTLS STRICT across all service-to-service traffic via Istio, eliminating unencrypted internal communication entirely.",
      "Shipped GitOps-driven continuous delivery with ArgoCD across 7 applications — auto-sync and self-heal enabled, human error removed from the deployment loop.",
      "Hardened the platform end-to-end: Falco runtime threat detection, Trivy image scanning, network policies, and cert-manager — production security posture from day one.",
    ],
  },
  {
    title: "Multi-Cloud Migration & Zero Trust Security Overhaul",
    context: "FinTech / SaaS · DevSecOps Engineering",
    period: "Jul 2025 – Present",
    type: "Remote",
    outcomes: [
      "Spearheaded a multi-cloud migration across Azure and AWS — delivered a 30% improvement in operational efficiency without service disruption.",
      "Deployed automated threat detection pipelines using Azure Sentinel, cutting Mean Time to Remediate (MTTR) by 50%.",
      "Enforced Zero Trust architecture through IAM role optimization and network segmentation — achieved 100% audit compliance.",
      "Hardened Kubernetes clusters via network policies, HashiCorp Vault secrets management, and automated container image scanning.",
    ],
  },
  {
    title: "High-Availability Cloud Infrastructure for 10,000+ Concurrent Users",
    context: "Confidential · Cloud Engineering",
    period: "Nov 2024 – Jul 2025",
    type: "Remote",
    outcomes: [
      "Architected highly available cloud infrastructure sustaining 10,000+ concurrent users at 99.99% uptime — no incidents, no surprises.",
      "Built modular, reusable Terraform stacks that cut infrastructure provisioning time by 75% (2 hours → 30 minutes).",
      "Eliminated $15,000 in annual cloud spend through instance right-sizing and strategic spot instance utilization.",
      "Designed and validated multi-region Disaster Recovery strategies achieving RTO under 1 hour.",
    ],
  },
  {
    title: "Full-Stack Platform Serving 10,000+ Users",
    context: "Digital Perception · Full Stack Engineering",
    period: "Feb 2022 – Sep 2024",
    type: "On Site",
    outcomes: [
      "Built and maintained full-stack web applications serving 10,000+ users on the MEVN stack (MongoDB, Express, Vue.js, Node.js).",
      "Designed RESTful APIs for real-time data processing — measurably improved application responsiveness and user experience.",
      "Delivered dynamic, responsive frontends with Vue.js and React.js, increasing user engagement and accessibility.",
      "Led migration from monolithic to microservices architecture, improving system performance by 20%.",
    ],
  },
];

import useFadeIn from '../hooks/useFadeIn';

const Experience = () => {
  const ref = useFadeIn();
  return (
    <section id="solutions" className="py-24 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Solutions Delivered</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Real engagements. Measurable outcomes. Every result backed by hands-on execution.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:left-1/2"></div>

          <div className="space-y-10">
            {solutions.map((sol, i) => (
              <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow -translate-x-1.5 mt-6"></div>

                <div className="hidden md:block md:w-1/2"></div>

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{sol.title}</h3>
                    <span className="text-xs text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full shrink-0">{sol.type}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{sol.context}</p>
                  {sol.period && <p className="text-xs text-gray-400 mb-4 font-medium">{sol.period}</p>}
                  <ul className="space-y-2">
                    {sol.outcomes.map((outcome, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                        <span>{outcome}</span>
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
