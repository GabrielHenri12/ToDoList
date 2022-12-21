import { Input } from "@chakra-ui/react";
import { ReactPropTypes } from "react";

export default () => {
    return (
        <>
            <Input
                w={['50vw','40vw','20vw']}
                variant='outline'
                bgColor='whiteAlpha.700'
                type='text'
                placeholder='Email'
            />
        </>
    )
}