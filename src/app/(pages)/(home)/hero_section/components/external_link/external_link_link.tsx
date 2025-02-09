import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface ExternalLinkProps {
  readonly icon: ReactNode;
  readonly name: string;
  readonly url: string;
  readonly style?: CSSProperties;
  readonly className?: string;
}

export function ExternalLinkLink(props: ExternalLinkProps) {
  return (
    <Link href={props.url} target="_blank" style={props.style} className={`group ${props.className}`}>
      <div className="inline-flex items-center">
        <span className="group-hover:text-white">{props.icon}</span>
        
        <span className="mx-2 text-white">{props.name}</span>
      </div>
      
      <hr className="border-b border-neutral-800 group-hover:border-white transition-all" />
    </Link>
  );
}
