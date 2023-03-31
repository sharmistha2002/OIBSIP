function convertTemprature() {
  let val = document.getElementById("input-value");
  let result = document.getElementById("result");
  let input = document.getElementById("input");


  val.addEventListener("keyup", convertTemprature);
  input.addEventListener("change", convertTemprature);
 
  let inputValue = input.value;
 
  // celsius
  if (inputValue === "celsius" ){
    
    result.value = Number((val.value * 9) / 5) + 32 +"°F";
  }
 

  // fahrenhiet
  if (inputValue === "fahrenhiet" ){
    
    result.value = Number((val.value - 32) * 5) / 9+"°c";
  }
    
  }

function resetForm(){
  document.getElementById("myForm").reset();
} 