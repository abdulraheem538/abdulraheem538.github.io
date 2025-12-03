function calcnew() {
  
  let original = document.getElementById('original').value;
  let newval = document.getElementById('newval').value;
  
  let result = ((newval-original)/original)*100;
 if(result>0){
 document.getElementById('result').innerText =
    "From "+ original+ " to "+ newval + " is a "+ result + "% Increase";
 } else {
   result = -result;
   document.getElementById('result').innerText =
    "From "+ original+ " to "+ newval + " is a "+result + "% Decrease";
 }
}