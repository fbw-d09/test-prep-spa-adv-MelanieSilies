import React, { useContext } from 'react';
import { DataContext } from '../App';

const Card = () => {
  const country = useContext(DataContext);
  
  return (
    <div className='Card'>
        <h3>Name: {country.name}</h3>
        <img src={country.img} alt="southAfrica" />
        <p>Capital: {country.capital}</p>
        <p>Largest City: {country.largestCity}</p>
        <p>Population: {country.population}</p>
        <p>Currency: {country.currency}</p>
        <div className="lists">
            <div className="languageList">
                <h4>Official Languages:</h4>
                <ul>
                {country.officialLanguages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
          </div>
          <div className="neighbourList">
              <h4>Neighbouring Countries:</h4>
              <ul>
              {country.neighbouringCountries.map((neighbour, index) => (
                <li key={index}>{neighbour}</li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Card