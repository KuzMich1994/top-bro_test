const dropDownSelect = () => {
  const blogersFilterSelectorList = document.querySelectorAll('.blogers__filter-selector-list');
  const blogersFilterSelectorItem = document.querySelectorAll('.blogers__filter-selector-item');
  const blogersFilterSelector = document.querySelectorAll('.blogers__filter-selector');
  const blogers = document.querySelector('.blogers');
  const blogersFilterSelectorOutput = document.querySelectorAll('.blogers__filter-selector-output');

  const toggleSelect = index => {
    for (let i = 0; i < blogersFilterSelectorList.length; i++) {
      if (index === i) {
        blogersFilterSelector[i].classList.toggle('blogers__filter-selector_active');
        blogersFilterSelectorList[i].classList.toggle('blogers__filter-selector-list_active');
      } else {
        blogersFilterSelector[i].classList.remove('blogers__filter-selector_active');
        blogersFilterSelectorList[i].classList.remove('blogers__filter-selector-list_active');
      }
    }
  };

  const changeTextContent = (text, target) => {
    target.textContent = text;
  };

  if (blogers) {
    blogers.addEventListener('click', e => {
      let target = e.target;
      let target2 = e.target;

      target = target.closest('.blogers__filter-selector');

      if (target) {
        blogersFilterSelector.forEach((item, index) => {
          if (target === item) {
            toggleSelect(index);
          }
        });
      }
      if (target2.matches('.blogers__filter-selector-item')) {
        blogersFilterSelectorItem.forEach((item) => {
          if (target2 === item) {
            const output = target2.parentElement.parentElement.children[0];
            changeTextContent(item.textContent, output);
          }
        });
      }
    });
  }
};

export default dropDownSelect;
