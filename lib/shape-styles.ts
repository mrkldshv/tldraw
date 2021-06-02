import { SVGProps } from 'react'
import { ColorStyle, DashStyle, Shape, ShapeStyles, SizeStyle } from 'types'

export const strokes: Record<ColorStyle, string> = {
  [ColorStyle.White]: 'rgba(248, 249, 250, 1.000)',
  [ColorStyle.LightGray]: 'rgba(224, 226, 230, 1.000)',
  [ColorStyle.Gray]: 'rgba(172, 181, 189, 1.000)',
  [ColorStyle.Black]: 'rgba(0,0,0, 1.000)',
  [ColorStyle.Lime]: 'rgba(115, 184, 23, 1.000)',
  [ColorStyle.Green]: 'rgba(54, 178, 77, 1.000)',
  [ColorStyle.Teal]: 'rgba(9, 167, 120, 1.000)',
  [ColorStyle.Cyan]: 'rgba(14, 152, 173, 1.000)',
  [ColorStyle.Blue]: 'rgba(28, 126, 214, 1.000)',
  [ColorStyle.Indigo]: 'rgba(66, 99, 235, 1.000)',
  [ColorStyle.Violet]: 'rgba(112, 72, 232, 1.000)',
  [ColorStyle.Grape]: 'rgba(174, 62, 200, 1.000)',
  [ColorStyle.Pink]: 'rgba(214, 51, 108, 1.000)',
  [ColorStyle.Red]: 'rgba(240, 63, 63, 1.000)',
  [ColorStyle.Orange]: 'rgba(247, 103, 6, 1.000)',
  [ColorStyle.Yellow]: 'rgba(245, 159, 0, 1.000)',
}

export const fills = {
  [ColorStyle.White]: 'rgba(224, 226, 230, 1.000)',
  [ColorStyle.LightGray]: 'rgba(255, 255, 255, 1.000)',
  [ColorStyle.Gray]: 'rgba(224, 226, 230, 1.000)',
  [ColorStyle.Black]: 'rgba(224, 226, 230, 1.000)',
  [ColorStyle.Lime]: 'rgba(243, 252, 227, 1.000)',
  [ColorStyle.Green]: 'rgba(235, 251, 238, 1.000)',
  [ColorStyle.Teal]: 'rgba(230, 252, 245, 1.000)',
  [ColorStyle.Cyan]: 'rgba(227, 250, 251, 1.000)',
  [ColorStyle.Blue]: 'rgba(231, 245, 255, 1.000)',
  [ColorStyle.Indigo]: 'rgba(237, 242, 255, 1.000)',
  [ColorStyle.Violet]: 'rgba(242, 240, 255, 1.000)',
  [ColorStyle.Grape]: 'rgba(249, 240, 252, 1.000)',
  [ColorStyle.Pink]: 'rgba(254, 241, 246, 1.000)',
  [ColorStyle.Red]: 'rgba(255, 245, 245, 1.000)',
  [ColorStyle.Orange]: 'rgba(255, 244, 229, 1.000)',
  [ColorStyle.Yellow]: 'rgba(255, 249, 219, 1.000)',
}

const strokeWidths = {
  [SizeStyle.Small]: 2,
  [SizeStyle.Medium]: 4,
  [SizeStyle.Large]: 8,
}

const dashArrays = {
  [DashStyle.Solid]: () => 'none',
  [DashStyle.Dashed]: (sw: number) => `${sw} ${sw * 2}`,
  [DashStyle.Dotted]: (sw: number) => `0 ${sw * 1.5}`,
}

function getStrokeWidth(size: SizeStyle) {
  return strokeWidths[size]
}

function getStrokeDashArray(dash: DashStyle, strokeWidth: number) {
  return dashArrays[dash](strokeWidth)
}

export function getShapeStyle(
  style: ShapeStyles
): Partial<SVGProps<SVGUseElement>> {
  const { color, size, dash, isFilled } = style

  const strokeWidth = getStrokeWidth(size)
  const strokeDasharray = getStrokeDashArray(dash, strokeWidth)

  return {
    stroke: strokes[color],
    fill: isFilled ? fills[color] : 'none',
    strokeWidth,
    strokeDasharray,
  }
}

export const defaultStyle = {
  color: ColorStyle.Black,
  size: SizeStyle.Medium,
  isFilled: false,
  dash: DashStyle.Solid,
}