let input = document.getElementById("text");
let button = document.getElementById("add-btn");
let list = document.querySelector(".list");
let taskcount = document.getElementById("task-count");
let message = document.getElementById("message");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let count = tasks.length;
taskcount.textContent = count;
tasks.forEach(function(task) {
 
 let taskItem = document.createElement("div");
 taskItem.classList.add("task-item");
 taskItem.textContent = task;
 
 let deleteBtn = document.createElement("button");
 deleteBtn.classList.add("delete-btn");
 deleteBtn.textContent = "delete";
 
 taskItem.appendChild(deleteBtn);
 list.appendChild(taskItem);
 
 deleteBtn.addEventListener("click", function() {
  
  let index = tasks.indexOf(task);
  tasks.splice(index, 1);
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
  
  taskItem.remove();
  
  count--;
  taskcount.textContent = count;
  
 });
 
});

button.addEventListener("click", function() {
 
 let task = input.value;
 
 if (task.trim() === "") {
  message.textContent = "Task not available";
  return;
 }
 
 message.textContent = "";
 
 if (tasks.includes(task)) {
  message.textContent = "Task already exist!";
  return;
 }
 
 message.textContent = "";
 
 tasks.push(task);
 localStorage.setItem("tasks", JSON.stringify(tasks));
 
 let taskItem = document.createElement("div");
 taskItem.classList.add("task-item");
 taskItem.textContent = task;
 
 list.appendChild(taskItem);
 
 input.value = "";
 
 let deleteBtn = document.createElement("button");
 deleteBtn.classList.add("delete-btn");
 deleteBtn.textContent = "delete";
 
 taskItem.appendChild(deleteBtn);
 
 deleteBtn.addEventListener("click", function() {
  
  let index = tasks.indexOf(task);
  
  tasks.splice(index, 1);
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
  
  taskItem.remove();
  
  count--;
  taskcount.textContent = count;
  
 });
 
 count++;
 taskcount.textContent = count;
 
});

input.addEventListener("keydown", function(event) {
 
 if (event.key === "Enter") {
  button.click();
 }
 
});