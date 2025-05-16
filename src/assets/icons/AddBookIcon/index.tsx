import { SVGProps } from "react";

export const AddBookIconSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" width={18} height={18} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 17c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8ZM5.8 9h6.4M9 12.2V5.8"
    />
  </svg>
);
