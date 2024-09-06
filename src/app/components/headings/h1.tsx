import { DetailedHTMLProps, HTMLAttributes } from "react";

export function H1(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return <h1 {...props} className={`font-mono text-5xl font-bold text-white ${props.className}`} />;
}