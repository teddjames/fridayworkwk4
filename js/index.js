document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("todo-form");
  const todos = [];

  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    //get todo item
    const item = document.getElementById("todo-item").value;

    //add it to the todos array
    todos.push(item);

    //clear the initial todos
    displayTodoList.innerHTML = "";

    todos.forEach((todo) => {
      //dynamically create html element
      const listItem = document.createElement("li");
      listItem.innerText = todo;

      //attach the element to the display list element
      displayTodoList.appendChild(listItem);
    });
  });
});
