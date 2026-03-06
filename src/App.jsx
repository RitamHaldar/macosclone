import { useState } from 'react'
import './App.scss'
import Dock from './Components/dock'
import Navbar from './Components/Navbar'
import Github from './Components/Windows/Github'
import Notes from './Components/Windows/Notes'
import Resume from './Components/Windows/Resume'
import Spotify from './Components/Windows/Spotify'
import Cli from './Components/Windows/Cli'


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
