import { useEffect, useState } from 'react'
import api from './Data/listTask'
import './App.css'
import delet from "./assets/delete.png"
import done from "./assets/done.png"

type list = {
  id: number,
  task: string,
  done: boolean
}

function App() {

  const [listTask, setListTask]: any = useState([])
  const [task, setTask] = useState('')
  const [reset, setReset] = useState('')

  function creatTask(item: string) {
    api
      .post('/tarefas', { task: item })
      .then(response => setReset(response.data))
      .catch(err => console.log('Ocorreu um erro' + err))
    return setTask('')
  }

  const [valueDone, setDone] = useState(true)
  function checkedTask(item: number, trueOrfalse: boolean) {
    switch (trueOrfalse) {
      case true:
        setDone(false)
        break;
      case false:
        setDone(true)
        break;
    }
    api
      .put(`/tarefas/${item}`, { done: valueDone })
      .then(response => setReset(response.data))
      .catch(err => console.log('Ocorreu um erro' + err))
  }

  function deletTask(item: number) {
    api
      .delete(`/tarefas/${item}`)
      .then(response => setReset(response.data))
      .catch(err => console.log('Ocorreu um erro' + err))
  }

  useEffect(() => {
    api
      .get("/tarefas")
      .then((Response) => setListTask(Response.data))
      .catch(err => console.log('Ocorreu um erro' + err))
  }, [reset])

  function newTask(e: string) {
    setTask(e)
  }


  let listTable = listTask.tarefa?.map((item: list, key: number) => {
    return (
      <li key={key} className={item.done ? 'checked' : ''}>
        <p>{item.task}</p>
        <img src={done} id="done" onClick={e => checkedTask(item.id, item.done)} alt="check task" />
        <img src={delet} id="delet" onClick={e => deletTask(item.id)} alt="delet task" />
      </li>
    )
  })

  return (
    <div className='table'>
      <div className="addTask">
        <input type="text" value={task} onChange={e => newTask(e.target.value)} />
        <button onClick={e => creatTask(task)}>Adicionar</button>
      </div>
      <div className='spaceTask'>
        <ul>
          {listTable}
        </ul>
      </div>
    </div>
  )
}

export default App
