import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'active')

  useEffect(() => {
      if (darkMode) {
          document.body.classList.add('darkmode')
          localStorage.setItem('darkmode', 'active')
      } else {
          document.body.classList.remove('darkmode')
          localStorage.setItem('darkmode', null)
      }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
      <>
          <Header onToggleDarkMode={toggleDarkMode} />
          <Home />
          <About />
          <Skills/>
          <Projects />
          <Contact />
      </>
  )
}

export default App
