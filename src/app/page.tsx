import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Home = (): JSX.Element => {
  return (
    <>
      <header>
        <Image
          src="/logo.svg"
          alt="takoba (signed by takoba)"
          width={480}
          height={180}
        />
      </header>
      <main>
        <a href="https://github.com/takoba">
          <span className={`${inter.className}`}>
            https://github.com/takoba
          </span>
        </a>
      </main>
      <footer>©2023 takoba</footer>
    </>
  )
}
export default Home
