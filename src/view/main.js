import "../component/search-bar.js";
import "../component/meals-list.js";
import MealsData from "../data/MealsData";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meals-list");
  const resultTextTemplate = document.querySelector("#result-template");

  const onSearchClicked = async () => {
    try {
      const result = await MealsData.searchMeal(searchElement.searchValue);
      if (result === null) {
        resultTextTemplate.innerText = `No result found for ${searchElement.searchValue}`;
      } else {
        resultTextTemplate.innerText = `Search result for ${searchElement.searchValue}`;
        renderResult(result);
      }
    }
    catch (err) {
      alert(err)
    }
  }

  const randomSearchClicked = async () => {
    try {
      const result = await MealsData.randomMeal();
      renderResult(result);
    }
    catch (err) {
      alert(err)
    }
  }

  searchElement.onSearch = onSearchClicked;
  searchElement.randomSearch = randomSearchClicked;

  const renderResult = results => {
    mealListElement.meals = results;
  }
}

export default main;