import useFadeIn from '../hooks/useFadeIn';

const projects = [
  {
    tag: "Infrastructure · DevSecOps · Platform Engineering",
    title: "Production-Grade Kubernetes Platform on AWS",
    subtitle: "Self-Managed · 6-Node HA Cluster · Built from Scratch · Zero Managed Services",
    github: "https://github.com/AbdurRehman924/self-managed-k8s-aws",
    highlight: "Every skill listed on this page is backed by real, hands-on execution — built, broken, debugged, and shipped in this single production-grade platform.",
    description: "Full lifecycle ownership: infrastructure provisioning with Terraform, cluster bootstrapping with kubeadm, deploying 12 microservices, and layering on a complete observability, security, GitOps, and service mesh stack.",
    stats: [
      { value: "6", label: "EC2 Nodes (HA)" },
      { value: "12", label: "Microservices Shipped" },
      { value: "43", label: "AWS Resources Provisioned" },
      { value: "11 / 12", label: "Phases Complete · Ongoing" },
    ],
    techStack: [
      "Kubernetes (kubeadm, self-managed)", "AWS EC2 · VPC · NLB · EBS", "Terraform",
      "Calico CNI", "Istio 1.23.4 + mTLS", "Prometheus + Grafana",
      "Loki + Promtail", "Jaeger (distributed tracing)", "ArgoCD (GitOps)",
      "Falco + Trivy", "HPA + VPA", "cert-manager", "Velero (Backup & DR)",
    ],
    phases: [
      { name: "AWS Infrastructure", done: true }, { name: "Cluster Bootstrap", done: true },
      { name: "Microservices Deployment", done: true }, { name: "Ingress & External Access", done: true },
      { name: "Monitoring & Alerting", done: true }, { name: "Security & Compliance", done: true },
      { name: "Centralized Logging", done: true }, { name: "Autoscaling", done: true },
      { name: "GitOps (ArgoCD)", done: true }, { name: "Service Mesh (Istio)", done: true },
      { name: "Distributed Tracing", done: true }, { name: "Backup & DR (Velero)", done: false },
    ],
  },
  {
    tag: "Azure · DevOps · Policy-as-Code",
    title: "End-to-End Azure DevOps Pipeline with OPA Policy Enforcement",
    subtitle: "AKS · ACR · GitHub Actions · Ansible · Open Policy Agent",
    github: "https://github.com/AbdurRehman924/Portfolio-Devops",
    highlight: "Four parallel CI/CD pipelines — infrastructure, application, configuration management, and security scanning — all triggered from a single git push.",
    description: "Terraform provisions AKS, ACR, Key Vault, and VNet on Azure. OPA enforces policy-as-code (no public AKS, mandatory resource tags) before any resource is created. Ansible configures the bastion host. GitHub Actions orchestrates the entire workflow end-to-end.",
    stats: [
      { value: "4", label: "Parallel CI/CD Pipelines" },
      { value: "5", label: "Azure Services Provisioned" },
      { value: "3", label: "OPA Policy Rulesets" },
      { value: "0", label: "Manual Deployment Steps" },
    ],
    techStack: [
      "Azure AKS", "Azure ACR", "Azure Key Vault", "Terraform (Azure Provider)",
      "GitHub Actions", "Open Policy Agent (OPA)", "Ansible", "Docker · Nginx",
      "Kubernetes (Deployments, Services)", "React 18 · Tailwind CSS",
    ],
    phases: [
      { name: "Azure Infrastructure (Terraform)", done: true },
      { name: "OPA Policy Enforcement", done: true },
      { name: "Docker Multi-Stage Build", done: true },
      { name: "ACR Image Push", done: true },
      { name: "AKS Deployment", done: true },
      { name: "Ansible Bastion Config", done: true },
      { name: "Security Scanning Pipeline", done: true },
      { name: "Monitoring (Node Exporter)", done: true },
    ],
  },
  {
    tag: "Azure · GitOps · DevSecOps",
    title: "Multi-Environment GitOps Platform with Sealed Secrets",
    subtitle: "K3s on Azure · ArgoCD · Helm · Sealed Secrets · Dev/Staging/Prod",
    github: "https://github.com/AbdurRehman924/DevSecOps-Platform",
    highlight: "GitOps-native secret management with Sealed Secrets — encrypted secrets committed to Git, decrypted only inside the cluster. Zero plaintext credentials anywhere in the pipeline.",
    description: "Terraform provisions a K3s VM on Azure free tier. ArgoCD manages three environment overlays (dev/staging/prod) via Kustomize. GitHub Actions builds and scans Docker images with Trivy before pushing to Docker Hub. Helm chart packages the application for consistent deployments across environments.",
    stats: [
      { value: "3", label: "Environments (dev/staging/prod)" },
      { value: "K3s", label: "Lightweight Kubernetes on Azure" },
      { value: "ArgoCD", label: "GitOps Auto-Sync + Self-Heal" },
      { value: "0", label: "Plaintext Secrets in Git" },
    ],
    techStack: [
      "K3s (Azure VM)", "Terraform (Azure Provider)", "ArgoCD (GitOps)",
      "Sealed Secrets (Bitnami)", "Helm", "Kustomize (dev/staging/prod overlays)",
      "GitHub Actions", "Trivy (image scanning)", "Docker Hub", "Docker · Nginx",
    ],
    phases: [
      { name: "Azure K3s VM (Terraform)", done: true },
      { name: "ArgoCD Installation", done: true },
      { name: "Sealed Secrets Setup", done: true },
      { name: "Helm Chart (portfolio app)", done: true },
      { name: "Dev Overlay (Kustomize)", done: true },
      { name: "Staging Overlay", done: true },
      { name: "Prod Overlay", done: true },
      { name: "CI Pipeline (Trivy scan)", done: true },
    ],
  },
  {
    tag: "AWS · Enterprise Architecture · Terraform",
    title: "Netflix-Scale Enterprise AWS Infrastructure (\"CloudFlix\")",
    subtitle: "198 AWS Resources · 25+ Services · Full CI/CD · Global CDN",
    github: "https://github.com/AbdurRehman924/Enterprise-Setup-Terraform",
    highlight: "198 AWS resources across 16 Terraform files — the same architecture pattern used by Netflix, Spotify, and Uber, built and documented end-to-end.",
    description: "Simulates a high-traffic video streaming platform: CloudFront CDN → WAF → ALB → EC2 Auto Scaling + ECS Fargate → RDS Aurora + DynamoDB + ElastiCache. Full CI/CD via CodeCommit → CodeBuild → CodePipeline. Event-driven architecture with SQS/SNS. Includes cost monitoring, security scanning, and performance monitoring scripts.",
    stats: [
      { value: "198", label: "AWS Resources" },
      { value: "25+", label: "AWS Services" },
      { value: "16", label: "Terraform Files" },
      { value: "73", label: "Configurable Variables" },
    ],
    techStack: [
      "VPC (3 AZs)", "CloudFront CDN + WAF", "Route 53", "ALB",
      "EC2 Auto Scaling", "ECS Fargate", "Lambda + Lambda@Edge",
      "RDS Aurora", "DynamoDB", "ElastiCache Redis", "S3 + EFS",
      "CodeCommit · CodeBuild · CodePipeline · ECR",
      "CloudWatch · SNS · SQS · API Gateway", "IAM · Secrets Manager",
    ],
    phases: [
      { name: "VPC & Networking", done: true },
      { name: "Security & IAM", done: true },
      { name: "Compute (EC2 + ECS + Lambda)", done: true },
      { name: "Databases (RDS + DynamoDB + Redis)", done: true },
      { name: "Storage (S3 + EFS)", done: true },
      { name: "CDN + WAF + Route 53", done: true },
      { name: "CI/CD Pipeline", done: true },
      { name: "Monitoring & Alerting", done: true },
    ],
  },
];

const Projects = () => {
  const ref = useFadeIn();

  return (
    <section id="architectural-reference" className="py-24 bg-white">
      <div ref={ref} className="max-w-5xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Architectural Reference</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Production systems designed, built, and shipped. Each one a reference for how the work actually gets done.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.subtitle}</p>
                </div>
                <a
                  href={project.github}
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

              {/* Highlight */}
              <p className="text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 font-medium mb-3">
                {project.highlight}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">{project.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {project.stats.map((stat, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack + Phases */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Build Phases</h4>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {project.phases.map((phase, i) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
