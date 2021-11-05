class MealsData {
  static async searchMeal(keyword) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
    const data = await res.json();
    return data.meals;
  }
}

export default MealsData;