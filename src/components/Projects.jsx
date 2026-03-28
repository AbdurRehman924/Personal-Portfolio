import { useState } from 'react';

const problems = [
  {
    problem: "NLB stuck at <pending>",
    solution: "No CCM installed — Kubernetes had no way to call AWS APIs. Installed AWS Cloud Controller Manager and added --cloud-provider=external to all control plane components.",
  },
  {
    problem: "Calico IPIP traffic silently dropped",
    solution: "AWS Security Groups were missing protocol 4 (IPIP) rules. Calico uses IP-in-IP encapsulation for cross-subnet pod traffic — added explicit IPIP rules to both node security groups.",
  },
  {
    problem: "mTLS STRICT mode blocking NGINX ingress",
    solution: "NGINX ingress has no Istio sidecar, so STRICT mode rejected its connections. Switched hipster-shop namespace PeerAuthentication to PERMISSIVE to allow non-mesh traffic.",
  },
  {
    problem: "Istio sidecars couldn't reach istiod",
    solution: "default-deny NetworkPolicy was blocking egress to istio-system and DNS (port 53). Added explicit allow rules for both to restore sidecar-to-control-plane communication.",
  },
];

const techStack = [
  "Kubernetes (kubeadm, self-managed)",
  "AWS EC2 · VPC · NLB · EBS",
  "Terraform",
  "Calico CNI",
  "Istio 1.23.4 + mTLS",
  "Prometheus + Grafana",
  "Loki + Promtail",
  "Jaeger (distributed tracing)",
  "ArgoCD (GitOps)",
  "Falco + Trivy",
  "HPA + VPA",
  "cert-manager",
  "Velero (Backup & DR)",
];

const phases = [
  { name: "AWS Infrastructure", done: true },
  { name: "Cluster Bootstrap", done: true },
  { name: "Microservices Deployment", done: true },
  { name: "Ingress & External Access", done: true },
  { name: "Monitoring & Alerting", done: true },
  { name: "Security & Compliance", done: true },
  { name: "Centralized Logging", done: true },
  { name: "Autoscaling", done: true },
  { name: "GitOps (ArgoCD)", done: true },
  { name: "Service Mesh (Istio)", done: true },
  { name: "Distributed Tracing", done: true },
  { name: "Backup & DR (Velero)", done: false },
];

import useFadeIn from '../hooks/useFadeIn';

const Projects = () => {
  const [expandedProblem, setExpandedProblem] = useState(null);
  const ref = useFadeIn();

  return (
    <section id="projects" className="py-24 bg-white">
      <div ref={ref} className="max-w-5xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Project</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        {/* Header Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">
                Infrastructure · DevSecOps · Platform Engineering
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Production-Grade Kubernetes Platform on AWS
              </h3>
              <p className="text-gray-500 text-sm">Self-Managed · 6-Node HA Cluster · Built from Scratch</p>
            </div>
            <a
              href="https://github.com/AbdurRehman924/self-managed-k8s-aws"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Everything in my skills section is backed by real, hands-on work — built, broken, debugged, and shipped in this single production-grade project.
            Full lifecycle: infrastructure provisioning with Terraform, cluster bootstrapping with kubeadm,
            deploying 12 microservices, and layering on a full observability, security, GitOps, and service mesh stack.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { value: "6", label: "EC2 Nodes (HA)" },
            { value: "12", label: "Microservices" },
            { value: "43", label: "AWS Resources" },
            { value: "11/12", label: "Phases Complete" },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Tech Stack */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="bg-white text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Phase Progress */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Build Phases</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {phases.map((phase, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className={phase.done ? "text-green-500 font-bold" : "text-gray-300"}>
                    {phase.done ? "✓" : "○"}
                  </span>
                  <span className={phase.done ? "text-gray-700" : "text-gray-400"}>{phase.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problems Solved */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-1 pb-2 border-b border-gray-200">
            Hard Problems Solved
          </h4>
          <p className="text-xs text-gray-400 mb-4">Real production-level issues debugged and resolved</p>
          <div className="space-y-2">
            {problems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedProblem(expandedProblem === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-red-400 text-sm font-bold">✗</span>
                    <span className="font-medium text-gray-800 text-sm">{item.problem}</span>
                  </div>
                  <span className="text-gray-400 text-xs ml-4 shrink-0">{expandedProblem === i ? "▲" : "▼"}</span>
                </button>
                {expandedProblem === i && (
                  <div className="px-4 pb-4 flex items-start gap-3 border-t border-gray-100 pt-3">
                    <span className="text-green-500 font-bold text-sm shrink-0">✓</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
