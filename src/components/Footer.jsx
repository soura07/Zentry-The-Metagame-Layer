import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  // { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://www.linkedin.com/in/souradeep07/", icon: <FaLinkedin /> },
  { href: "https://x.com/Souradeep_2003_", icon: <FaTwitter /> },
  // { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com/@Souradeep_geeky", icon: <FaMedium /> },

];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#170f61] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Souradeep 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
