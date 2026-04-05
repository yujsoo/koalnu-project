import HomePage from './page/HomePage'
import AboutPage from './page/AboutPage'
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const clickCount = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    console.log(count)
  }
  
  return (
      <div>
        <button onClick={clickCount}>증가</button>
        <HomePage/>
        <AboutPage/>
      </div>
  )
}

export default App
