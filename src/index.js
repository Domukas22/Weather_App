import "./styles/reset.css";
import "./styles/main.css";
import "./styles/style.css";

import {
  GETweatherInfo,
  EDITcityTextInfo,
  DISPLAYerrors,
  EDITerrorMessage,
} from "./logic/function";

const formINPUT = document.querySelector("input");
formINPUT.addEventListener("focus", () => {
  DISPLAYerrors(false);
});
formINPUT.addEventListener("input", () => {
  DISPLAYerrors(false);
});

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = e.currentTarget.querySelector("input");
  const reqCITY = input.value;
  input.value = "";

  try {
    const weatherINFO = await GETweatherInfo(reqCITY);
    const { weather, city, country } = weatherINFO;
    EDITcityTextInfo(weather, city, country);
    DISPLAYerrors(false);
  } catch (err) {
    const ISsearchError = err.name === "City search error";
    EDITerrorMessage(ISsearchError, reqCITY);
    DISPLAYerrors(true);
  }
});
