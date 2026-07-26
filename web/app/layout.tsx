import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { cn } from "@/src/lib/utils";
import { ThemeScript } from "./_scripts";
import { Provider } from "./provider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <head>
        <ThemeScript />
      </head>
      <body className='flex min-h-screen flex-col overflow-x-hidden'>
        <Provider>
          <div className='flex flex-1 flex-col'>{children}</div>
        </Provider>
      </body>
    </html>
  )
}
