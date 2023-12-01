import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/shared/sidebar/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <main className='flex h-screen w-screen'>
          <div>
            <Sidebar />
          </div>
          <div className='p-5'>{children}</div>
        </main>
      </body>
    </html>
  )
}
