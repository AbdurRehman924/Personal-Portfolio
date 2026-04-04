import useFadeIn from '../hooks/useFadeIn';

const About = () => {
  const ref = useFadeIn();
  const highlights = [
    { value: '43', label: 'AWS Resources Provisioned (single project)' },
    { value: '12', label: 'Microservices Shipped on Self-Managed K8s' },
    { value: '$15K', label: 'Annual Cloud Spend Eliminated' },
    { value: '75%', label: 'Faster Infrastructure Provisioning' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div ref={ref} className="max-w-5xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">About</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map((h, i) => (
            <div key={i} className="text-center p-5 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">{h.value}</div>
              <div className="text-xs text-gray-500 font-medium">{h.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 space-y-5 text-gray-700 leading-relaxed">
          <p>
            I'm a <span className="font-semibold text-gray-900">Cloud Infrastructure & DevSecOps Engineer</span> who architects, secures, and scales cloud environments across AWS, GCP, Azure, and hybrid infrastructures. I don't just configure tools — I own outcomes: uptime, security posture, deployment velocity, and cost efficiency.
          </p>
          <p>
            My most recent engagement: <span className="font-semibold text-gray-900">designed and delivered a production-grade self-managed Kubernetes platform on AWS from the ground up</span> — Terraform-provisioned infrastructure, a 6-node HA cluster bootstrapped with kubeadm, 12 microservices, Istio service mesh with mTLS, ArgoCD GitOps, full Prometheus/Grafana/Loki/Jaeger observability, Falco runtime security, and autoscaling. Zero managed services. Every layer built and hardened by hand.
          </p>
          <p>
            Before going deep into cloud infrastructure, I spent two years as a <span className="font-semibold text-gray-900">full-stack JavaScript engineer</span> (Node.js, Express, React, Vue, MongoDB) — which means I understand exactly what developers need from their infrastructure and where systems break under real load.
          </p>
          <p>
            I solve the hard problems: the ones that stump most engineers, cost companies real money, and require someone who has actually built these systems — not just read about them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
