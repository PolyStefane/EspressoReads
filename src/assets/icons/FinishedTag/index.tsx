import { SVGProps } from "react";
export const FinishedTagSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" {...props}>
    <path
      viewBox="0 0 20 20"
      fill="#54AA2C"
      fillRule="evenodd"
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.536-13.536A1 1 0 1 1 14.95 7.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95v-.001Z"
      clipRule="evenodd"
    />
  </svg>
);
