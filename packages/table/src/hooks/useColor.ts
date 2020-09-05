import colorString from 'color-string';
import { score, hex } from 'wcag-contrast';
import { useState, useEffect } from 'react';
import { useThemeUI } from 'theme-ui';
import {
  Generator as ColorGenerator,
  Generator
} from 'contrast-color-generator';

export default function useColor(props: any): string {
  const { theme } = useThemeUI();
  const [color, setColor] = useState(props.color as string);

  useEffect(() => {
    setColor(
      autoContrast(
        typeof props.backgroundColor !== 'undefined'
          ? theme.colors?.[props.backgroundColor as string] ||
              (props.backgroundColor as any)
          : null,
        (theme.colors?.inverseText || theme.colors?.text) as string,
        typeof props.autoContrast === 'undefined'
          ? ((theme as unknown) as any).autoContrast
          : props.autoContrast
      )
    );
  }, [props]);

  return color;
}

export function contrast(
  color: string,
  minimumRatio = 21,
  hue = 180,
  brighterFirst = true
): string {
  const generator = new ColorGenerator(hue, {
    minimumRatio,
    searchPrior: brighterFirst
      ? Generator.BRIGHTER_FIRST
      : Generator.DARKER_FIRST
  });
  return generator.generate(toHex(color)).hexStr;
}

export function autoContrast(
  color: string | null,
  originalColor: string,
  level: boolean | 'A' | 'AA' | 'AAA' = false,
  minimumRatio = 10,
  hue?: number,
  brighterFirst?: boolean
): string {
  if (!level || !color) return originalColor;
  const scoreResult = score(hex(toHex(color), toHex(originalColor)));
  if (
    scoreResult !== 'Fail' &&
    scoreResult.length > (level === true ? 2 : level.length)
  ) {
    return originalColor;
  }
  try {
    return contrast(color, minimumRatio, hue, brighterFirst);
  } catch (err) {
    if (err.message === 'No color exist which satisfies a requirement.') {
      if (!minimumRatio) return originalColor;
      return autoContrast(
        color,
        originalColor,
        level,
        minimumRatio - 1,
        hue,
        brighterFirst
      );
    }
    throw err;
  }
}

export function toHex(color: string): string {
  return colorString.to
    .hex(colorString.get(color)?.value || [0, 0, 0])
    .substr(0, 7);
}