import { Inter } from 'next/font/google'
import Butons from '@/components/buttons/index'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Link href={"./availableServices/servises"}>hola</Link>
        <Butons />
    </main>
  )
}
