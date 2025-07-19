import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'

function App() {

  return (
    <div className='font-mono text-[#d7e6fb]'>
      <NavBar/>
       <div className='mx-30 my-10'>
      <About/>
      </div>
    </div>
  )
}

export default App
