const menuItemsAnimationCalculate = () => {
  const menuItems = document.querySelectorAll('.menu__item');
  const stepPixels = 50;
  const stepDelay = 0.1;


  menuItems.forEach((item, idx) => {
    const multiplier = idx + 1;
    item.style.transform = `translateX(${multiplier * stepPixels}px)`
    item.style.transitionDelay = `${multiplier * stepDelay}s`
  })
}

export default menuItemsAnimationCalculate;