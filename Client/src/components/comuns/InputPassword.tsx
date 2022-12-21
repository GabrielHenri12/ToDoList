import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react";

export default () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
            <Input
                w={['50vw','40vw','20vw']}
                pr='4.5rem'
                bgColor='whiteAlpha.700'
                type={show ? 'text' : 'password'}
                placeholder='Senha'
            />
            <InputRightElement width='3.5rem'>
                <Button bg='whiteAlpha.500' h='1.5rem' size='sm' onClick={handleClick}>
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}