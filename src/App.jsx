import './App.css';
import Searcher from "./components/Searcher/Searcher.jsx";
import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";
import {ADD_TO_SHOPPING_LIST, GET_SHOPPING_LIST} from "./utils/storage.js";
import {useState, useEffect} from "react";

const App = ()  => {
  const [shoppingList, setShoppingList] = useState();

  useEffect(() => {
    setShoppingList(GET_SHOPPING_LIST());
  }, []);

  const addElement = (element) => {
    ADD_TO_SHOPPING_LIST(element);
    setShoppingList(GET_SHOPPING_LIST());
  };

  return (
    <>
      <div>
        <Searcher addElement={addElement}></Searcher>
        <ShoppingList shoppingList={shoppingList}></ShoppingList>
      </div>
    </>
  )
};

export default App;
