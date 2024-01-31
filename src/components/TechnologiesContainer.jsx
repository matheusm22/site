import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import { SiPhp } from "react-icons/si";

import { FaLaravel } from "react-icons/fa6";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "php", name: "PHP", icon: <SiPhp /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "laravel", name: "Laravel", icon: <FaLaravel /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
               <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
