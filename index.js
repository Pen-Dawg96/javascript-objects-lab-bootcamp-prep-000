var recipes = { object: 3}

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
  var obj = { flour: '2 cups' }
  var newObj = Object.assign({milk : '1 cup'}, obj)
  delete newObj[key]
  return obj
}
function destructivelyDeleteFromObjectByKey(object, key){
 delete object[key]
 return object
}