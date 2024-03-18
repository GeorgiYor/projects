const myLibrary = [];

function Book() {
    for(let i = 0; i<myLibrary.length; i++){
        let givenBook = myLibrary[i]
        console.log(`The name is ${givenBook[0]}, author is ${givenBook[1]}`)
    }
}
let i = 0
const mainDiv = document.getElementById("divvie")
function addBookToLibrary() {
    let index = i

    const newDiv = document.createElement("div");
    const name = document.createElement("h3")
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const status = document.createElement("p")
    const del = document.createElement("button");
    del.innerText = "Изтриване"

    newDiv.classList.add("de")
    status.classList.add("status")

  


    let arr = []
    arr.push(document.getElementById("name").value)
    arr.push(document.getElementById("author").value)
    arr.push(document.getElementById("pages").value)
    if(document.getElementById("status").checked == 1){
        document.getElementById("status").value = "прочетена"
        arr.push(document.getElementById("status").value)
    }else{
        document.getElementById("status").value = "непрочетена"
        arr.push(document.getElementById("status").value)
    }
    
    
    name.innerText = arr[0]
    author.innerText = arr[1]
    pages.innerText = `страници: ${arr[2]}`
    status.innerText = arr[3]

    del.addEventListener("click", () => {
        newDiv.style.display = "none"
        myLibrary.splice(index, 1)
        i--
    });

    if(status.innerText == "прочетена"){
        status.classList.remove("statusred")
        status.classList.add("statusgr")
    }else{
        status.classList.add("statusred")
        status.classList.remove("statusgr")
    }
   
    status.addEventListener("click", () => {
        console.log(status.innerText)
        if(status.innerText == "прочетена"){
            status.innerText = "непрочетена"
            arr[3] = "непрочетена"
            status.classList.add("statusred")
            status.classList.remove("statusgr")
        }else{
            status.innerText = "прочетена"
            arr[3] = "прочетена"
            status.classList.add("statusgr")
            status.classList.remove("statusred")
        }
    });
   

    newDiv.append(name, author, pages, status, del)
    mainDiv.append(newDiv)

    myLibrary.push(arr)

    i++
}

function openDialog(){
    document.getElementById("dia").showModal()
}
function closeDialog(){
    document.getElementById("dia").close()
}

