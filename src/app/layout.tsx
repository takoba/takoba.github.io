import "./globals.css"
import EmotionRegistry from "@/lib/emotionRegistry"
import GlobalStyles from "@/styles/globalStyles"

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ja">
      <GlobalStyles />
      <body>
        <EmotionRegistry>{children}</EmotionRegistry>
      </body>
    </html>
  )
}
export default RootLayout
