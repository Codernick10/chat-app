
import toast from 'react-hot-toast'
import './App.css'

function App() {


  return (
    <>
      <div>
       <h1>This is main page</h1>
       <button onClick={() => {
        toast.success("this is toast message");
       }}
      >
         Click me
       </button>
      </div>
     
    </>
  )
}

export default App
