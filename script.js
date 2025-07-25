let count = 0;
const countElement = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function() {
  count++;
  countElement.innerText = countt; // ❌ Bug: 'countt' is not defined
});

resetBtn.addEventListener("click", function() {
  count = 0;
  countElement.innerText = count;
});

console.log("Counter App Loaded")
