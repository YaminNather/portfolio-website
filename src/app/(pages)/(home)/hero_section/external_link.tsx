import { ReactNode } from "react";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

export class ExternalLink {
  constructor(readonly name: string, readonly url: string, readonly icon: (className?: string) => ReactNode) { }

  static readonly github = new ExternalLink('Github', "https://github.com/YaminNather", (className) => <FaGithub key="github" className={className} />);
  static readonly linkedin = new ExternalLink('Linkedin', "https://linkedin.com/in/yamin-nather", (className) => <FaLinkedin key="linkedin" className={className} />);
  // static readonly resume = new ExternalLink('Resume', "https://drive.google.com/file/d/1gGUfZHk6l5KNV51tEPDkKcScq5UwC2ow/view?usp=sharing", (className) => <FaFileAlt key="resume" className={className} />);
  
  static readonly values: ExternalLink[] = [
    ExternalLink.github, 
    ExternalLink.linkedin,
    // ExternalLink.resume,
  ];
}
