import { useLoaderData } from 'react-router-dom'
import TodoItem from './TodoItem'
import { Todo } from '@/types'

export default function TodoList () {
  const data = useLoaderData() as Todo[]

  return (
    <div>
      {data?.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}
