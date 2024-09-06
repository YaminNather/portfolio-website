export class ExternalLink {
  constructor(readonly name: string, readonly url: string) { }

  static readonly github = new ExternalLink('Github', "https://github.com");
  static readonly linkedin = new ExternalLink('Linkedin', "https://linkedin.com");
  static readonly resume = new ExternalLink('Resume', "https://resume.com");
  
  static readonly values: ExternalLink[] = [
    ExternalLink.github, 
    ExternalLink.linkedin,
    ExternalLink.resume,
  ];
}