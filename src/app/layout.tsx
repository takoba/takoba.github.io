import EmotionRegistry from "@/lib/registry"
import "./globals.css"

export const metadata = {
  title: "@takoba",
  description: "Software Engineer OR UX Designer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <EmotionRegistry>{children}</EmotionRegistry>
      </body>
    </html>
  )
}
