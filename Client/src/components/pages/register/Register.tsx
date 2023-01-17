import { Button, Center, Link, Heading, Stack } from "@chakra-ui/react";
import InputPassword from "../../comuns/InputPassword";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import Inputs from "../../comuns/Inputs";
import { useState } from "react";
import api from "../../../API/Api";
import { signIn } from "../../../API/auth";

export default () => {
    const [password, setPassword] = useState<string>('')
    const [ConfirmPassword, setConfirmPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [Error, setError] = useState<string>('')
    const [Loading, setLoading] = useState<boolean>(false)
    const natigate = useNavigate()

    function register() {
        setLoading(true);
        if (password != ConfirmPassword) { return setError('Senhas dífrenentes') }
        if (email === '') { return setError('Preencha todos os campos') }
        if (name === '') { return setError('Preencha todos os campos') }
        if (password === '') { return setError('Preencha todos os campos') }
        api
            .post('/register', { name, email, password })
            .then(response => {
                setLoading(false);
                console.log(response.data)
                signIn(response.data.newUser)
                natigate('/')
            })
            .catch(error => { setLoading(false); console.log(error) })
    }

    return (
        <Center flexDirection='column' justifyContent='space-around' border={['0px', '1px']} borderRadius='5px' w={['100vw', '60vw', '30vw']} h={['100vh', '80vh', '70vh']} bg='blue.200'>
            <Heading as='h1' size='lg' color="white">Cadastre-se</Heading>
            {Error}
            <Stack>
                <Inputs placeholder={'Nome'} value={name} setFunc={setName} />
                <Inputs placeholder={'Email'} value={email} setFunc={setEmail} />
                <InputPassword placeholder={'Senha'} value={password} setFunc={setPassword} />
                <InputPassword placeholder={'Confirme a senha'} value={ConfirmPassword} setFunc={setConfirmPassword} />
                <Link href="/entrar" textAlign='center' color='white'>Já tem conta?<ExternalLinkIcon mx='2px' /></Link>
            </Stack>
            <Button
                isLoading={Loading}
                onClick={register}
                loadingText='Loading'
                bg='blue.100'
                color='white'
                spinnerPlacement='start'
            >
                Cadastrar
            </Button>
        </Center>
    )
}