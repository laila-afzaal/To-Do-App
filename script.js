      //Model MVC
      let todos = [{
        title: 'Get groceries',
        dueDate: '05-01-2021',
        id: 'id1'
      }, {
        title: 'Wash dishes',
        dueDate: '05-01-2021',
        id: 'id2'
      },{
        title: 'Make dinner',
        dueDate: '05-01-2021',
        id: 'id3'     
      }];

      //creats a todo
      function createTodo(title, dueDate) {
        const id = '' + new Date().getTime();
        
        todos.push({
          title: title,
          dueDate: dueDate,
          id: id
        });
      }

      //deletes a todo
      function removeTodo(idToDelete){
        todos = todos.filter(function (todo) {
         //if id of this todo matches idToDelete, return false.
         //for everything else, return true.
         if (todo.id === idToDelete) {
           return false;
         } else {
           return true; 
         }
        });
      }

      //render function is that: it takes what's inside todo & renders it!

      render();  

      //Controller sec of MVC;
      function addTodo() {
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;

        createTodo(title, dueDate);

        render();
      }

     //a function returns whatever we tell it to return, any code that comes after it doesnt run anymore.
     //When Add Todo Is Clicked Its Gonna Run This Function,
     //Add Whatevers In Textbox To Our Array,
     //& Call Render, Which Will Reset Our List
     //& Then It Will Re-render The Updated List.

      function deleteTodo(event) {
        const deleteButton = event.target;
        const idToDelete = deleteButton.id;

        removeTodo(idToDelete);
        render();
      }

    //filter similar to foreach & its gonna loop through array & run function.

    //View section of MVC:
      function render(){
        //reset our list 
        document.getElementById('todo-list').innerHTML = '';
        
      todos.forEach(function (todo) {
        const element =  document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 18px';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
      });

      }

      //3 WaysToCreate A Variable In JS e.g. let num=5; ,const & (var:dev dont use it anymore).