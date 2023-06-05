import "./globals.css"
import { Metadata } from "next"
import EmotionRegistry from "@/lib/emotionRegistry"
import GlobalStyles from "@/styles/globalStyles"

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ja" className="min-w-min">
      <GlobalStyles />
      <body>
        <EmotionRegistry>{children}</EmotionRegistry>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.HOST ?? "http://localhost:3000"),
}
export default RootLayout
