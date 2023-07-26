import React from "react"
import Image from "next/image"

type SizePattern = "small" | "medium" | "large" | "original"

type Area = {
  width: number
  height: number
}
const original: Area = {
  width: 114,
  height: 172,
}

type HeightSettings = {
  [key in SizePattern]: Area["height"]
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

const grayscale: React.CSSProperties = {
  filter: "grayscale(100%)",
}

type Props = {
  size?: SizePattern
}
const ScrapboxIcon = (props: Props): JSX.Element => {
  const size = props.size ?? "medium"
  const { width, height } = areaCalculator(heightSettings, size)

  const min: React.CSSProperties = {
    minWidth: `${width}px`,
    minHeight: `${height}px`,
  }
  const margin: React.CSSProperties = {
    margin: `0 ${(height - width) / 2}px`,
  }

  return (
    <Image
      src="/scrapbox_logo.svg"
      alt="Scrapbox logo"
      width={width}
      height={height}
      style={{ ...min, ...margin, ...grayscale }}
    />
  )
}
export default ScrapboxIcon
