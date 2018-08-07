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
 var obj = { eggs: 3}
 var newObj = Object.assign({ prop1: 1}, obj)
 deleteFromObjectByKey(obj, 'prop')
}
function destructivelyDeleteFromObjectByKey(object, key){
  
}