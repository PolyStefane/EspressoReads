import { SVGProps } from "react";
export const MissingImageSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 14 14" width={20} height={20} fill="none" {...props}>
    <path
      fill="#000"
      d="M14 .707 13.293 0 0 13.293.707 14l1-1H12a1.002 1.002 0 0 0 1-1V1.707l1-1ZM12 12H2.707l3.897-3.896 1.189 1.189a1 1 0 0 0 1.414 0L10 8.5l2 1.998V12Zm0-2.916-1.293-1.293a1 1 0 0 0-1.414 0l-.793.793-1.189-1.188L12 2.707v6.377ZM2 10V8.5l2.5-2.498.686.687.708-.708-.687-.688a1 1 0 0 0-1.414 0L2 7.086V2h8V1H2a1 1 0 0 0-1 1v8h1Z"
    />
  </svg>
);
