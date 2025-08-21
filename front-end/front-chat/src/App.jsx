import viteLogo from "/vite.svg";
import toast from 'react-hot-toast';
import './App.css';
import JoinCreateChat from "./component/joinCreateChat";
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);


  return (
    
      <div>
        <JoinCreateChat/>
      </div>
     
   
  );
}

export default App;
