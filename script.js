
let pobedi = 0
let ravensta = 0
let zagubi = 0

function showDivGame(){
    document.getElementById("divgame").style.display = "flex";
    document.getElementById("skrita").style.display = "none";
}

function getComputerChoice(){
    document.getElementById("rezultat").innerText = ""
    
    izbor = izbor.toLowerCase()

    for(let i=0; i<1; i++){

    let choiceByNumber = Math.floor(Math.random(3)*3)
    let choice = ""
    let izbor = ""
    
  
   
     
    if(choiceByNumber < 1){
        choice = "rock"
  
    }else if(choiceByNumber < 2){
        choice = "papper"

    }else{
        choice = "scissors"
        
    }

        if(choice == "rock" && izbor =="хартия"){
            
            pobedi++
        }
        else if(choice == "rock" && izbor =="ножица"){
            
            zagubi++
        }
        else if(choice == "rock" && izbor== "камък"){
            
            ravensta++
        }
        else if(choice == "papper" && izbor =="хартия"){
            
            ravensta++
        }
        else if(choice == "papper" && izbor =="ножица"){
            
            pobedi++
        }
        else if(choice == "papper" && izbor== "камък"){
           
            zagubi++
        }
        else if(choice == "scissors" && izbor =="хартия"){
          
            zagubi++
        }
        else if(choice == "scissors" && izbor =="ножица"){
         
            ravensta++
        }
        else if(choice == "scissors" && izbor== "камък"){
          
            pobedi++
        }
        
        document.getElementById("pobedi").innerText = pobedi
        document.getElementById("zagubi").innerText = zagubi
        document.getElementById("ravenstvo").innerHTML =  `Този рунд имаше ${ravensta} равенства`

        if(pobedi == 5){
            document.getElementById("rezultat").innerText = "Спечели войната! Браво на теб!"
            pobedi = 0
            zagubi = 0
            ravensta = 0
       
            break
            
        }
        else if(zagubi == 5){
            document.getElementById("rezultat").innerText = "Загуби войната... Човечеството разчиташе на теб!"
            pobedi = 0
            zagubi = 0
            ravensta = 0
      
            break
        }
        

    }
    
    
    

}
function kamuk(){

    document.getElementById("rezultat").innerText = ""
    let izbor = "Камък"
    izbor = izbor.toLowerCase()

    for(let i=0; i<1; i++){

    let choiceByNumber = Math.floor(Math.random(3)*3)
    let choice = ""
    
    
   
     
    if(choiceByNumber < 1){
        choice = "rock"
        console.log(`Kompa izbra ${choice}`)
    }else if(choiceByNumber < 2){
        choice = "papper"
        console.log(`Kompa izbra ${choice}`)
    }else{
        choice = "scissors"
        console.log(`Kompa izbra ${choice}`)
    }

        if(choice == "rock" && izbor =="хартия"){
            
            pobedi++
        }
        else if(choice == "rock" && izbor =="ножица"){
            
            zagubi++
        }
        else if(choice == "rock" && izbor== "камък"){
            
            ravensta++
        }
        else if(choice == "papper" && izbor =="хартия"){
            
            ravensta++
        }
        else if(choice == "papper" && izbor =="ножица"){
            
            pobedi++
        }
        else if(choice == "papper" && izbor== "камък"){
           
            zagubi++
        }
        else if(choice == "scissors" && izbor =="хартия"){
          
            zagubi++
        }
        else if(choice == "scissors" && izbor =="ножица"){
         
            ravensta++
        }
        else if(choice == "scissors" && izbor== "камък"){
          
            pobedi++
        }
        
        document.getElementById("pobedi").innerText = pobedi
        document.getElementById("zagubi").innerText = zagubi
        document.getElementById("ravenstvo").innerHTML =  `Този рунд имаше ${ravensta} равенства`

        if(pobedi == 5){
            document.getElementById("rezultat").innerText = "Спечели войната! Браво на теб!"
            pobedi = 0
            zagubi = 0
            ravensta = 0
       
            break
            
        }
        else if(zagubi == 5){
            document.getElementById("rezultat").innerText = "Загуби войната... Човечеството разчиташе на теб!"
            pobedi = 0
            zagubi = 0
            ravensta = 0
      
            break
        }
        

    }
   
    
}


