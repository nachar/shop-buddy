import './App.css';
import Searcher from "./components/Searcher/Searcher.jsx";
import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";
import PreviouslyPurchased from "./components/PreviouslyPurchased/PreviouslyPurchased.jsx";
import {
  ADD_TO_SHOPPING_LIST,
  GET_SHOPPING_LIST,
  DELETE_FROM_SHOPPING_LIST,
  ADD_TO_PREVIOUSLY_PURCHASED, GET_PREVIOUSLY_PURCHASED, DELETE_FROM_PREVIOUSLY_PURCHASED
} from "./utils/storage.js";
import {useState, useEffect} from "react";

const App = ()  => {
  const [shoppingList, setShoppingList] = useState();
  const [previouslyPurchased, setPreviouslyPurchased] = useState();

  useEffect(() => {
    setShoppingList(GET_SHOPPING_LIST());
    setPreviouslyPurchased(GET_PREVIOUSLY_PURCHASED());
  }, []);

  const addElement = (element) => {
    ADD_TO_SHOPPING_LIST(element);
    setShoppingList(GET_SHOPPING_LIST());
  };

  const deleteElement = (element) => {
    DELETE_FROM_SHOPPING_LIST(element);
    setShoppingList(GET_SHOPPING_LIST());
    ADD_TO_PREVIOUSLY_PURCHASED(element);
    setPreviouslyPurchased(GET_PREVIOUSLY_PURCHASED());
  };

  const deletePreviouslyPurchased = (element) => {
    DELETE_FROM_PREVIOUSLY_PURCHASED(element);
    setPreviouslyPurchased(GET_PREVIOUSLY_PURCHASED());
  }

  return (
    <>
      <div>
        <h1>Shop buddy</h1>
        <Searcher
          addElement={addElement}>
        </Searcher>
        <ShoppingList
          shoppingList={shoppingList}
          deleteElement={deleteElement}>
        </ShoppingList>
        <PreviouslyPurchased
          previouslyPurchased={previouslyPurchased}
          deletePreviouslyPurchased={deletePreviouslyPurchased}>
        </PreviouslyPurchased>
      </div>
    </>
  )
};

export default App;
