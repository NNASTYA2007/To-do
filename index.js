///////Добираемся до элементов/////////////////////////
const input = document.getElementById("newTask");
const form = document.querySelector("form");
const taskListEl = document.getElementById("taskList");

///////Прописываем команду чтобы не создавался пустой пункт///////////
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.length === 0) {
    alert("Введите задачу");
    return;
  }
  //////Прописываем команды чтобы создавался пункт/////////////////
  const item = document.createElement("li");
  const inputCheckbox = document.createElement("input");
  const buttonDelete = document.createElement("button");
  const textTask = document.createElement("p");

  inputCheckbox.type = "checkbox";
  buttonDelete.textContent = "Delete";
  textTask.textContent = input.value;

  item.append(inputCheckbox, textTask, buttonDelete);
  taskListEl.appendChild(item);

  input.value = "";
});
