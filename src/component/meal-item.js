class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  set meal(meal) {
    this._meal = meal
    this.setAttribute("data-mealID", this._meal.idMeal)
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        @import "../style.css"
      </style>
      <article id="meal" class="relative cursor-pointer w-44 h-44 text-center">
        <img src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}" class="w-full h-full border-2 border-white rounded-lg">
        <div id="meal-info" data-mealID="${this._meal.idMeal}" class="absolute meal-info top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-75 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100">
          <h3 class="font-bold">${this._meal.strMeal}</h3>
        </div>
      </article>
    `;
  }
}

customElements.define("meal-item", MealItem)