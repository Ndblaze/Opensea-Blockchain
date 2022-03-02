import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default Home
