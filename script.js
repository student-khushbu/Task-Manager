function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if(task === ""){
        alert("please enter a task");
        return ;
    }
    let li = document.createElement("li");
    li.innerHTML = task + " <span class='delete' onclick='deleteTask(this)'>X</span>";
    document.getElementById("taskList").appendChild(li);
    input.value = "";


}

function deleteTask(element){
    element.parentElement.remove();
}