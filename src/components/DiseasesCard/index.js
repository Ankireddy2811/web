import React from 'react'
import cardsData from '../../Data/diseasesData.json';

const DiseasesCard = () => {
  const {diseasesCategories} = cardsData;
  return (
    <div className='diseases-container'>
      <h4 style={{color:"orange"}}>Popular Diseases</h4>
       <ul className="d-flex flex-wrap mx-auto">
       {diseasesCategories.map(eachItem=>(
        <li className="each-list-item">
          <img src={eachItem.imageUrl} alt={eachItem.name} className="image-item"/>
          <h5 className="name-text">{eachItem.name}</h5>
        </li>
       ))}
      </ul>
      
    </div>
    
  )
}

export default DiseasesCard
