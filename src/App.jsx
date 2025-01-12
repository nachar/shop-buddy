import { useState } from 'react';
import './App.css';
import { GET_IMAGE } from "./API/images.js";

function App() {
  const [count, setCount] = useState(0);
  GET_IMAGE();

  return (
    <>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, assumenda.</p>
      </div>
    </>
  )
}

export default App
