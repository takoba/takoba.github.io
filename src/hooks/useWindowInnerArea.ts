import React, { useEffect, useState } from "react"

type Area = {
  width: number
  height: number
}

const useWindowInnerArea = (): Area => {
  const [area, setArea] = useState<Area>({ width: 0, height: 0 })

  const getWindowInnerArea = (): Area => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    const onResize = () => setArea(getWindowInnerArea)
    onResize()

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return area
}
export default useWindowInnerArea
