import "./globals.css"
import { Metadata } from "next"

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ja" className="min-w-min">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.HOST ?? "http://localhost:3000"),
}
export default RootLayout
