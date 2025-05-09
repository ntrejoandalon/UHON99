import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/UHON99/img/svg/${src}`} alt={src} width={width} height={height} />
);
