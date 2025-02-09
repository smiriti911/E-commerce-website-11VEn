import React from 'react'
import Hero from '../components/Hero'
import Latest from '../components/Latest'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <Latest />
      <BestSeller/>
      <Policy />
      <NewsLetter />
     
    </>
  )
}

export default Home