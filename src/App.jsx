
import './App.css'

function App() {

  let func2 = () => {
    console.log("hello!")
  }

  function func() {
    console.log("Hello world")
  }

  let func3 = () => console.log("Hi")

  return (
    <>
      <p>hello</p>
      <button onClick={func}>click me</button>
      <div onClick={func2} className='div'>

      </div>
      <button onMouseEnter={func3}>click!</button>
      <button onClick={() => {
        console.log("Hello 123")
      }}>click me!</button>

      <button onClick={() => console.log("hi")}>hi</button>
    </>
  )
}

export default App
