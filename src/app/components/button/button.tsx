import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export function Button(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button 
      {...props} 
      className={`min-w-24 min-h-8 rounded-md ms-2 bg-neutral-800 bg-opacity-70 hover:outline outline-neutral-500 flex justify-center items-center ${props.className}`} 
    />
  );
}