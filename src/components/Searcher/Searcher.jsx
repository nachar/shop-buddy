import {useEffect, useState} from "react";
import {GET_IMAGE, DEFAULT_IMAGE} from "../../API/Images.js";
import './Searcher.css';

const Searcher = ({ addElement }) => {
  const [query, setQuery] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [elementImage, setElementImage] = useState(DEFAULT_IMAGE);

  useEffect(() => {
    if (!query) return;
    const searchTimeout = setTimeout(() => {
      searchImage();
    }, 1000);
    return () => clearTimeout(searchTimeout);
  }, [query]);

  const searchImage = async ()  => {
    const image = await GET_IMAGE(query, attempts);
    setAttempts(attempts + 1);
    setElementImage(image);
  };

  const queryChange = (e) => {
    setAttempts(1);
    setQuery(e?.target?.value);
  };

  const setElement =  () => {
    addElement({
      image: elementImage,
      title: query
    });
    setQuery('');
    setElementImage(DEFAULT_IMAGE);
  };

  return (
    <div className="searcher">
      <div className="searcher__input">
        <input type="text" value={query} onChange={queryChange}/>
      </div>

      <div className="searcher__image">
        <div className="searcher__image__content">
          <img src={elementImage} alt=""/>
          <button onClick={searchImage}>Change image</button>
        </div>
      </div>

      <div className="searcher__submit">
        <button onClick={setElement}>Add Element</button>
      </div>
    </div>
  );
};

export default Searcher;
