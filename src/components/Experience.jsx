const solutions = [
  {
    title: "Production-Grade Kubernetes Platform on AWS",
    context: "Self-Directed · Infrastructure & Platform Engineering",
    period: "",
    type: "Case Study",
    outcomes: [
      "6-node HA cluster on raw EC2 — kubeadm, Terraform, Calico CNI, AWS CCM. Zero managed services.",
      "12 microservices running with full observability: Prometheus, Grafana, Loki, Jaeger. Zero blind spots.",
      "mTLS STRICT via Istio — all service-to-service traffic encrypted, no exceptions.",
      "ArgoCD GitOps across 7 apps — auto-sync, self-heal, human error removed from the deploy loop.",
      "Falco, Trivy, network policies, cert-manager — production security posture from day one.",
    ],
  },
  {
    title: "Multi-Cloud Migration & Zero Trust Overhaul",
    context: "FinTech / SaaS · DevSecOps Engineering",
    period: "Jul 2025 – Present",
    type: "Remote",
    outcomes: [
      "30% improvement in operational efficiency — multi-cloud migration across Azure and AWS, zero downtime.",
      "MTTR cut by 50% — automated threat detection pipelines via Azure Sentinel.",
      "100% audit compliance — Zero Trust enforced through IAM hardening and network segmentation.",
      "Kubernetes clusters hardened: network policies, HashiCorp Vault, automated image scanning.",
    ],
  },
  {
    title: "HA Cloud Infrastructure for 10,000+ Concurrent Users",
    context: "Confidential · Cloud Engineering",
    period: "Nov 2024 – Jul 2025",
    type: "Remote",
    outcomes: [
      "99.99% uptime — HA infrastructure sustaining 10,000+ concurrent users, no incidents.",
      "Provisioning time cut 75% (2 hrs → 30 min) — modular, reusable Terraform stacks.",
      "$15,000 annual cloud spend eliminated — instance right-sizing and spot instance strategy.",
      "RTO under 1 hour — multi-region DR strategy designed and validated.",
    ],
  },
  {
    title: "Full-Stack Platform · 10,000+ Users",
    context: "Digital Perception · Full Stack Engineering",
    period: "Feb 2022 – Sep 2024",
    type: "On Site",
    outcomes: [
      "MEVN stack (MongoDB, Express, Vue.js, Node.js) — 10,000+ active users in production.",
      "RESTful APIs for real-time data processing — measurable improvement in response times and UX.",
      "Monolith → microservices migration — 20% system performance improvement.",
      "Responsive frontends in Vue.js and React.js — improved engagement and accessibility.",
    ],
  },
];

import useFadeIn from '../hooks/useFadeIn';

const Experience = () => {
  const ref = useFadeIn();
  return (
    <section id="highlights-&-journey" className="py-24 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Highlights & Journey</h2>
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
