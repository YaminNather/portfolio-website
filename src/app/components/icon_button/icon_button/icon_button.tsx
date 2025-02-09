/* eslint-disable */

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  iconBuilder: (className: string) => ReactNode;
}

export function IconButton(props: IconButtonProps) {
	const buttonProps: any = {...props};
	delete buttonProps.iconBuilder;

  return (
    <button
			{...buttonProps}
      className={`flex size-8 rounded-md bg-neutral-800 bg-opacity-70 hover:outline outline-neutral-500 p-1 justify-center items-center transition:all ${props.className}`}
    >
      {props.iconBuilder("size-full")}
    </button>
  );
}
