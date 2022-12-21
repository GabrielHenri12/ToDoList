import InputPassword from "../../comuns/InputPassword";
import Inputs from "../../comuns/Inputs";
import { Button, Center, Heading, Stack } from "@chakra-ui/react";

export default () => {
    return (
        <Center flexDirection='column' justifyContent='space-around' border={['0px', '1px', '1px']} borderRadius='10px' borderColor='gray' w={['100vw', '60vw', '30vw']} h={['100vh', '80vh', '70vh']} bg='cyan.500'>
            <Heading as='h1' size='lg'>Cadastre-se</Heading>
            <Stack>
                <Inputs/>
                <Inputs/>
                <InputPassword/>
                <InputPassword/>
            </Stack>
            <Button
                isLoading={false}
                loadingText='Loading'
                colorScheme='whatsapp'
                spinnerPlacement='start'
            >
                Cadastrar
            </Button>
        </Center>
    )
}