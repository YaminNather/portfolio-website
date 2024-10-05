import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { commonStyle } from "./common_style";

export function TextArea(props: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  return <textarea {...props} className={`${commonStyle} ${props.className}`} />;
}