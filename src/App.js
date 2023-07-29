import React from 'react'
import NoteContainer from './NoteContainer/NoteContainer'
import Sidebar from './SideBar/Sidebar'
import "./App.css"
function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <NoteContainer/>
    </div>
  )
}

export default App
