var recipes = { eggs: 3}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
  
  updateObjectWithKeyAndValue(recipes, 'chocolate', '1 cup')
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  obect[key] = value
  return object
  
  destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
}
