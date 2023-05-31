/** @jsxImportSource @emotion/react */
import React from "react"
import Image from "next/image"
import { css } from "@emotion/react"

type ScrapboxIconSize = "small" | "medium" | "large" | "original"
type ScrapboxIconProps = {
  size?: ScrapboxIconSize
}

type Area = {
  width: number
  height: number
}
type HeightSettings = {
  [key in ScrapboxIconSize]: Area["height"]
}

const original: Area = {
  width: 114,
  height: 172,
}
const heightSettings: HeightSettings = {
  small: 20,
  medium: 24,
  large: 34,
  original: original.height,
}

const areaCalculator = (
  settings: HeightSettings,
  size: keyof HeightSettings
): Area => {
  if (size === "original") {
    return original
  }
  const { width, height } = original

  return {
    width: settings[size] * (width / height),
    height: settings[size],
  }
}

const ScrapboxIcon = (props: ScrapboxIconProps): JSX.Element => {
  const size = props.size ?? "medium"
  const { width, height } = areaCalculator(heightSettings, size)

  const margin = css`
    margin: 0 ${(height - width) / 2}px;
  `

  return (
    <Image
      src="/scrapbox_logo.svg"
      alt="Scrapbox logo"
      width={width}
      height={height}
      css={margin}
    />
  )
}
export default ScrapboxIcon
