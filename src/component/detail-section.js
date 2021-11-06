import "./meal-detail"

class DetailSection extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  set mealsdetail(meal) {
    this._mealsdetail = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        @import "../style.css"
      </style>
      <section id="meal-detail" class="mt-8 w-full p-4 flex flex-col items-center justify-center">
        
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