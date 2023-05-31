/** @jsxImportSource @emotion/react */
"use client"

import React from "react"
import { css } from "@emotion/react"
import Image from "next/image"
import { Noto_Sans_Javanese } from "next/font/google"

const notoSansJpH1 = Noto_Sans_Javanese({ subsets: ["latin"], weight: ["700"] })
const notoSansJpText = Noto_Sans_Javanese({ subsets: ["latin"] })

const bgColor = css`
  background-color: #f9e5c0;
`

const Hero = (): JSX.Element => (
  <>
    <div className="h-screen m-auto flex justify-end items-end" css={bgColor}>
      <Image
        src="/logo.svg"
        alt="takoba (signed by takoba)"
        width={960}
        height={360}
        className="-rotate-3 p-4 absolute top-0 left-0"
      />
      <div className="p-4 mr-16">
        <h1 className={`${notoSansJpH1.className} text-6xl`}>オバラタクヤ</h1>
        <p className={`${notoSansJpText.className}`}>
          Software Engineer OR UX Designer
        </p>
      </div>
    </div>
  </>
)
export default Hero
