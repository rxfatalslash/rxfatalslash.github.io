import pmapImage from "../img/pmap.png";
import pythonC2Image from "../img/pythonc2.png";
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
    title: "Python C2 Lab",
    category: "Adversary Simulation",
    description:
      "A local only educational lab exploring authenticated client-server communication, protocol design and defensive detection opportunities.",
    image: pythonC2Image,
    technologies: ["Python", "TCP/IP", "HMAC-SHA256"],
    repository: "https://github.com/rxfatalslash/pythonC2",
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