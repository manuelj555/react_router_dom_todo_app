import { ActionFunctionArgs } from 'react-router-dom'

export async function saveTodoAction ({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  console.log({ data })

  await fetch('http://localhost:3000/todos', {
    method: 'post',
    body: JSON.stringify(data)
  })

  return null
}
