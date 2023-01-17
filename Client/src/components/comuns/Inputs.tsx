import { Input } from "@chakra-ui/react";
import { Props } from "./InputPassword";


export default (props: Props) => {
    return (
        <>
            <Input
                value={props.value}
                onChange={e => props.setFunc(e.target.value)}
                type='text'
                placeholder={props.placeholder}
                w={['50vw','40vw','20vw']}
                variant='outline'
                bgColor='whiteAlpha.700'
                focusBorderColor='blackAlpha.700'
            />
        </>
    )
}