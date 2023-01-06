import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Link from "next/link"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href={"/"}>HOME</Link>
      <Link href={"/services"}>SERRVICES</Link>
      <Link href={"/about"}>ABOUT US</Link>
    </main>
  )
}
