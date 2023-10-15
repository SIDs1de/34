const showMore = () => {

  const elements = ['catalog', 'popular']

  const catalogList = document.querySelector('.catalog__list');
  const popularList = document.querySelector('.popular__list');
  if (window.innerWidth <= 555) {

    const catalogListHeight = catalogList.clientHeight
    const popularListHeight = popularList.clientHeight

    const moreBtns = document.querySelectorAll('.more-btn');


    moreBtns.forEach(moreBtn => {
      moreBtn.parentNode.querySelector('.grid').setAttribute('data-maxheight', moreBtn.parentNode.querySelector('.grid').clientHeight + 'px')

      moreBtn.addEventListener('click', () => {
        moreBtn.parentNode.querySelector('.grid').style.maxHeight = moreBtn.parentNode.querySelector('.grid').getAttribute('data-maxheight')
        moreBtn.style.display = 'none'
      })
    })

    elements.forEach(el => {
      const items = document.querySelectorAll(`.${el}__item-wrapper`);
      const quantityElements = 2;

      let height = 0;
      for (let i = 0; i < quantityElements; i++) {
        height += items[i].offsetHeight
      }

      const list = document.querySelector(`.${el}__list`);

      const style = getComputedStyle(list);

      const offset = parseFloat(style.rowGap.slice(0, -2)) * (quantityElements - 1)

      list.style.maxHeight = `${height + offset + 1}px`
    })


  } else {
    catalogList.style.maxHeight = `100%`
    popularList.style.maxHeight = `$100%`
  }
}

export default showMore;