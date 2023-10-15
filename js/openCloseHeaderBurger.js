const openCloseHeaderBurger = () => {
  const headerBurgerBtn = document.querySelector('.burger');
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  headerBurgerBtn.addEventListener('click', () => {
    body.classList.toggle('_menu-open')
    html.classList.toggle('_menu-open')
  })
}

export default openCloseHeaderBurger;