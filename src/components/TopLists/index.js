import React from "react";
import cardsData from '../../Data/mainCards.json';
import "./index.css"

const TopLists = () => {
  const {cardsList} = cardsData
    return (
      <ul className="unordered-list">
       {cardsList.map(eachItem=>(
        <li className="each-list-item">
          <img src={eachItem.imageUrl} alt={eachItem.name} className="image-item"/>
          <h5 className="name-text">{eachItem.name}</h5>
        </li>
       ))}
      </ul>
    )
  
};

export default TopLists;
