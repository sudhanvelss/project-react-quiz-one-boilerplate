import './App.css'
import Home from './Component/Home'
import Quiz from './Component/Quiz'
import Result from './Component/Result'


function App() {
  return(
    <div className='landing-page'>
      <Home/>
      <Quiz/>
      <Result/>
    </div>

  )
  
}

export default App