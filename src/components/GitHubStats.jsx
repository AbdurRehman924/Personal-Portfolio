import useFadeIn from '../hooks/useFadeIn';

const username = 'AbdurRehman924';

const statBadges = [
  {
    label: 'GitHub followers',
    src: `https://img.shields.io/github/followers/${username}?style=flat&logo=github&labelColor=f3f4f6&color=1d4ed8&label=Followers`,
  },
  {
    label: 'Stars',
    src: `https://img.shields.io/github/stars/${username}?style=flat&logo=github&labelColor=f3f4f6&color=1d4ed8&label=Stars`,
    query: '?affiliations=OWNER%2CCOLLABORATOR',
  },
];

const pinnedRepos = [
  {
    name: 'self-managed-k8s-aws',
    description: 'Production-grade self-managed Kubernetes platform on AWS EC2. Terraform, kubeadm, Istio, ArgoCD, Prometheus, Loki, Jaeger, Falco.',
    url: 'https://github.com/AbdurRehman924/self-managed-k8s-aws',
    language: 'HCL / Shell',
    topics: ['kubernetes', 'terraform', 'aws', 'devsecops'],
  },
  {
    name: 'Personal-Portfolio',
    description: 'This portfolio — built with React and Tailwind CSS, deployed to GitHub Pages via GitHub Actions.',
    url: 'https://github.com/AbdurRehman924/Personal-Portfolio',
    language: 'JavaScript',
    topics: ['react', 'tailwindcss', 'github-pages'],
  },
];

const GitHubStats = () => {
  const ref = useFadeIn();

  return (
    <section id="github" className="py-24 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">GitHub</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4"></div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            @{username}
          </a>
        </div>

        {/* Contribution graph */}
        <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <img
            src={`https://ghchart.rshah.org/1d4ed8/${username}`}
            alt="GitHub contribution graph"
            className="w-full"
          />
        </div>

        {/* Pinned repos */}
        <div className="grid md:grid-cols-2 gap-4">
          {pinnedRepos.map((repo, i) => (
            <a
              key={i}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                  {repo.name}
                </span>
                <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{repo.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{repo.language}</span>
                <div className="flex gap-1 flex-wrap justify-end">
                  {repo.topics.map((t, j) => (
                    <span key={j} className="text-xs bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
