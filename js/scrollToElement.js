import headerHeightCalculate from "./headerHeightCalculate.js";

const scrollToElement = () => {

  const headerBurgerBtn = document.querySelector('.burger');
  const body = document.querySelector('body');
  const html = document.querySelector('html');

  const anchors = document.querySelectorAll('[data-goto]')
  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()

      html.classList.remove('_menu-open')
      body.classList.remove('_menu-open')

      setTimeout(() => {
        const blockSelector = anchor.getAttribute('data-goto')
        const block = document.querySelector(blockSelector);

        const rect = block.getBoundingClientRect();

        const yCoord = rect.top;

        const headerHeight = headerHeightCalculate();

        if (block) {
          window.scrollTo({
            top: yCoord + window.scrollY - headerHeight - 20,
            behavior: 'smooth'
          })
        }
      }, 20)



    })
  })
}

export default scrollToElement;