import * as todos from '$lib/database/todos';

export async function load() {
  const data = await todos.getTodos()

  return {
    todos: data.todos
  }
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    todos.addTodo({
      id: crypto.randomUUID(),
      text: data.get('todo'),
      done: false
    });
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    todos.deleteTodo(data.get('id'))
  },

  update: async ({ request }) => {
    let data = await request.formData();
    let id = data.get("id");
    todos.updateTodo(id, data)

  },

  toggledone: async ({ request }) => {
    let data = await request.formData();
    let id = data.get("id");
    todos.toggleDone(id, data)
  },

}
