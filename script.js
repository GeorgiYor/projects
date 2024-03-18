function scretch(){
    let userInput = document.getElementById("slider").value
    

    let gridContainer = document.getElementById("grid-container")
    let string = "1fr ";
    let neshto = ""

    
        if(userInput >= 64){
            userInput = 64;
        }
        for(let i = 1; i<=userInput;i++){
            neshto = neshto + string
            
        }
  
   

    gridContainer.style.gridTemplateColumns = neshto


    for(let i = 1; i <=userInput*userInput; i++){
        const div = document.createElement("div");
    
        div.onmouseenter = function() {mouseUp()};
        div.classList.add("grid-item");
        
        function mouseUp() {
            div.style.backgroundColor = "rgb(0, 0, 0)"
        }

        gridContainer.append(div)

    }


   

}
scretch()
