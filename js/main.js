// imports
import setHeaderHeight from "./setHeaderHeight.js";
import openCloseHeaderBurger from "./openCloseHeaderBurger.js";
import menuItemsAnimationCalculate from "./menuItemsAnimationCalculate.js";
import slidersActivate from "./slidersActivate.js";
import scrollToElement from "./scrollToElement.js";
import showMore from './showMore.js';
import wowActivate from "./wowActivate.js";

document.addEventListener('DOMContentLoaded', () => {

  const main = () => {
    setHeaderHeight();
    openCloseHeaderBurger();
    menuItemsAnimationCalculate();
    slidersActivate();
    scrollToElement();
    showMore();
    wowActivate();
  }

  // Запуск функций
  main();

  let lastWidthValue = window.innerWidth

  window.addEventListener('resize', () => {
    let newWidthValue = window.innerWidth
    if (lastWidthValue != newWidthValue) {
      lastWidthValue = newWidthValue
      setHeaderHeight();
      showMore();
    }
  })

})