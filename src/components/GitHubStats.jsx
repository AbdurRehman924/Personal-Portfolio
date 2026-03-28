import useFadeIn from '../hooks/useFadeIn';

const GitHubStats = () => {
  const ref = useFadeIn();
  const username = 'AbdurRehman924';
  const params = 'theme=default&hide_border=true&bg_color=f9fafb&title_color=1d4ed8&icon_color=1d4ed8&text_color=374151';

  return (
    <section id="github" className="py-24 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">GitHub Activity</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500">
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              @{username}
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&${params}`}
            alt="GitHub Stats"
            className="rounded-xl border border-gray-100 shadow-sm w-full md:w-auto"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&${params}`}
            alt="Top Languages"
            className="rounded-xl border border-gray-100 shadow-sm w-full md:w-auto"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=f9fafb&ring=1d4ed8&fire=1d4ed8&currStreakLabel=1d4ed8&sideLabels=374151&dates=374151&sideNums=374151&currStreakNum=374151`}
            alt="GitHub Streak"
            className="rounded-xl border border-gray-100 shadow-sm w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
