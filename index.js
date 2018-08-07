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
 var obj = { props: 3}
 var newObj = Object.assign({}, obj, 'prop')
 delete newObj.props
}
function destructivelyDeleteFromObjectByKey(object, key){
  
}