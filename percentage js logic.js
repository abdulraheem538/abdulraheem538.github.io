function calcPercentage() {
  // get values from input
  let percent = document.getElementById("percent").value;
  let number = document.getElementById("number").value;

  // logic: (X / 100) * number
  let result = (percent / 100) * number;

  // show result
  document.getElementById("result").innerText = 
    percent + "% of " + number + " = " + result;
}
