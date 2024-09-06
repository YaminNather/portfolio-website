import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export function ProjectCard(props: Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "href" | "children">) {
  return (
    <a {...props} href="/" className="flex bg-neutral-800 hover:border border-neutral-500 rounded-md p-4 items-center">
      <div className="flex-shrink-0 size-16 bg-neutral-700 rounded-md" />
      
      <div className="ms-4">
        <p className="text-white">Currencee</p>
        
        <p className="mt-1">The world's most trusted, fast and secure currency converter</p>
      </div>
    </a>
  );
}