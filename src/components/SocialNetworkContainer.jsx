import { FaLinkedinIn, FaGithub, FaInstagram, FaWheelchair } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/matheusm22"},
  { name: "github", icon: <FaGithub />, link: "https://github.com/matheusm22"},
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/matheusmm22/" },
  {  name: "pcd", icon: <FaWheelchair />, title: "PCD" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
