import React, { Suspense } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { Noto_Sans_Javanese } from "next/font/google"

import AccountList from "@/components/accountList"

const notoSansJpH1 = Noto_Sans_Javanese({ subsets: ["latin"], weight: ["700"] })
const notoSansJpH2 = Noto_Sans_Javanese({ subsets: ["latin"], weight: ["600"] })
const notoSansJpText = Noto_Sans_Javanese({ subsets: ["latin"] })

const Hero = (): JSX.Element => (
  <>
    <div
      className="h-screen m-auto flex justify-end items-end"
      style={{
        backgroundColor: "#F9E5C0",
      }}
    >
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

const Headline = ({ children }: React.PropsWithChildren): JSX.Element => (
  <h2 className={`${notoSansJpH2.className} text-2xl`}>
    <span className="mr-2">#</span>
    {children}
  </h2>
)

const Home = (): JSX.Element => {
  return (
    <>
      <main>
        <Hero />
        <section
          id="accounts"
          className={`${notoSansJpText.className} w-full px-16 py-8`}
        >
          <AccountList />
        </section>
      </main>
      <footer>
        <p className={`${notoSansJpText.className} w-full py-2 text-center`}>
          ©2023 takoba
        </p>
      </footer>
    </>
  )
}
export default Home
