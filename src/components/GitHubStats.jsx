import useFadeIn from '../hooks/useFadeIn';

const username = 'AbdurRehman924';

const GitHubStats = () => {
  const ref = useFadeIn();

  return (
    <section id="github" className="py-24 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">GitHub</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            A snapshot of my coding activity on GitHub.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <img
            src={`https://ghchart.rshah.org/1d4ed8/${username}`}
            alt="GitHub contribution graph"
            className="w-full"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            @{username}
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
