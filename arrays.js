var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, e){
  var arr = a;
  arr.unshift(e);
  return arr;
}

function DestructivelyAddElementToBeginningOfArray(a, e){
  a.unshift(e);
  return a;
}