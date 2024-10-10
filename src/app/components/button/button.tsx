import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export function Button(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button 
      {...props} 
      className={`min-w-24 min-h-12 rounded-md bg-green-600 hover:outline outline-neutral-500 flex justify-center items-center text-white transition-all ${props.className}`} 
    />
  );
}
