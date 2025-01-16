import './ShoppingList.css';

const ShoppingList = ({ shoppingList, deleteElement }) => {
  return (
    <div className="shopping-list-section">
      <h2 className="shopping-list-section__title">Shopping list</h2>

      <ul className="shopping-list">
        {shoppingList?.map(element => {
          return (
            <li className="shopping-list__item" key={`shopping-list-${element.id}`}>
              <button onClick={() => deleteElement(element)}>
                <p>{element.title}</p>
                <img src={element.image} alt=""/>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
