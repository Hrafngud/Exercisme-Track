export const saddlePoints = (matrix) => {
  let result = [];
  
  for (let row of matrix) {
    let num = Math.max(...row);
    let index = {
      row: matrix.indexOf(row),
      column: row.indexOf(num),
    };
    
    let min = num;
    for (let row of matrix) {
      min = Math.min(min, row[index.column]);
    }

    if (min === num) {
      index.row += 1;
      index.column += 1;
      result.push(index);
    }
  }
  
  return result;
};