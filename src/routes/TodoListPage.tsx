import { useLoaderData } from 'react-router-dom'

export default function TodoListPage () {
  const data = useLoaderData()

  return (
    <>
      <h3>This is the list </h3>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}

// TodoListPage.loader = loader
TodoListPage.loader = async (): Promise<[]> => {
  const response = await fetch('http://localhost:3000/todos')

  if (!response.ok) {
    console.error(response)
    throw new Error(response.statusText)
  }

  const data = await response.json()

  return data
}
