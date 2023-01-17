import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react";

export type Props = {
    placeholder: string;
    value: string
    setFunc: any
}

export default (props: Props) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
            <Input
                value={props.value}
                onChange={e => props.setFunc(e.target.value)}
                type={show ? 'text' : 'password'}
                placeholder={props.placeholder}
                w={['50vw', '40vw', '20vw']}
                pr='4.5rem'
                bgColor='whiteAlpha.700'
                focusBorderColor='blackAlpha.700'
            />
            <InputRightElement width='3.5rem'>
                {show ? <ViewOffIcon onClick={handleClick} /> : <ViewIcon onClick={handleClick} />}
            </InputRightElement>
        </InputGroup>
    )
}