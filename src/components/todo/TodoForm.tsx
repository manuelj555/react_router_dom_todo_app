import { Form } from 'react-router-dom'

export default function TodoForm () {
  return (
    <article>
      <Form method='post' action='/'>
        <div className="row middle-xs">
          <label className="col-xs-12 col-sm-8 col-lg-9">
          Título
            <input name="title" placeholder="Título de la tarea a realizar" />
          </label>
          <label className="col-xs">
            <input name="completed" type="checkbox" role="switch" />
          Completado
          </label>
        </div>
        <div className="row end-xs">
          <input className="col-md-2" type="submit" value="Guardar" />
        </div>
      </Form>
    </article>
  )
}
