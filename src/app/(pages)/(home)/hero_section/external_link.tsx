import { ReactNode } from "react";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export class ExternalLink {
  constructor(readonly name: string, readonly url: string, readonly icon: (className?: string) => ReactNode) { }

  static readonly github = new ExternalLink('Github', "https://github.com", (className) => <FaGithub key="github" className={className} />);
  static readonly linkedin = new ExternalLink('Linkedin', "https://linkedin.com", (className) => <FaLinkedin key="linkedin" className={className} />);
  static readonly resume = new ExternalLink('Resume', "https://resume.com", (className) => <FaFileAlt key="resume" className={className} />);
  
  static readonly values: ExternalLink[] = [
    ExternalLink.github, 
    ExternalLink.linkedin,
    ExternalLink.resume,
  ];
}
