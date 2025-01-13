import { useState, useEffect } from 'react';
import './App.css';
import { GET_IMAGE } from "./API/images.js";

function App() {
  const [query, setQuery] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [elementImage, setElementImage] = useState();

  const searchImage = async ()  => {
    const image = await GET_IMAGE(query, attempts);
    setAttempts(attempts + 1);
    setElementImage(image);
  };

  useEffect(() => {
    if (!query) return;
    const searchTimeout = setTimeout(() => {
      searchImage();
    }, 1500);
    return () => clearTimeout(searchTimeout);
  }, [query]);

  const queryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div>
        <form>
          <input type="text" value={query} onChange={queryChange}/>

          <button onClick={searchImage}>click</button>

          <img src={elementImage} alt=""/>
        </form>
      </div>
    </>
  )
}

export default App
