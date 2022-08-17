import { Theme, useDripsyTheme } from "dripsy";
import { ResponsiveStyleValue, StylePropertyValue } from "@theme-ui/css";

function getAbsoluteSize(
  theme: Theme,
  size?: StylePropertyValue<number | string>
) {
  let absoluteSize = size as string | number;
  if (typeof size === "function") {
    absoluteSize = (
      size as (theme: Theme) => ResponsiveStyleValue<string | number>
    )(theme) as string | number;
  }
  if (typeof absoluteSize === "string" && absoluteSize.length) {
    if (absoluteSize[absoluteSize.length - 1] === "%") {
      return absoluteSize;
    } else {
      const sizeNumber = parseInt(absoluteSize);
      return Number.isNaN(sizeNumber) ? sizeNumber : absoluteSize;
    }
  }
  return absoluteSize;
}

export function useCalculateSize(
  size?: StylePropertyValue<number | string>,
  orthogonalSize?: StylePropertyValue<number | string>,
  ratio = 16 / 9,
  sizeDimension = SizeDimension.Width
) {
  const theme = useDripsyTheme() as Theme;
  size = getAbsoluteSize(theme, size);
  if (size && (typeof size !== "number" || size > 0)) return size;
  orthogonalSize = getAbsoluteSize(theme, orthogonalSize);
  if (typeof orthogonalSize === "number" && orthogonalSize > 0) {
    return sizeDimension === SizeDimension.Width
      ? orthogonalSize * ratio
      : orthogonalSize / ratio;
  }
  return size;
}

export enum SizeDimension {
  Width,
  Height,
}
