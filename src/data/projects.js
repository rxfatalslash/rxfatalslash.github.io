import pmapImage from "../img/pmap.png";
import cyberToolsImage from "../img/cybertools.png";
import wireGuardImage from "../img/wgcl.png";
import archImage from "../img/archinstall.png";

export const projects = [
  {
    title: "pmap",
    category: "Featured project",
    description:
      "A lightweight TCP port scanner built in Python to explore socket programming, concurrent scanning and service discovery.",
    image: pmapImage,
    technologies: ["Python", "TCP/IP", "Sockets"],
    repository: "https://github.com/rxfatalslash/pmap",
    featured: true,
  },
  {
    title: "CyberTools",
    category: "Security toolkit",
    description:
      "A collection of utilities created to automate common cybersecurity and network analysis tasks.",
    image: cyberToolsImage,
    technologies: ["Python", "Automation", "Security"],
    repository: "https://github.com/rxfatalslash/CyberTools",
  },
  {
    title: "WireGuard CLI",
    category: "Networking tool",
    description:
      "A command line utility designed to simplify WireGuard configuration and connection management.",
    image: wireGuardImage,
    technologies: ["Networking", "WireGuard", "CLI"],
    repository: "https://github.com/rxfatalslash/wgcl",
  },
  {
    title: "Archinstall",
    category: "System automation",
    description:
      "An installation and configuration workflow that automates the setup of an Arch Linux environment.",
    image: archImage,
    technologies: ["Linux", "Bash", "Automation"],
    repository: "https://github.com/rxfatalslash/archinstall",
  },
];