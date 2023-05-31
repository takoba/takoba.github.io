import "./globals.css"
import EmotionRegistry from "@/lib/emotionRegistry"
import GlobalStyles from "@/styles/globalStyles"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <GlobalStyles />
      <body>
        <EmotionRegistry>{children}</EmotionRegistry>
      </body>
    </html>
  )
}
