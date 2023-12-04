import { Inter } from 'next/font/google'
import Butons from '@/components/buttons/indes'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <Butons apiKey={'apiKey'}/>
    </main>
  )
}
