const Skills = () => {
  const skills = [
    'Microsoft Azure', 'AWS', 'Google Cloud Platform',
    'DevOps', 'Infrastructure as Code', 'JavaScript',
    'MEVN Stack', 'Serverless Architecture', 'Hybrid Environments'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <span className="text-gray-800 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
