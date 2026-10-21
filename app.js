
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskName = input.value.trim();

  if (taskName === "") {
    return;
  }

  const item = document.createElement("li");
  item.textContent = taskName;
  list.append(item);

  input.value = "";
  input.focus();
});
