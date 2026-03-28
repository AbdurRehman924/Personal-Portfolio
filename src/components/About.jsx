import useFadeIn from '../hooks/useFadeIn';

const About = () => {
  const ref = useFadeIn();
  const highlights = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Cloud Technologies' },
    { value: '3', label: 'Cloud Providers' },
    { value: '1000+', label: 'Hours in K8s' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div ref={ref} className="max-w-5xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">About Me</h2>
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
            I'm a <span className="font-semibold text-gray-900">DevSecOps-focused Cloud Engineer</span> with hands-on experience building, securing, and scaling cloud environments across AWS, GCP, Azure, and hybrid infrastructures. My work spans architecting cloud-native highly available systems, automating infrastructure with Terraform, and enforcing robust security standards end-to-end.
          </p>
          <p>
            Most recently, I built a <span className="font-semibold text-gray-900">production-grade self-managed Kubernetes platform on AWS from scratch</span> — provisioning infrastructure with Terraform, bootstrapping a 6-node HA cluster with kubeadm, deploying 12 microservices, and layering on Istio service mesh, ArgoCD GitOps, Prometheus/Grafana observability, Loki logging, Jaeger tracing, Falco runtime security, and autoscaling.
          </p>
          <p>
            Before going deep into cloud infrastructure, I spent two years as a <span className="font-semibold text-gray-900">full-stack JavaScript developer</span> (Node.js, Express, React, Vue, MongoDB) — which gives me a strong understanding of how modern applications run under the hood and what developers actually need from their infrastructure.
          </p>
          <p>
            I'm driven by solving hard infrastructure problems, building resilient systems, and automating everything that can be automated. I'm looking to join a high-impact team where <span className="font-semibold text-gray-900">cloud engineering, DevSecOps, and platform engineering</span> intersect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
