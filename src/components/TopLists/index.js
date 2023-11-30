import React from "react";
import cardsData from '../../Data/mainCards.json';
import "./index.css"

const TopLists = () => {
  const {cardsList} = cardsData
    return (
      <div className="mt-3 me-4">
      <ul className="d-flex flex-wrap">
       {cardsList.map(eachItem=>(
        <li className="each-list-item">
          <img src={eachItem.imageUrl} alt={eachItem.name} className="image-item"/>
          <h5 className="name-text">{eachItem.name}</h5>
        </li>
       ))}
      </ul>
      </div>
    )
};

export default TopLists;
