# 💻 repetition and test preperation 

:blue_square:1.display data

Create an info card to display the informations from the country object in the Card component.

```javascript
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
```
---

:blue_square:2. useContext

The user should be able to toggle between light and dark mode. (use `useContext` to pass the info about the current theme to your components.) Add a button to change the theme onClick. Depending on the theme change the background color from black to white and color from white to black
