import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Portfolio from './component/Portfolio'
import Projects from './component/Projects'
import CustomerReviews from './component/CustomerReviews'
import Footer from './component/Footer'
import CodeBackground from './component/CodeBackground'


const App = () => {
  return (
    <div className="relative min-h-screen">
      <CodeBackground />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Projects />
        <CustomerReviews />
        <Footer />
      </div>
    </div>
  )
}

export default App
