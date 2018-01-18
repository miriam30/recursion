// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var array = [];
  var newObj = {};
  if(typeof obj[0] ==== "undefined" || typeof obj[0] === "symbol" || typeof obj[0] === "function"){
    array.push(null)
    return array.concat(stringifyJSON(obj.slice(obj[0])))
  }
  if(typeof obj === "number"||typeof obj === null || typeof obj=== "boolean"){
    return obj + " " ;
  }
  else if(obj === "string"){
    return obj;
  }
  else if(Array.isArray(obj)){
    obj.forEach(stringify(element))
  }
  return '[' + arr + ']'
};

//
/*var stringifyJSON = function(obj) {
  // your code goes here

if()
Array.isArray(obj){
return []
}




if(typeof obj[0] ==== "undefined" || typeof obj[0] === "symbol" || typeof obj[0] === "function"){
return null
}
if(typeof obj[0] === "number"){
  "'"+ obj[0]+ "'"
}
if(typeof obj[0] === "string"){

}

  arr.push("")
    return arr.concat(stringifyJSON(obj.slice(obj[0])))*/
