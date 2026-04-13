import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// New pyramid: exactly 10>8>6>4>2 as requested - using project images + devicons
const techStack: TechItem[][] = [
  // Row 1 - 10 items
  [
    { name: "Python", icon: "/images/Python.png.png", url: "https://python.org" },
    { name: "JavaScript", icon: "/images/JavaScript.png.png", url: "https://javascript.com" },
    { name: "C++", icon: "/images/C++ (CPlusPlus).png.png", url: "https://cplusplus.com" },
    { name: "HTML5", icon: "/images/HTML5.png.png", url: "https://html5.org" },
    { name: "CSS3", icon: "/images/CSS3.png.png", url: "https://css3.org" },
    { name: "Tailwind CSS", icon: "/images/Tailwind CSS.png.png", url: "https://tailwindcss.com" },
    { name: "NumPy", icon: "/images/NumPy.png.png", url: "https://numpy.org" },
    { name: "Pandas", icon: "/images/Pandas.png.png", url: "https://pandas.pydata.org" },
    { name: "Jupyter", icon: "/images/Jupyter.png.png", url: "https://jupyter.org" },
    { name: "MySQL", icon: "/images/MySQL.png.png", url: "https://mysql.com" },
  ],
  // Row 2 - 8 items
  [
    { name: "Flask", icon: "/images/Flask.png.png", url: "https://flask.palletsprojects.com/" },
    { name: "FastAPI", icon: "/images/FastAPI.png.png", url: "https://fastapi.tiangolo.com/" },
    { name: "MongoDB", icon: "/images/MongoDB.png.png", url: "https://mongodb.com" },
    { name: "Oracle", icon: "/images/Oracle.png.png", url: "https://oracle.com" },
    { name: "AWS", icon: "/images/AWS.png.png", url: "https://aws.amazon.com" },
    { name: "Salesforce", icon: "/images/Salesforce.png.png", url: "https://salesforce.com" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
  ],
  // Row 3 - 6 items
  [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", url: "https://netlify.com" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg", url: "https://jetbrains.com/pycharm" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", url: "https://djangoproject.com" },
  ],
  // Row 4 - 4 items (skills)
  [
    { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png", url: "https://scikit-learn.org" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
  ],
  // Row 5 - 2 items (end peak)
  [
    { name: "Flask", icon: "/images/Flask.png.png", url: "https://flask.palletsprojects.com/" },
    { name: "FastAPI", icon: "/images/FastAPI.png.png", url: "https://fastapi.tiangolo.com/" },
  ],
];

const TechStackPyramid = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackPyramid;
