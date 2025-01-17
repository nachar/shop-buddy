import './PreviouslyPurchased.css';

const PreviouslyPurchased = ({ revivePreviouslyPurchased, previouslyPurchased, deletePreviouslyPurchased }) => {
  return (
    <div className="previously-purchased-section">
      <h2 className="previously-purchased-section__title">Previously purchased</h2>

      <ul className="previously-purchased">
        {previouslyPurchased?.map(element => {
          return (
            <li className="previously-purchased__item" key={`previously-purchased-${element.id}`}>
              <button className="previously-purchased__item__button" onClick={() => revivePreviouslyPurchased(element)}>
                <p>{element.title}</p>
                <img src={element.image} alt=""/>
              </button>
              <button
                className="previously-purchased__item__delete"
                onClick={() => deletePreviouslyPurchased(element)}>
                delete
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default PreviouslyPurchased;
