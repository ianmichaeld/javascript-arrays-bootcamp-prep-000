var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, e){
  var arr = [...a];
  arr.unshift(e);
  return arr;
}

function destructivelyAddElementToBeginningOfArray(a, e){
  a.unshift(e);
  return a;
}

function addElementToEndOfArray(a, e){
  var arr = [...a];
  arr.push(e);
  return arr;
}

function destructivelyAddElementToEndOfArray(a, e){
  a.push(e);
  return a;
}

accessElementInArray(a, i){
  a[i];
}