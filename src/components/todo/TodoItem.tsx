import { Todo } from '@/types'

export default function TodoItem ({ todo }: {todo: Todo}) {
  const { title, completed } = todo

  return (
    <article>
      <div className="row between-xs">
        <div>{title}</div>
        <div style={{ opacity: completed ? 1 : 0.3 }}>{completed ? '✅' : '❎'}</div>
      </div>
    </article>
  )
}
