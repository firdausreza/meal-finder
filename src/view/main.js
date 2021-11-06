import "../component/search-bar.js";
import "../component/meals-list.js";
import "../component/detail-section"
import MealsData from "../data/MealsData";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meals-list");
  const mealItemElement = document.querySelector("meal-item");
  const detailSectionElement = document.querySelector("detail-section");
  const resultTextTemplate = document.querySelector("#result-template");

  const renderResult = results => {
    mealListElement.meals = results;
  }

  const renderSingleMeal = result => {
    detailSectionElement.mealsdetail = result;
  }

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
      resultTextTemplate.innerText = "";
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

  const onItemClicked = async (e) => {
    try {
      const mealID = e.target.getAttribute("data-mealID");
      const result = await MealsData.mealDetail(mealID);
      renderSingleMeal(result)
    }
    catch (err) {
      console.log(err)
    }
  }

  searchElement.onSearch = onSearchClicked;
  searchElement.randomSearch = randomSearchClicked;
  mealListElement.itemClick = onItemClicked;
}

export default main;