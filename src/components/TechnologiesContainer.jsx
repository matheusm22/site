import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import { SiPhp } from "react-icons/si";


import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text:"Dei meus primeiro passos no começo de 2022, pouco depois de estudar JavaScript o que eu acredito ser um pouco diferente depois de saber que essa é basicamente a porta de entrada da web." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text:"ótima linguagem back-end, o nodemon, express ajudam demais no desenvolvimento, O crescimento dele principalmente na web faz todo sentido só pelo fato dele conseguir interpretar js e tornar o back-end mais simples de ser codificado." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, text:"Comecei a programar em livro antigo sobre JavaScript, e cada dia me supreende mais como ela poderosa se tratando de front-end." },
  { id: "php", name: "PHP", icon: <SiPhp />, text:"Minha linguagem de programação favorita, a maioria dos sistemas e projetos que faço procuro um jeito de utilizar ela, nem que seja uma linha..." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, text:"Tudo que aprendi sobre MySql foi desenvolvendo sistemas com a mão na massa, comecei meu curso e meus estudos de SQL por conta dos problemas que enfrentava com telas de login e formulários." },
  { id: "react", name: "React", icon: <DiReact />, text:"Inicie meus estudos a pouco tempo e estou gostando, apresenta um bom comportamento para front-end e tem a vantagem de utiliar o node.js como back-end. " },
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
