// Fetching data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Problem 1: Get all countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === "Asia");
    console.log("Countries from Asia:", asiaCountries.map(country => country.name.common));

    // Problem 2: Get all countries with a population of less than 2 lakhs using Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriesWithPopulationLessThan2Lakhs.map(country => country.name.common));

    // Problem 3: Print the details name, capital, flag using forEach function
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
      console.log("-----------------------");
    });

    // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    // Problem 5: Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies && country.currencies.USD);
    if (countryWithUSD) {
      console.log("Country that uses US dollars as currency:", countryWithUSD.name.common);
    } else {
      console.log("No country uses US dollars as currency.");
    }
  })
  .catch(error => console.log("Error fetching data:", error));
