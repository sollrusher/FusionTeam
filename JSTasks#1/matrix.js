function spiralMatrix( dimension ) {
  let matrix = [],
    x = y = 0,
    steps = dimension - 1; // Кол-во шагов в ту или иную сторону
    
  for(let i = 0; i < dimension; i++) matrix[i] = []; // Создаем матрицу

  for(let i = 1; i <= Math.pow(dimension, 2); i++) {
    matrix[x][y] = i; // Задаем значение

    // Меняем кол-во шагов
    if(x === steps && y === dimension - steps - 1) steps--;

    // Движение "вправо"
    if((y >= x && y < steps) || (x - 1 === y && x === dimension - steps - 1)) y++;
    // Движение "влево"
    else if(y <= x && y >= dimension - steps) y--;
    // Движение "вниз"
    else if(x <= y && x < steps) x++;
    // Движение "вверх"
    else if(x >= y && x >= dimension - steps) x--;
  }
  
  return matrix;
}

console.log(spiralMatrix(2));
console.log(spiralMatrix(3));
console.log(spiralMatrix(4));
console.log(spiralMatrix(5));