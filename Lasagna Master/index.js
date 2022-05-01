function cookingStatus(remainingTime) {
    if (remainingTime > 0) {
    return 'Not done, please wait.';
    } else if ( remainingTime == 0) {
      return 'Lasagna is done.';
    } else {
      return 'You forgot to set the timer.';
    }
}

function preparationTime(layers,averagePrepTime) {
    switch(averagePrepTime) {
      case 0:
      return layers.length * 2;
      break;
      case undefined:
      return layers.length * 2;
      default:
      return layers.length * averagePrepTime;
  }
}

function quantities(layers) {
  let ingredients = {
  noodles : 0,
  sauce : 0,
}
  for (let i in layers) {
    switch (layers[i]) {
      case 'sauce':
      ingredients.sauce = ingredients.sauce + 0.2;
      break;
      case 'noodles':
      ingredients.noodles = ingredients.noodles + 50;
      break;
      default:
      break;
    }  
  }
  return ingredients;
}

function addSecretIngredient(friendsList, myList) {
  let secretIngredient = friendsList[friendsList.length-1]
  myList.push(secretIngredient);
}

function scaleRecipe(recipe,scale) {
  const newRecipe = {};
  for (let i in recipe) {
  newRecipe[i] = recipe[i] * scale / 2;
  }
  return newRecipe;
}
