import TodoForm from '@/components/todo/TodoForm'
import TodoList from '@/components/todo/TodoList'
import { type Todo } from '@/types'

export default function TodoListPage () {
  return (
    <>
      <h3>Todo App</h3>
      <TodoForm />
      <TodoList />
    </>
  )
}

TodoListPage.loader = async () => {
  const response = await fetch('http://localhost:3000/todos')

  if (!response.ok) {
    console.error(response)
    throw new Error(response.statusText)
  }

  const data = await response.json()

  return data as Todo[]
}
