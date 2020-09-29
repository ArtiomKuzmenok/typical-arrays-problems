
exports.min = function min (array) {
  if (array == undefined) return ('0');
  else if (array.length == '0') return ('0');
  let minimum = array[0];
  for  (i = 0; i<array.length; i++) {
    if (array[i] < minimum ) {
      minimum = array[i];
    }
  }
  return minimum;
};

exports.max = function max (array) {
  if (array == undefined) return ('0');
  else if (array.length == '0') return ('0');
  let maximum = array[0];
  for (i = 0; i<array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return maximum;
};

exports.avg = function avg (array) {
  if (array == undefined) return ('0');
  else if (array.length == '0') return ('0');
  let sum = 0;
      for (i = 0; i<array.length; i++){
          sum += array[i];
      }
  let avarege = sum / array.length;
  return avarege;
}
