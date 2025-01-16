const KEY_SHOPPING_LIST = 'shop-buddy-shopping-list';
const KEY_PREVIOUSLY_PURCHASED = 'shop-buddy-previously-purchased';

export const GET_SHOPPING_LIST = () => {
  return JSON.parse(localStorage.getItem(KEY_SHOPPING_LIST));
};
export const ADD_TO_SHOPPING_LIST = (item) => {
  const shoppingList = GET_SHOPPING_LIST() ? GET_SHOPPING_LIST() : [];
  shoppingList.push(item);
  const shoppingListFullInfo = setIds(shoppingList);
  localStorage.setItem(KEY_SHOPPING_LIST, JSON.stringify(shoppingListFullInfo));
};

export const DELETE_FROM_SHOPPING_LIST = ({ id }) => {
  const shoppingList = GET_SHOPPING_LIST().filter((item) => item.id !== id);
  const shoppingListFullInfo = setIds(shoppingList);
  localStorage.setItem(KEY_SHOPPING_LIST, JSON.stringify(shoppingListFullInfo));
};

const setIds = (list) => {
  return list.map((item, index) => {
    return {...item, id: index + 1};
  });
}

export const GET_PREVIOUSLY_PURCHASED = () => {
  return JSON.parse(localStorage.getItem(KEY_PREVIOUSLY_PURCHASED));
};

export const ADD_TO_PREVIOUSLY_PURCHASED = (item) => {
  const shoppingList = GET_PREVIOUSLY_PURCHASED() ? GET_PREVIOUSLY_PURCHASED() : [];
  shoppingList.push(item);
  const shoppingListFullInfo = setIds(shoppingList);
  localStorage.setItem(KEY_PREVIOUSLY_PURCHASED, JSON.stringify(shoppingListFullInfo));
};

export const DELETE_FROM_PREVIOUSLY_PURCHASED = ({ id }) => {
  const shoppingList = GET_PREVIOUSLY_PURCHASED().filter((item) => item.id !== id);
  const shoppingListFullInfo = setIds(shoppingList);
  localStorage.setItem(KEY_PREVIOUSLY_PURCHASED, JSON.stringify(shoppingListFullInfo));
};
