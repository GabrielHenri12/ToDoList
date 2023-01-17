import { Button, Center, Heading, Link, Stack } from "@chakra-ui/react"
import InputPassword from "../../comuns/InputPassword"
import Inputs from "../../comuns/Inputs"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../../API/Api"
import { signIn } from "../../../API/auth"

export default () => {
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [Error, setError] = useState<string>('')
    const [Loading, setLoading] = useState<boolean>(false)
    const natigate = useNavigate()

    function login() {
        setLoading(true);
        if (email === '') { return setError('Preencha todos os campos') }
        if (password === '') { return setError('Preencha todos os campos') }
        api
            .post('/login', { email, password })
            .then(response => {
                setLoading(false);
                console.log(response.data.token)
                signIn(response.data.token)
                natigate('/tarefas')
            })
            .catch(error => { setLoading(false); console.log(error) })
    }

    return (
        <Center flexDirection='column' justifyContent='space-around' border={['0px', '1px', '1px']} borderRadius='10px' borderColor='gray' w={['100vw', '60vw', '30vw']} h={['100vh', '80vh', '70vh']} bg='blue.200'>
            <Heading as='h1' size='lg' color='white'>Entrar</Heading>
            {Error}
            <Stack>
                <Inputs
                    placeholder={'Email'}
                    value={email}
                    setFunc={setEmail}
                />
                <InputPassword
                    placeholder={'Senha'}
                    value={password}
                    setFunc={setPassword}
                />
                <Link href="/cadastro" textAlign='center' color='white'>criar conta<ExternalLinkIcon mx='2px' /></Link>
            </Stack>
            <Button
                isLoading={Loading}
                onClick={login}
                loadingText='Loading'
                bg='blue.100'
                color="white"
                spinnerPlacement='start'
            >
                Entrar
            </Button>
        </Center>
    )
}