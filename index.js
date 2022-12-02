text.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("addBtn").click();
    }
}
)

function addToDo() {
    
    let text = document.getElementById("text").value;
    let allToDo = document.getElementById("allToDo");
 
    let newToDo = document.createElement('li');
    let newToDoText = document.createTextNode(text);
    
    let deleteBtn = document.createElement('button');
    let deleteBtnText = document.createTextNode("X");
    
    deleteBtn.appendChild(deleteBtnText); 
    newToDo.appendChild(newToDoText);
    newToDo.appendChild(deleteBtn);   
    allToDo.appendChild(newToDo);;
    let toDoCount = allToDo.childElementCount; 
    newToDo.setAttribute("id", `newToDo${toDoCount}`);
    deleteBtn.setAttribute("id", `deleteBtn${toDoCount}`);
    deleteBtn.setAttribute("onclick", "deleteToDo(this.id)");

}

function clearTextBox() {
    let text = document.getElementById("text");
    text.value = "";
}

function deleteToDo(clickedId) {
    document.getElementById(clickedId).parentElement.remove();
}


