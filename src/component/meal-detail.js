class MealDetail extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  set meal_detail(meal) {
    this._meal_detail = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        @import "../style.css"
      </style>
      <div id="meal-detail" class="w-full p-4 flex flex-col items-center justify-center">
        <h2>${this._meal_detail.strMeal}</h2>
        <img src="${this._meal_detail.strMealThumb}" alt="${this._meal_detail.strMealThumb}" class="w-1/2 h-1/2 border-2 border-white rounded-lg">
        <div class="w-full px-8 py-12 border-2 border-dashed border-white rounded-lg">
          <p>Meal Category: <b>${this._meal_detail.strCategory}</b></p>
          <p>Nationality: <b>${this._meal_detail.strArea}</b></p>
        </div>
        <p>${this._meal_detail.strInstructions}</p>
      </div>
    `
  }
}

customElements.define("meal-detail", MealDetail);