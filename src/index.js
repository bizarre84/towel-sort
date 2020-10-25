
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let r = [];
  if(!matrix || !(matrix.length > 0)) return r;
  for (let i=0; i<matrix.length; i++) {
      if (i%2==0) {
        r = r.concat(matrix[i]);
      } else {
          r = r.concat(matrix[i].reverse());
      }
  }
  return r;
}
