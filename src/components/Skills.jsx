const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS (EC2, VPC, IAM, NLB, EBS, CloudWatch)", "Google Cloud Platform (GKE, Cloud Run, IAM)", "Microsoft Azure (Compute, Networking, IAM)", "Cloud-Native Architecture & HA Design"],
  },
  {
    title: "Kubernetes & Containers",
    skills: ["Kubernetes (self-managed, kubeadm)", "Docker & Containerization", "Calico CNI", "Ingress, RBAC, Network Policies", "HPA, VPA, Cluster Autoscaler", "cert-manager", "CoreDNS"],
  },
  {
    title: "Service Mesh & Observability",
    skills: ["Istio (mTLS, VirtualServices, PeerAuthentication)", "Prometheus + Grafana", "Loki + Promtail (centralized logging)", "Jaeger (distributed tracing)", "Alertmanager"],
  },
  {
    title: "Security & DevSecOps",
    skills: ["Falco (runtime threat detection)", "Trivy (vulnerability scanning)", "IAM Hardening & Zero-Trust", "Secrets Management (KMS, TLS)", "Network Segmentation", "Security Compliance & Auditing"],
  },
  {
    title: "Networking & DNS",
    skills: ["VPC Design (subnets, route tables, NAT, peering)", "Load Balancing (L4/L7, NLB/ALB)", "Kubernetes Networking (CoreDNS, CNI, Network Policies)", "DNS management & resolution", "IP-in-IP / overlay networking (Calico IPIP)"],
  },
  {
    title: "Storage & Data",
    skills: ["Persistent Volumes & Storage Classes", "EBS CSI Driver", "Velero (Backup & Disaster Recovery)", "Volume snapshots & restore", "Stateful workload management"],
  },
  {
    title: "CI/CD & Release Engineering",
    skills: ["GitHub Actions (pipeline design)", "Container image build & registry (ECR, Docker Hub)", "Rolling deployments, blue/green, canary", "Automated vulnerability scanning in pipelines", "GitOps-driven continuous delivery (ArgoCD)"],
  },
  {
    title: "Reliability & FinOps",
    skills: ["Chaos Mesh (chaos engineering)", "SLO/SLI concepts & reliability planning", "Kubecost (cost monitoring & optimization)", "Resource requests/limits tuning", "Spot/preemptible instance strategies"],
  },
  {
    title: "Infrastructure & IaC",
    skills: ["Terraform (Modules, Multi-Cloud, State)", "Shell Scripting & Automation", "Cluster bootstrapping (kubeadm)", "Infrastructure lifecycle management"],
  },
  {
    title: "Programming & Backend",
    skills: ["Node.js & Express.js", "Python", "JavaScript ES6+", "RESTful API Development", "React.js & Vue.js", "MongoDB"],
  },
];

import useFadeIn from '../hooks/useFadeIn';

const Skills = () => {
  const ref = useFadeIn();
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div ref={ref} className="max-w-6xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Technical Skills</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Hands-on experience across the full cloud-native stack — from infrastructure provisioning to runtime security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
