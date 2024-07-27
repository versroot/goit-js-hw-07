const categories = document.querySelectorAll('li.item');
console.log(`Number of categories ${categories.length}`);
categories.forEach(category => {
  const heading = category.querySelector('h2');
  console.log(`Category: ${heading.textContent}`);
  const elements = category.querySelectorAll('ul > li');
  console.log(`Elements: ${elements.length}`);
});
