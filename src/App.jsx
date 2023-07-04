import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';
import React, {useState, createContext } from 'react';


export const DataContext = createContext();

function App() {
  const country = {
    name: "South Africa",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1599px-Flag_of_South_Africa.svg.png",
    capital: "Pretoria",
    largestCity: "Johannesburg",
    population: 58048332,
    currency: "South African Rand (ZAR)",
    officialLanguages: ["Zulu", 
                        "Xhosa", 
                        "Afrikaans", 
                        "English", 
                        "Sepedi", 
                        "Swazi", 
                        "Sesotho",
                        "Setswana", 
                        "Xitsonga", 
                        "Tshiwenda", 
                        "Ndebele"
                      ],
    neighbouringCountries: ["Namibia", 
                            "Botswana",
                            "Zimbabwe", 
                            "Mozambique", 
                            "Eswatini"
                          ],
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () =>
  {
    setIsDarkMode(!isDarkMode);
  }



  return (
    <>
      <div className={`app ${isDarkMode ? 'darkMode':'lightMode'}`}>
          <Header/>
          <button className={`button ${isDarkMode ? 'darkMode':'lightMode'}`} onClick={toggleMode}>Change Mode</button>
          <DataContext.Provider value={country}>
          <Card/>
          </DataContext.Provider>
          <Footer/>
      </div>
    </>
  )
}

export default App
