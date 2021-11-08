import "./meal-item.js"
import {cssomSheet, create} from "twind";

const sheet = cssomSheet({target: new CSSStyleSheet()});

const { tw } = create({sheet});

class MealsList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
    this.shadowRoot.adoptedStyleSheets = [sheet.target];
  }

  set meals(meals) {
    this.meal = meals;
    this.render()
  }

  set itemClick(event) {
    this._itemClick = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <section id="list-component" class="${tw`grid grid-cols-4 gap-6 mt-8 justify-items-center text-center`}">
        
      </section>
    `;
    this.meal.forEach(meal => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.shadowDOM.querySelector("#list-component").appendChild(mealItemElement);
    });
    this.shadowDOM.querySelector("#list-component").addEventListener("click", this._itemClick);
  }
}

customElements.define("meals-list", MealsList);