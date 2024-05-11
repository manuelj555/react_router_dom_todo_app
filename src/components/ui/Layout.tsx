import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <>
      <header className="container">Header</header>
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}
