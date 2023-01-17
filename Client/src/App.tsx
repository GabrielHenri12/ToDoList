import { Center } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/pages/404/NotFound'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Tasks from './components/pages/tasks/Tasks'

function App() {
  return (
    <BrowserRouter>
      <Center w={'100vw'} h={'100vh'} bg='gray.100' overflow='hidden'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Cadastro' element={<Register />} />
          <Route path='/tarefas' element={<Tasks/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Center>
    </BrowserRouter>
  )

}

export default App
