import headerHeightCalculate from "./headerHeightCalculate.js";

const setHeaderHeight = () => {
  const headerHeight = headerHeightCalculate();
  const main = document.querySelector('.main');
  const menu = document.querySelector('.menu');
  const menuInner = document.querySelector('.menu__inner');

  main.style.marginTop = `${headerHeight}px`;
  menu.style.paddingTop = `${headerHeight}px`;
  menuInner.style.paddingBottom = `${headerHeight}px`;

}

export default setHeaderHeight;