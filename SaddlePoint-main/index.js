function saddlePoints(matrix) {
  let result = [];
  
  for (let row of matrix) {
    let max = Math.max(...row);
    let indices = [];
    
    for (let [index, value] of row.entries()) {
      if (value === max) {
        indices.push(index);
      }
    }
    
    for (let index of indices) {
      let pos = {
        row: matrix.indexOf(row),
        column: index,
      };
      
      let min = max;
      for (let row of matrix) {
        min = Math.min(min, row[pos.column]);
      }
    
      if (min === max) {
        pos.row += 1;
        pos.column += 1;
        result.push(pos);
      }
    } 
  }
  
  return result;
};

let input = [
        [3, 1, 3],
        [3, 2, 4],
      ];
let expected = [
      { row: 1, column: 1 },
      { row: 1, column: 3 },
    ];
let result = saddlePoints(input);

if (result === expected) {
  console.log(":)");
} else {
  console.log("result:");
  console.log(result);
  console.log();
  console.log("expected:");
  console.log(expected);
}