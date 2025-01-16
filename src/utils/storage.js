const KEY_SHOPPING_LIST = 'shop-buddy-shopping-list';

export const ADD_TO_SHOPPING_LIST = (item) => {
  const shoppingList = GET_SHOPPING_LIST() ? GET_SHOPPING_LIST() : [];
  shoppingList.push(item);
  const shoppingListFullInfo = setIds(shoppingList);
  localStorage.setItem(KEY_SHOPPING_LIST, JSON.stringify(shoppingListFullInfo));
};

const setIds = (list) => {
  return list.map((item, index) => {
    return {...item, id: index + 1};
  });
}

export const GET_SHOPPING_LIST = () => {
    return JSON.parse(localStorage.getItem(KEY_SHOPPING_LIST));
};
