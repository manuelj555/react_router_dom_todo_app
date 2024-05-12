import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/ui/Layout.tsx'
import TodoListPage from './routes/TodoListPage'
import { saveTodoAction } from './actions/todo'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <TodoListPage />,
        loader: TodoListPage.loader,
        action: saveTodoAction
      },
      {
        path: '/edit/:todoId',
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
