const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item');
console.log('Кількість категорій:', categoryItems.length);

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsList = category.querySelectorAll('ul li');

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryItemsList.length}`);
});