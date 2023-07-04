import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css'

function App() {


  const country = {
    name: "South Africa",
    img: "https://de.wikipedia.org/wiki/Datei:Flag_of_South_Africa.svg",
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



  return (
    <>
      <div className='App'>
          <Header/>
          <Card/>
          <Footer/>
      </div>
    </>
  )
}

export default App
