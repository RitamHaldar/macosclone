import { useState, useEffect } from 'react'
import './App.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import Spotlight from './components/Spotlight'

function App() {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  const [showSpotlight, setShowSpotlight] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setShowSpotlight(prev => !prev)
      }
      if (e.key === 'Escape') {
        setShowSpotlight(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main>
      <Navbar />
      <Dock setwindowState={setwindowState} />
      {windowState.github && <Github windowname="github" setwindowState={setwindowState} />}
      {windowState.note && <Notes windowname="note" setwindowState={setwindowState} />}
      {windowState.resume && <Resume windowname="resume" setwindowState={setwindowState} />}
      {windowState.spotify && <Spotify windowname="spotify" setwindowState={setwindowState} />}
      {windowState.cli && <Cli windowname="cli" setwindowState={setwindowState} />}

      <Spotlight
        isOpen={showSpotlight}
        setIsOpen={setShowSpotlight}
        setwindowState={setwindowState}
      />
    </main>
  )
}

export default App

