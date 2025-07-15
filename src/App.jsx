import React from 'react'
import LiftingState from './components/LiftingState'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import LiftingWork from './components/LiftingWork'
import ColorWork from './components/ColorWork'

function App() {
  return (
    <div className="App">
      <LiftingState />
      <UseEffect />
      <UseRef />
      <LiftingWork />
      <ColorWork />
    </div>
  )
}

export default App