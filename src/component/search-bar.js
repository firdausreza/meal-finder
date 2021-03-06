import {cssomSheet, create} from "twind";

const sheet = cssomSheet({target: new CSSStyleSheet()});

const { tw } = create({sheet});

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
    this.shadowRoot.adoptedStyleSheets = [sheet.target];
  }

  connectedCallback() {
    this.render();
  }

  set onSearch(event) {
    this._onSearch = event;
    this.render();
  }

  set randomSearch(event) {
    this._randomSearch = event;
    this.render()
  }

  get searchValue() {
    return this.shadowDOM.querySelector('#search-field').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <section id="search-component" class="${tw`flex flex-row justify-center w-full mt-8`}">
        <input id="search-field" type="search" class="${tw`p-4 w-3/5 font-bold rounded-tl-xl rounded-bl-xl focus:outline-none text-black`}" placeholder="Search your meal here..." />
        <button id="search-button" type="submit" class="${tw`p-4 font-bold bg-green-400 rounded-tr-xl rounded-br-xl`}">
          Search
        </button>
        <button type="submit" id="randomize" class="${tw`ml-4 p-4 font-bold text-brown-soft rounded-xl bg-yellow-200`}">
          Random
        </button>
      </section>
    `;
    this.shadowDOM.querySelector('#search-button').addEventListener("click", this._onSearch);
    this.shadowDOM.querySelector('#randomize').addEventListener("click", this._randomSearch);
  }
}

customElements.define('search-bar', SearchBar)