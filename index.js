var recipes = { eggs: 3}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
  
  updateObjectWithKeyAndValue(recipes, 'chocolate', '1 cup')
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
  
  destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
}
function deleteFromObjectByKey(object, key){
  var newRecipe = Object.assign({ flour: '2 cups'}, recipes)
  delete newRecipe.flour
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete recipe.eggs
}