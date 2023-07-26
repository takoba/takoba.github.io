import React from "react"
import Image from "next/image"

type Area = {
  width: number
  height: number
}
const original: Area = {
  width: 114,
  height: 172,
}

const areaCalculator = (
  num: number
): Area => {
  const { width, height } = original

  return {
    width:  num * (width / height),
    height: num,
  }
}

const sizeParser = (size: string|number): [number, string] => {
  if (typeof size === "number") {
    return [size, ""]
  }
  if (size.match(/^\d+$/)) {
    return [Number(size), '']
  }

  const matched = size.match(/[a-z]+$/)
  if (!matched) {
    throw new Error('Unexpected value: size')
  }
  const [unit] = matched

  return [Number(size.slice(0, 0 - unit.length)), unit]
}


const grayscale: React.CSSProperties = {
  filter: "grayscale(100%)",
}

type Props = {
  size?: string | number
}
const ScrapboxIcon = ({size}: Props): JSX.Element => {
  const [num, unit] = sizeParser(size ?? "1em")
  const { width, height } = areaCalculator(num)

  const min: React.CSSProperties = {
    minWidth: `${width}${unit}`,
    minHeight: `${height}${unit}`,
  }
  const margin: React.CSSProperties = {
    margin: `0 ${(height - width) / 2}${unit}`,
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
