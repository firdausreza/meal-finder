import "../component/search-bar.js";
import MealsData from "../data/MealsData";

const main = () => {
  const searchElement = document.querySelector("search-bar");

  const onSearchClicked = async () => {
    try {
      const result = await MealsData.searchMeal(searchElement.searchValue);
      console.log(result)
    }
    catch (err) {
      alert('Meal not found')
    }
  }

  searchElement.onSearch = onSearchClicked;

  const renderResult = results => {

  }
}

export default main;