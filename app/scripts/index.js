import dieterRamWorks from "./dieterRamWorks.js";
import "../components/NavBar.js";
import "../components/Footer.js"
import "../components/DetailModal.js"
console.log(dieterRamWorks);

class App {
  constructor() {

  }
}


const $ = (selectors)=> {
    return document.querySelector(selectors)
  }

$(".ssa").style.opacity = "1"


new App();
