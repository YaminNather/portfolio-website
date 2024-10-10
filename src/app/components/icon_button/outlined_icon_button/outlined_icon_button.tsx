import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface OutlinedIconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  readonly iconBuilder: (className: string) => ReactNode;
}

export function OutlinedIconButton(props: OutlinedIconButtonProps) {
  return (
    <button
      {...{ ...props, iconBuilder: undefined }} 
      className={`flex size-8 rounded-md bg-neutral-800 bg-opacity-70 hover:outline outline-neutral-500 p-1 justify-center items-center transition:all ${props.className}`}
    >
      {props.iconBuilder("size-full")}
    </button>
  );
}
