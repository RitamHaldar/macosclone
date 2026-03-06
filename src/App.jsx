import { useState } from 'react'
import './App.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/Windows/Github'
import Notes from './components/Windows/Notes'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/Cli'


function App() {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  return (
    <main>
      <Navbar />
      <Dock setwindowState={setwindowState} />
      {windowState.github && <Github windowname="github" setwindowState={setwindowState} />}
      {windowState.note && <Notes windowname="note" setwindowState={setwindowState} />}
      {windowState.resume && <Resume windowname="resume" setwindowState={setwindowState} />}
      {windowState.spotify && <Spotify windowname="spotify" setwindowState={setwindowState} />}
      {windowState.cli && <Cli windowname="cli" setwindowState={setwindowState} />}
    </main>
  )
}

export default App
