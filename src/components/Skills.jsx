const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS (EC2, VPC, IAM, NLB, EBS, CloudWatch)", "Microsoft Azure", "Google Cloud Platform"],
  },
  {
    title: "Kubernetes & Containers",
    skills: ["Kubernetes (self-managed, kubeadm)", "Docker", "Calico CNI", "Helm", "HPA · VPA · Cluster Autoscaler", "cert-manager"],
  },
  {
    title: "Service Mesh & Observability",
    skills: ["Istio (mTLS, VirtualServices)", "Prometheus + Grafana", "Loki + Promtail", "Jaeger (distributed tracing)", "Alertmanager"],
  },
  {
    title: "Security & DevSecOps",
    skills: ["Falco (runtime threat detection)", "Trivy (vulnerability scanning)", "Sealed Secrets", "Zero Trust · IAM Hardening", "Network Policies", "OPA (Policy-as-Code)"],
  },
  {
    title: "Infrastructure & IaC",
    skills: ["Terraform (Modules, Multi-Cloud, Remote State)", "Ansible", "Shell Scripting", "AWS CodePipeline · CodeBuild"],
  },
  {
    title: "CI/CD & GitOps",
    skills: ["GitHub Actions", "ArgoCD (GitOps, auto-sync, self-heal)", "Docker Hub · ECR · ACR", "Canary · Blue/Green · Rolling Deployments"],
  },
  {
    title: "Networking",
    skills: ["VPC Design (subnets, NAT, peering)", "NLB · ALB (L4/L7)", "CoreDNS · Calico IPIP", "CloudFront CDN · WAF · Route 53"],
  },
  {
    title: "Programming",
    skills: ["Python", "Node.js · Express.js", "JavaScript ES6+", "React.js · Vue.js", "RESTful APIs", "MongoDB"],
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
