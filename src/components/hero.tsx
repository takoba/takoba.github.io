/** @jsxImportSource @emotion/react */
"use client"

import React from "react"
import Image from "next/image"
import { Noto_Sans_Javanese } from "next/font/google"

const notoSansJpH1 = Noto_Sans_Javanese({ subsets: ["latin"], weight: ["700"] })
const notoSansJpText = Noto_Sans_Javanese({ subsets: ["latin"] })

const bgColorStyle: React.CSSProperties = {
  backgroundColor: "#f9e5c0",
}
const containerAreaStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: 91 / 55,
}
const profileAreaStyle: React.CSSProperties = {
  marginRight: "1vw",
}
const headlineFontSizeStyle: React.CSSProperties = {
  textAlign: "right",
  fontSize: "6.25vw",
  lineHeight: 1,
}
const subtitleFontSizeStyle: React.CSSProperties = {
  textAlign: "right",
  fontSize: "2.5vw",
  lineHeight: "2rem",
}

const Logo = (): JSX.Element => (
  <>
    <Image
      src="/logo.svg"
      alt="takoba (signed by takoba)"
      width={960}
      height={360}
      className="-rotate-3 p-4 absolute top-0 left-0"
    />
  </>
)

const Hero = (): JSX.Element => (
  <>
    <div
      className="m-auto flex justify-end items-end"
      style={{ ...bgColorStyle, ...containerAreaStyle }}
    >
      <Logo />
      <div className="p-4" style={{ ...profileAreaStyle }}>
        <h1
          className={`${notoSansJpH1.className}`}
          style={{ ...headlineFontSizeStyle }}
        >
          オバラタクヤ
        </h1>
        <p
          className={`${notoSansJpText.className} mr-2`}
          style={{ ...subtitleFontSizeStyle }}
        >
          Software Engineer OR UX Designer
        </p>
      </div>
    </div>
  </>
)
export default Hero
