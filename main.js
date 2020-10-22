const btn = document.querySelector("button");
let whatToDoInput = document.querySelector("input");
const listItem = document.querySelector(".listItem");
const whatToDoArray = [];


class TaskToDo {
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }

    edit(div) {
        let i = document.createElement("i");
        i.className = ("fas fa-edit");
        div.appendChild(i);
        i.addEventListener("click", function () {

          
        })
    }

    check(div) {
        let i = document.createElement("i");
        i.className = ("far fa-check-circle");
        div.appendChild(i);
        i.addEventListener("click", function () {
            div.classList.toggle("check")
            i.classList.toggle("fa-times-circle")
        })
    }

    delete(div) {
        let i = document.createElement("i");
        i.className = ("fas fa-eraser");
        div.appendChild(i);
        i.addEventListener("click", function () {
            whatToDoArray.splice(div.id, 1);
            listItem.removeChild(div);
            whatToDoArray.forEach((task, index) => {
                task.id = index;
            })
            console.log(div.id, whatToDoArray);
            clearBoard()
        })
    }
}

function clearBoard() {
    const children = document.querySelectorAll(".listItem > div");
    children.forEach((child, index) => {
        child.remove()
    })
    whatToDoArray.forEach((task, index) => {
        let div = document.createElement("div");
        div.textContent = task.content;
        div.id = index;
        task.edit(div);
        task.check(div);
        task.delete(div);
        listItem.appendChild(div);
    })
}

function addNewTaskToDo() {
    const inputValue = whatToDoInput.value;
    if (inputValue != "") {
        let task = new TaskToDo(whatToDoArray.length, inputValue);

        whatToDoArray.push(task);
        clearBoard();
        whatToDoInput.value = "";
    }
}


btn.addEventListener("click", addNewTaskToDo);