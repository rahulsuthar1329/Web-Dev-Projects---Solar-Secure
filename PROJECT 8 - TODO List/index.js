const tasks = document.getElementById("tasks");
const input = document.getElementById("todo");
const btn = document.getElementById("btn");

input.addEventListener("keydown", function (e) {
  if (e.code == "Enter" && input.value.trim()) {
    addTask(input.value.trim());
    tasks.style.display = "inline-block";
    input.value = "";
  }
});

btn.addEventListener("click", () => {
  if (input.value.trim() != "") {
    addTask(input.value.trim());
    tasks.style.display = "inline-block";
    input.value = "";
  } else {
    alert("Empty Value.");
  }
});

const addTask = (input_value) => {
  const list = document.createElement("li");
  const icon = document.createElement("i");
  const para = document.createElement("p");
  tasks.style.removeProperty("display");
  icon.setAttribute("id", "delete");
  icon.setAttribute("onclick", "deleteBtn(this)");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-trash");
  para.innerText = input_value;
  tasks.appendChild(list);
  list.appendChild(para);
  list.appendChild(icon);
};

const deleteBtn = (e) => {
  e.parentElement.remove();
  if (tasks.textContent.trim() == "") {
    tasks.style.display = "none";
  }
};