function hartiq(){

    document.getElementById("rezultat").innerText = ""
    let izbor = "хартия"
    izbor = izbor.toLowerCase()

    for(let i=0; i<1; i++){

    let choiceByNumber = Math.floor(Math.random(3)*3)
    let choice = ""
    
    
   
     
    if(choiceByNumber < 1){
        choice = "rock"
        console.log(`Kompa izbra ${choice}`)
    }else if(choiceByNumber < 2){
        choice = "papper"
        console.log(`Kompa izbra ${choice}`)
    }else{
        choice = "scissors"
        console.log(`Kompa izbra ${choice}`)
    }

        if(choice == "rock" && izbor =="хартия"){
            
            pobedi++
        }
        else if(choice == "rock" && izbor =="ножица"){
            
            zagubi++
        }
        else if(choice == "rock" && izbor== "камък"){
            
            ravensta++
        }
        else if(choice == "papper" && izbor =="хартия"){
            
            ravensta++
        }
        else if(choice == "papper" && izbor =="ножица"){
            
            pobedi++
        }
        else if(choice == "papper" && izbor== "камък"){
           
            zagubi++
        }
        else if(choice == "scissors" && izbor =="хартия"){
          
            zagubi++
        }
        else if(choice == "scissors" && izbor =="ножица"){
         
            ravensta++
        }
        else if(choice == "scissors" && izbor== "камък"){
          
            pobedi++
        }
        
        document.getElementById("pobedi").innerText = pobedi
        document.getElementById("zagubi").innerText = zagubi
        document.getElementById("ravenstvo").innerHTML =  `Този рунд имаше ${ravensta} равенства`

        if(pobedi == 5){
            document.getElementById("rezultat").innerText = "Спечели войната! Браво на теб!"
            pobedi = 0
            zagubi = 0
            ravensta = 0
       
            break
            
        }
        else if(zagubi == 5){
            document.getElementById("rezultat").innerText = "Загуби войната... Човечеството разчиташе на теб!"
            pobedi = 0
            zagubi = 0
            ravensta = 0
      
            break
        }
        

    }
    console.log(`rezultat: ti imash ${pobedi} pobedi, ${zagubi} zagubi, ${ravensta} ravensta`)
    
}

function nojica(){

    document.getElementById("rezultat").innerText = ""
    let izbor = "ножица"
    izbor = izbor.toLowerCase()

    for(let i=0; i<1; i++){

    let choiceByNumber = Math.floor(Math.random(3)*3)
    let choice = ""
    
    
   
     
    if(choiceByNumber < 1){
        choice = "rock"
        console.log(`Kompa izbra ${choice}`)
    }else if(choiceByNumber < 2){
        choice = "papper"
        console.log(`Kompa izbra ${choice}`)
    }else{
        choice = "scissors"
        console.log(`Kompa izbra ${choice}`)
    }

        if(choice == "rock" && izbor =="хартия"){
            
            pobedi++
        }
        else if(choice == "rock" && izbor =="ножица"){
            
            zagubi++
        }
        else if(choice == "rock" && izbor== "камък"){
            
            ravensta++
        }
        else if(choice == "papper" && izbor =="хартия"){
            
            ravensta++
        }
        else if(choice == "papper" && izbor =="ножица"){
            
            pobedi++
        }
        else if(choice == "papper" && izbor== "камък"){
           
            zagubi++
        }
        else if(choice == "scissors" && izbor =="хартия"){
          
            zagubi++
        }
        else if(choice == "scissors" && izbor =="ножица"){
         
            ravensta++
        }
        else if(choice == "scissors" && izbor== "камък"){
          
            pobedi++
        }
        
        document.getElementById("pobedi").innerText = pobedi
        document.getElementById("zagubi").innerText = zagubi
        document.getElementById("ravenstvo").innerHTML =  `Този рунд имаше ${ravensta} равенства`

        if(pobedi == 5){
            document.getElementById("rezultat").innerText = "Спечели войната! Браво на теб!"
            pobedi = 0
            zagubi = 0
            ravensta = 0
       
            break
            
        }
        else if(zagubi == 5){
            document.getElementById("rezultat").innerText = "Загуби войната... Човечеството разчиташе на теб!"
            pobedi = 0
            zagubi = 0
            ravensta = 0
      
            break
        }
        

    }
   
    
}

