let todo = document.getElementById("todo");
// let addTodo = document.getElementById("addTodo");
// let deleteTodo = document.getElementById("deleteTodo");

//todoList = document.getElementById("todo"[""]);

const todoList = [];
todoList.push("estudar array", "fazer revisao", "estudar python")
//console.log(todoList[0])
todoList[0] = "ler"; //muda tarefa
todoList.pop() //apaga o ultimo elemento da lista
todoList.splice(1) // Remove 1 elemento a partir do índice

console.log(todoList)


// const saveTodo = (todo) => {
//   const newTodo = {
//     todo,
//   };
//   todoList.push(newTodo);
//   console.log(todoList);
//   return newTodo;
// };

function addTodoList() {
  console.log("Clicou no botão");
}

// function calcula() {
//    var resultado = n1.valueAsNumber + n2.valueAsNumber;

//    if (isNaN(resultado)) {
//     r.textContent = '';
//    }else
//    r.textContent = resultado;
//  }

// document.addEventListener('input', function() {
//    var resultado = n1.valueAsNumber + n2.valueAsNumber;
//    r.textContent = isNaN(resultado) ? "" : resultado;
//  });

// var fslist = document.querySelectorAll(".multiple-field");

// for (var i = 0; i < fslist.length; i++) {
//   initMultipleFieldSet(fslist[i]);
// }

// function initMultipleFieldSet(fs) {
//   var addButton = document.createElement("button");
//   addButton.textContent = "Adicionar";
//   addButton.type = "button";

//   fs.appendChild(addButton);

//   var firstInput = fs.querySelector("input");

//   addButton.addEventListener("click", function () {
//     var div = document.createElement("div");
//     var newInput = document.createElement("input");
//     newInput.name = firstInput.name;
//     newInput.type = firstInput.type;

//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Excluir";
//     deleteButton.type = "button";

//     div.appendChild(newInput);
//     div.appendChild(deleteButton);

//     deleteButton.addEventListener("click", function() {
//       div.remove(); //maneira mais fácil
//       //fs.removeChild(div); pode ser usado esse codigo também
//     });

//     fs.insertBefore(div, addButton);
//   });
// }
