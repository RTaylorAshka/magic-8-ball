import './App.css'
import Ball from './Ball'
import answers from './answers'

function App() {

  return (
    <div className="App">
      <Ball answers={answers} />
    </div>
  )
}

export default App
