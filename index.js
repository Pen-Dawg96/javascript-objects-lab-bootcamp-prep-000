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
  var obj = { prop: 1 }
  var newObj = (obj, undefined)
  delete newObj.prop
}
function destructivelyDeleteFromObjectByKey(object, key){
  
}