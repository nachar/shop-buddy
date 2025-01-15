import {useEffect, useState} from "react";
import {GET_IMAGE} from "../API/Images.js";
import './Searcher.css';

const Searcher = ({ addElement }) => {
  const [query, setQuery] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [elementImage, setElementImage] = useState();

  useEffect(() => {
    if (!query) return;
    const searchTimeout = setTimeout(() => {
      searchImage();
    }, 1500);
    return () => clearTimeout(searchTimeout);
  }, [query]);

  const searchImage = async ()  => {
    const image = await GET_IMAGE(query, attempts);
    setAttempts(attempts + 1);
    setElementImage(image);
  };

  const queryChange = (e) => {
    setQuery(e?.target?.value);
  };

  const setElement =  () => {
    addElement({
      image: elementImage,
      title: query
    });
  };

  return (
    <div>
      <input type="text" value={query} onChange={queryChange}/>

      <button onClick={searchImage}>Reload</button>
      <button onClick={setElement}>Add</button>

      <img src={elementImage} alt="" className="image"/>
    </div>
  );
};

export default Searcher;
