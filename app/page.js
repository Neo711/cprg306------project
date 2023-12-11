// Example: Function to load ingredients from a JSON file or API
function loadIngredients() {
  fetch('path-to-ingredients.json')
      .then(response => response.json())
      .then(data => {
          displayIngredients(data);
      })
      .catch(error => console.error('Error loading ingredients:', error));
}

function displayIngredients(ingredients) {
  const container = document.getElementById('ingredient-list');
  ingredients.forEach(ingredient => {
      const item = document.createElement('div');
      item.className = 'ingredient';
      item.innerHTML = `<h3>${ingredient.name}</h3><p>${ingredient.description}</p>`;
      container.appendChild(item);
  });
}
