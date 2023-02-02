import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import GradientLayout from '@/components/gradientLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <GradientLayout image="https://i.pinimg.com/originals/4d/b0/71/4db0719744d73a1ad88e0f9fc1db649b.jpg" color="blue" subtitle="Listen to it" title="Taseer" description="whatever whateverwhateverwhateverwhateverwhatever">
    <div>Home</div>
  </GradientLayout> 
}
