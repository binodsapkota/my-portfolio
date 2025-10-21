const Skills = () => {
  const skillCategories = [
    {
      category: "Backend & .NET",
      icon: "⚙️",
      color: "#667eea",
      skills: [
        { name: "C#", level: 95, icon: "🔷" },
        { name: "ASP.NET Core", level: 90, icon: "🌐" },
        { name: "Web API", level: 90, icon: "🔌" },
      ],
    },
    {
      category: "Frontend & UI",
      icon: "🎨",
      color: "#64ffda",
      skills: [
        { name: "ReactJS", level: 85, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "📜" },
        { name: "HTML/CSS", level: 85, icon: "🌍" },
      ],
    },
    {
      category: "Database & DevOps",
      icon: "🗄️",
      color: "#ff6b6b",
      skills: [
        { name: "SQL Server", level: 90, icon: "💾" },
        { name: "Git", level: 90, icon: "📝" },
        { name: "Azure DevOps", level: 85, icon: "☁️" },
      ],
    },
    {
      category: "Leadership & Cloud",
      icon: "🚀",
      color: "#feca57",
      skills: [
        { name: "Team Leadership", level: 90, icon: "👥" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Solution Architecture", level: 90, icon: "🏗️" },
      ],
    },
  ];

  const additionalSkills = [
    { name: "KYC Integrations", category: "Security" },
    { name: "Futronic Scanners", category: "Hardware" },
    { name: "Evolis Signature Pads", category: "Hardware" },
    { name: "Webcam Verification", category: "Security" },
    { name: "Fintech Solutions", category: "Domain" },
    { name: "Healthcare Systems", category: "Domain" },
    { name: "Manufacturing Apps", category: "Domain" },
    { name: "Stored Procedures", category: "Database" },
    { name: "Query Optimization", category: "Database" },
    { name: "Security Standards", category: "Security" },
    { name: "Code Reviews", category: "Leadership" },
    { name: "Mentorship", category: "Leadership" },
    { name: "Jira", category: "Tools" },
    { name: "Cloud-Native", category: "Architecture" },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Security: "#ff6b6b",
      Hardware: "#667eea",
      Domain: "#64ffda",
      Database: "#feca57",
      Leadership: "#ff9ff3",
      Tools: "#54a0ff",
      Architecture: "#5f27cd",
    };
    return colors[category] || "#667eea";
  };

  return (
    <section id="skills" className="skills-section py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12 animate-fade-in">
          <h2 className="section-title text-3xl font-bold text-gray-900">Skills & Technologies</h2>
          <div className="section-divider w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto my-4 rounded animate-scale-in"></div>
          <p className="section-description text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="skills-grid flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category-card bg-white rounded-xl p-4 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${0.2 * categoryIndex}s`, "--category-color": category.color }}
            >
              <div className="category-header flex items-center gap-3 mb-4 pb-2 border-b-2 border-[var(--category-color)]">
                <div className="category-icon text-2xl w-10 h-10 flex items-center justify-center bg-[var(--category-color)] text-white rounded-lg">
                  {category.icon}
                </div>
                <h3 className="category-title text-lg font-semibold text-gray-800">{category.category}</h3>
              </div>

              <div className="skills-list flex flex-col gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item bg-gray-50 rounded-lg p-3 transition-all duration-300">
                    <div className="skill-header flex justify-between items-center mb-2">
                      <div className="skill-info flex items-center gap-2">
                        <span className="skill-icon text-lg">{skill.icon}</span>
                        <span className="skill-name text-sm font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="skill-level text-xs font-semibold text-white bg-[var(--category-color)] px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-container relative">
                      <div className="skill-bar h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="skill-progress h-full rounded-full animate-progress"
                          style={{ width: `${skill.level}%`, backgroundColor: category.color }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills-section mt-12 pt-8 border-t border-gray-200">
          <div className="section-header text-center mb-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900">Additional Expertise & Specializations</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Domain knowledge and specialized skills across various industries
            </p>
          </div>

          <div className="skills-categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(
              additionalSkills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill.name);
                return acc;
              }, {})
            ).map(([category, skills], index) => (
              <div
                key={category}
                className="expertise-category bg-white rounded-xl p-4 shadow-md border border-gray-100 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <h4
                  className="expertise-title text-sm font-semibold text-center mb-3"
                  style={{ color: getCategoryColor(category) }}
                >
                  {category}
                </h4>
                <div className="expertise-tags flex flex-wrap gap-2 justify-center">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="expertise-tag text-xs font-medium px-3 py-1 rounded-full border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      style={{
                        backgroundColor: `${getCategoryColor(category)}20`,
                        borderColor: getCategoryColor(category),
                        color: getCategoryColor(category),
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;