//
//
//

class SearchERROR extends Error {
  constructor(cityName) {
    super(`"${cityName}" not found`);
    this.name = "City search error";
    this.failedSearchVALUE = cityName;
  }
}

const apiKEY = "2c4c37cff2114d558ad83205231410";
export async function GETweatherInfo(cityNAME) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKEY}&q=${cityNAME}`;

  try {
    const connection = await fetch(url);
    if (!connection.ok) {
      throw new SearchERROR(cityNAME);
    }
    const json = await connection.json();
    const { name: city, country } = json.location;
    const weather = json.current.condition.text;

    return { weather, city, country };
  } catch (err) {
    // console.error(err);
    if (err instanceof SearchERROR) {
      throw new SearchERROR(err.message);
    }
    throw new Error(err);
  }
}
export function EDITcityTextInfo(weather, city, country) {
  document.querySelector(
    ".displayedCityNAME",
  ).textContent = `${city}, ${country}`;
  document.querySelector(".displayedCityWEATHER").textContent = weather;
}
export function DISPLAYerrors(HASerror) {
  const input = document.querySelector("input");
  const errorMESSAGE = document.querySelector(".errorMESSAGE");

  errorMESSAGE.setAttribute("data-visible", HASerror);
  input.setAttribute("data-haserror", HASerror);
}
export function EDITerrorMessage(ISsearchError, cityNAME = "default") {
  const errorMESSAGE = document.querySelector(".errorMESSAGE");
  if (ISsearchError) {
    errorMESSAGE.textContent = `⚠️ "${cityNAME}" not found`;
    return;
  }
  errorMESSAGE.textContent = "Oops, somethign went wrong!";
}
