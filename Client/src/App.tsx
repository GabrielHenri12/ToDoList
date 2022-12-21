import { Center } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { isAuthenticated } from './API/auth'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'

function App() {
  return (
    <BrowserRouter>
      <Center w={'100vw'} h={'100vh'} bg='blue.100'>
        <Routes>
          <Route path='/Entrar' element={<Login />} />
          <Route path='/Cadastro' element={<Register />} />
        </Routes>
      </Center>
    </BrowserRouter>
  )

}

export default App
