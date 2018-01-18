// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


var getElementsByClassName = function(className) {
  var result = [],
  body = document.body;
  (function traverseDOM (node, fn) {
    if (node.nodeType === 1) {
      fn(node, className)
    }
    node = node.firstChild;
    while (node) {
      traverseDOM(node, fn);
      node = node.nextSibling;
    }
  }
  (body, function (elem, cName) {
    if ((' ' + (elem.className || elem.getAttribute('class')) + ' ').indexOf(' ' + cName + ' ') >= 0) {
      result.push(elem);
    }
  }));
  return result;
};
