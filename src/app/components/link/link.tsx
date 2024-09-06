import { AnchorHTMLAttributes } from "react";

export function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} className={`font-mono text-white hover:text-green-500 transition-colors ${props.className}`} />
  );
}