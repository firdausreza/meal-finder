class MealsData {
  static async searchMeal(keyword) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
    const data = await res.json();
    return data.meals;
  }

  static async randomMeal() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    return data.meals;
  }

  static async mealDetail(id) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals;
  }
}

export default MealsData;