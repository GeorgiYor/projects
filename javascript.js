
let frNumber = 0
let sdNumber = 0
let operator = ""
const add = function(){
   frNumber = Number(document.getElementById("firstNumber").value)
   document.getElementById("smallScreen").value = frNumber + "+"
   document.getElementById("firstNumber").value = ""
   operator = "+"
}

const substract = function(){
   frNumber = Number(document.getElementById("firstNumber").value)
   document.getElementById("smallScreen").value = frNumber + "-"
   document.getElementById("firstNumber").value = ""
   operator = "-"
}

const multiply = function(){
   frNumber = Number(document.getElementById("firstNumber").value)
   document.getElementById("smallScreen").value = frNumber + "*"
   document.getElementById("firstNumber").value = ""
   operator = "*"
}

const divide = function(){
   frNumber = Number(document.getElementById("firstNumber").value)
   document.getElementById("smallScreen").value = frNumber + "/"
   document.getElementById("firstNumber").value = ""
   operator = "/"
}

function equal() {

      
      sdNumber=Number(document.getElementById("firstNumber").value)
      sdNumber = +sdNumber
      document.getElementById("smallScreen").value = document.getElementById("smallScreen").value + sdNumber
      if(operator == "+"){
         document.getElementById("firstNumber").value = frNumber + sdNumber
      }else if(operator == "-"){
         document.getElementById("firstNumber").value = frNumber - sdNumber
      }else if(operator == "*"){
         document.getElementById("firstNumber").value = frNumber * sdNumber
      }else if(operator == "/"){
         document.getElementById("firstNumber").value = frNumber / sdNumber
      }
      

}

const cl = function(){
    document.getElementById("firstNumber").value = ""
    document.getElementById("smallScreen").value = ""
}









const zero = () =>{
   return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 0
}
const one = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 1
 }
 const two = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 2
 }
 const three = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 3
 }

 const four = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 4
 }
 const five = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 5
 }
 const six = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 6
 }
 const seven = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 7
 }
 const eight = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 8
 }
 const nine = () =>{
    return document.getElementById("firstNumber").value = document.getElementById("firstNumber").value + 9
 }



// 
  // for(let i = 0; i<inputValue.length; i++){
    //     something.push(inputValue[i])
    //     console.log(Array(inputValue[i]))
    //     if(something[i] != "+" && something[i] != "-" && something[i] != "*" &&something[i] != "/"){
    //         givenNumber+=something[i]
    //     }else{

    //     }
    // }

