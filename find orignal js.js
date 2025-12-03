function calcOrignal() {
    let percentage =document.getElementById('percentage').value ;
     let result =document.getElementById('result').value ;
    
    let orignal = (result/percentage) * 100;
    
    document.getElementById('orignal').innerText =
     "if "+ percentage+"% =" +result+ " then the original number is "+orignal; 
}