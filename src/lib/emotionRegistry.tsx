"use client"

import React, { useState } from "react"
import { useServerInsertedHTML } from "next/navigation"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createCache from "@emotion/cache"

type Props = {
  children: React.ReactNode
}
const EmotionRegistry = ({ children }: Props): JSX.Element => {
  const [emotionCache] = useState<EmotionCache>(() => {
    const emotionCache = createCache({ key: "css", prepend: true })
    emotionCache.compat = true
    return emotionCache
  })

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${emotionCache.key} ${Object.keys(
          emotionCache.inserted
        ).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(emotionCache.inserted).join(" "),
        }}
      />
    )
  })
  if (typeof window !== "undefined") return <>{children}</>

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>
}

export default EmotionRegistry
