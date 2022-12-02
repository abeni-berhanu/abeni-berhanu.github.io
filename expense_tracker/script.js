const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addExpense);
addBtn.addEventListener("click", clearInputBox);

function addExpense() {

    /**
    *  @type HTMLInputElement
    */
    let  nameInput = document.getElementById("nameInput").value;
    /**
     *  @type HTMLInputElement
    */
    let dateInput = document.getElementById("dateInput").value;
    /**
    *  @type HTMLInputElement
    */
    let priceInput = document.getElementById("priceInput").value;

    if (nameInput == "" || dateInput == "" || priceInput == "") {
        alert("Please complete the form before you hit Add Expense");
    }
    else {

        /**
         * @type HTMLTbodyElement
         */

        let allExpenses = document.getElementById("allExpenses");
        let tableRaw = document.createElement("tr");
        let name = document.createElement("td");
        name.innerHTML = nameInput;
        let date = document.createElement("td");
        date.innerHTML = dateInput;
        let price = document.createElement("td");
        price.innerHTML = priceInput;

        let count = allExpenses.childElementCount + 1;
        tableRaw.setAttribute("id", `tRaw${count}`);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.setAttribute("id", `deleteBtn${count}`);
        deleteBtn.setAttribute("onclick", "deleteRaw(this.id)");
        let deleteBtnCell = document.createElement("td");
        deleteBtnCell.appendChild(deleteBtn);

        tableRaw.appendChild(name);
        tableRaw.appendChild(date);
        tableRaw.appendChild(price);
        tableRaw.appendChild(deleteBtnCell);

        allExpenses.appendChild(tableRaw);
    }


}

function deleteRaw(targetId) {
    document.getElementById(targetId).parentElement.parentElement.remove();
}

function clearInputBox() {
     /**
    *  @type HTMLInputElement
    */
      let  nameInput = document.getElementById("nameInput");
      /**
       *  @type HTMLInputElement
      */
      let dateInput = document.getElementById("dateInput");
      /**
      *  @type HTMLInputElement
      */
      let priceInput = document.getElementById("priceInput");
    nameInput.value = "";
    priceInput.value = "";
    dateInput.value = ";"

}