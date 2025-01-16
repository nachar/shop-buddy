import {useEffect, useState} from "react";
import {GET_IMAGE} from "../../API/Images.js";
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
    <div className="searcher">
      <div className="searcher__input">
        <input type="text" value={query} onChange={queryChange}/>
      </div>

      <div className="searcher__image">
        <img src={elementImage} alt="" className="image"/>
        <button onClick={searchImage}>Reload</button>
      </div>

      <div className="searcher__submit">
        <button onClick={setElement}>Add</button>
      </div>
    </div>
  );
};

export default Searcher;
