var array = [0, 1];

var MAX = 1000;

for (var i = 1; i < MAX; i++) {
  var newvalue = array[i] + array[i];
  array.push(newvalue);
}

console.log(array);
