import React from "react";
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/curriculo.pdf"; // Substitua pelo caminho correto
    link.download = "curriculo.pdf";
    link.click();
  };

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Motta" />
      <p className="title">Desenvolvedor back-end</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <button className="btn" onClick={handleDownload}>
        Download currículo
      </button>
    </aside>
  );
};

export default Sidebar;
