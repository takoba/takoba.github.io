import React from "react"
import { Metadata } from "next"
import { Noto_Sans_Javanese } from "next/font/google"

import Hero from "@/components/hero"
import AccountList from "@/components/accountList"

const notoSansJpH2 = Noto_Sans_Javanese({ subsets: ["latin"], weight: ["600"] })
const notoSansJpText = Noto_Sans_Javanese({ subsets: ["latin"] })

const Headline = ({ children }: React.PropsWithChildren): JSX.Element => (
  <h2 className={`${notoSansJpH2.className} text-2xl`}>
    <span className="mr-2">#</span>
    {children}
  </h2>
)

const Home = (): JSX.Element => (
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

export const metadata: Metadata = {
  title: "@takoba",
  description: "Software Engineer OR UX Designer",
  openGraph: {
    title: "@takoba",
  },
  twitter: {
    card: "summary_large_image",
    title: "@takoba",
  },
}
export default Home
