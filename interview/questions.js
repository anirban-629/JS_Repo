// [c1] Question 01
// [c1] Question 01

Array.prototype.extraProperty = "ABC";
const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 8, 9, 10];

for (let ele in arr) {
  console.log(ele);
}

for (let ele in arr1) {
  console.log(ele);
}

for (let ele in arr) {
  if (arr.hasOwnProperty(ele)) {
    console.log(ele);
  } else {
    console.log(ele, " - is a added extra property");
  }
}
