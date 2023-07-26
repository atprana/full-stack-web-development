import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function getTodos() {
  const todos = await prisma.todo.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ]
  })

  return { todos: todos };
}

export async function addTodo(todo) {
  const added = await prisma.todo.create({
    data: {
      text: todo.text,
      done: false
    }
  })
}

export async function deleteTodo(id) {
  const deleteTodo = await prisma.todo.delete({
    where: {
      id: parseInt(id),
    },
  })
}

export async function toggleDone(id, updatedtodo) {
  let done = updatedtodo.get('done');
  const updateTodo = await prisma.todo.update({
    where: {
      id: parseInt(id),
    },
    data: {
      done: Boolean(done),
    },
  })


}

export async function updateTodo(id, updatedtodo) {
  let text = updatedtodo.get('text');

  const updateTodo = await prisma.todo.update({
    where: {
      id: parseInt(id),
    },
    data: {
      text: text,
    },
  })
}

