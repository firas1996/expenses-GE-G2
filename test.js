let t1 = [1, 2, 3, 4];
let t2 = [2, 2, 2, 2];
let t3 = [15, 3, 5, 2];
console.log(
  t1.reduce((a, b) => {
    return a + b;
  })
);
console.log(
  t1.reduce((a, b) => {
    return a * b;
  })
);
console.log(
  t2.reduce((a, b) => {
    return a * b;
  })
);
