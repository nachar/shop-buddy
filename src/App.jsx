import './App.css';
import Searcher from "./components/Searcher.jsx";
import {ADD_TO_SHOPPING_LIST, GET_SHOPPING_LIST} from "./utils/storage.js";
import {useState} from "react";

const App = ()  => {
  const [shoppingList, setShoppingList] = useState();
  const addElement = (element) => {
    ADD_TO_SHOPPING_LIST(element);
    setShoppingList(GET_SHOPPING_LIST());
  };

  return (
    <>
      <div>
        <Searcher addElement={addElement}></Searcher>

        {/*TODO: Llevar a un componente*/}
        <ul>
          {shoppingList?.map(element => {
            return (
              <li>
                <p>{element.title}</p>
                <img src={element.image} alt=""/>
              </li>
            )
          })}
        </ul>

      </div>
    </>
  )
};

export default App;
