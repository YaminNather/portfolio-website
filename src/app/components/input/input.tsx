import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { commonStyle } from "./common_style";

export function Input(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return <input {...props} className={`${commonStyle} ${props.className}`} />;
}