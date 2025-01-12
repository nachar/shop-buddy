import { useState } from 'react';
import './App.css';
import { GET_IMAGE } from "./API/images.js";

function App() {
  const [count, setCount] = useState(1);


  const searchImage = async ()  => {
    const image = await GET_IMAGE('beer', count);
    setCount(count + 1);
    console.log('image: ', image);
  };

  return (
    <>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, assumenda.</p>

        <button onClick={searchImage}>click</button>
      </div>
    </>
  )
}

export default App
