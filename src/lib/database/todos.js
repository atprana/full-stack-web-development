let todos = {
  "todos": [
    {
      "id": '1', // first 10 items were skipped
      "text": "Text a friend I haven't talked to in a long time",
      "done": false,
      "userId": 39
    },
    {
      "id": '2',
      "text": "Organize pantry",
      "done": true,
      "userId": 39
    },
    {
      "id": '3',
      "text": "Buy a new house decoration",
      "done": false,
      "userId": 16
    }
  ],
  "total": 150,
  "skip": "10",
  "limit": 3
}


export async function getTodos() {
  return { todos: todos };
}

export function addTodo(todo) {
  // console.log('Add to Do', todos.todos)
  todos.todos = [todo, ...todos.todos];
}

export function deleteTodo(id) {
  todos.todos = todos.todos.filter((todo) => String(todo.id) !== String(id));
}

export function toggleDone(id, updatedtodo) {
  let done = updatedtodo.get('done');
  // console.log(done, typeof (done));
  // console.log(id);
  todos.todos.forEach((todo) => {
    if (todo.id === id) {
      todo.done = done;
    }
  })
}

export function updateTodo(id, updatedtodo) {
  let text = updatedtodo.get('text');
  // console.log(done, typeof (done));
  // console.log(id);

  todos.todos.forEach((todo) => {
    if (todo.id === id) {
      todo.text = text;
    }
  }
  )
}

