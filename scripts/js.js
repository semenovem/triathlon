

// w = 5; h = 5;
// 1,2,3,4,5
function shake(w, h) {
  const res = new Array(w).fill(true).map(() => new Array(h).fill(null));
  let num = 1;
  let x = 0, y = 0;

  while (true) {
    if (res[y][x] === null) {
      res[y][x] = num++;
    } else {
      break;
    }

    if ((y === 0 || res[y-1][x] !== null) && res[y][x+1] === null) {
      x++;
      continue;
    }

    if (res[y][x+1] !== null && res[y+1] && res[y+1][x] === null) {
      y++;
      continue;
    }

    if ((!res[y+1] || res[y+1][x] !== null) && res[y][x-1] === null) {
      x--;
      continue;
    }

    if (res[y][x-1] !== null && res[y-1] && res[y-1][x] === null) {
      y--;
      continue;
    }
  }

  return res;
}