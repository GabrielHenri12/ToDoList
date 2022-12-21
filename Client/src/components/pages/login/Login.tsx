import { Button, Center, color, Heading, Stack } from "@chakra-ui/react"
import Inputs from "../../comuns/Inputs"
import { useState } from "react"
import InputPassword from "../../comuns/InputPassword"

export default () => {
    return (
        <Center flexDirection='column' justifyContent='space-around' border={['0px', '1px', '1px']} borderRadius='10px' borderColor='gray' w={['100vw', '60vw', '30vw']} h={['100vh', '80vh', '70vh']} bg='cyan.500'>
            <Heading as='h1' size='lg'>Entrar</Heading>
            <Stack>
                <Inputs />
                <InputPassword />
            </Stack>
            <Button
                isLoading={false}
                loadingText='Loading'
                colorScheme='whatsapp'
                spinnerPlacement='start'
            >
                Entrar
            </Button>
        </Center>
    )
}