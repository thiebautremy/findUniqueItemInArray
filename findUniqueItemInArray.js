const N = [1, 2, 3, 4, 5, 2, 3, 4, 5];
let result = "";
for (let i = 0; i < N.length; i++) {
  if (!N.filter((item, index) => index !== i).includes(N[i])) result = N[i];
}
console.log(result);
