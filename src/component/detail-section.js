import "./meal-detail";
import {cssomSheet, create} from "twind";

const sheet = cssomSheet({target: new CSSStyleSheet()});

const { tw } = create({sheet});

class DetailSection extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
    this.shadowRoot.adoptedStyleSheets = [sheet.target];
  }

  set mealsdetail(meal) {
    this._mealsdetail = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <section id="meal-detail" class="${tw`mt-8 w-full p-4 flex flex-col items-center justify-center`}">
        
      </section>
    `;
    this._mealsdetail.forEach(meal => {
      const mealDetailElement = document.createElement("meal-detail");
      mealDetailElement.meal = meal;
      this.shadowDOM.querySelector("#meal-detail").appendChild(mealDetailElement);
    })
  }
}

customElements.define("detail-section", DetailSection);