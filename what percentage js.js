function calcNumber(){
  let value = document.getElementById('value').value;
  let total = document.getElementById('total').value;
  
  let result = (value/total) * 100;
  
  document.getElementById("result").innerText = 
  value + " is " + result + "% of " + total;
}