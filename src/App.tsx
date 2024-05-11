import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/ui/Layout.tsx'
import TodoListPage from './routes/TodoListPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TodoListPage />,
        loader: TodoListPage.loader
      }
    ]
  }
])

export default function App () {
  return (
    <RouterProvider router={router} />
  )
}
