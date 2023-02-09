const divArr = document.querySelectorAll(".boxes");

// console.log(divArr[0].dataset.num);
let num;
let space = num * 10;
divArr.forEach((d) => {
  d.addEventListener("mouseover", () => {
    num = d.dataset.num;
    d.style.transform = `translate(${space}%)`;
  });

  d.addEventListener("mouseout", () => {
    num = 0;
    d.style.transform = `translate(${space}%)`;
  });
});

// const box1 = divArr[0];
// box1.addEventListener("click", () => {
//   num = box1.dataset.num;
//   box1.style.transform = `translate(${num * 10}%)`;
// });

console.log(0 == false);
