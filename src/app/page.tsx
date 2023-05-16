import Image from "next/image"
import { Inter, Noto_Sans_Javanese } from "next/font/google"
import { CSSProperties } from "react"

const inter = Inter({ subsets: ["latin"] })

const notoSansJpH1 = Noto_Sans_Javanese({ subsets: ["latin"], weight: ["700"] })
const notoSansJpText = Noto_Sans_Javanese({ subsets: ["latin"] })

const styles: { [key: string]: CSSProperties } = {
  hero: {
    height: "480px",
    backgroundColor: "#F9E5C0",
  },
}

const Home = (): JSX.Element => {
  return (
    <>
      <main>
        <div
          className="hero m-auto flex justify-end items-end"
          style={styles.hero}
        >
          <Image
            src="/logo.svg"
            alt="takoba (signed by takoba)"
            width={960}
            height={360}
            className="-rotate-3 p-4 absolute top-0 left-0"
          />
          <div className="p-4 mr-16">
            <h1 className={`${notoSansJpH1.className} text-6xl`}>
              オバラタクヤ
            </h1>
            <p className={`${notoSansJpText.className}`}>
              Software Engineer OR UX Designer
            </p>
          </div>
        </div>
        <div className={`${notoSansJpText.className}`}>
          <a href="https://github.com/takoba">
            <span>https://github.com/takoba</span>
          </a>
        </div>
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
