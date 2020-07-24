var indexOf = function (stra, strb) {
  var num = stra.length - strb.length + 1;
  var len = strb.length;
  stra = stra.split('');
  var newArr = [];
  for (let i = 0; i < num; i++) {
    var li = stra.slice(i, len + i);
    console.log(li)
    newArr.push(li);
  }
  console.log(newArr)
  var indexof = null;
  for (let i = 0; i < newArr.length; i++) {
    if (strb === newArr[i].join('')) {
      indexof = i;
      break;
    }
  }
  if (indexof == null) {
    return -1;
  }
  return indexof;
}
var i = indexOf('abcd', 'cd');
console.log(i)