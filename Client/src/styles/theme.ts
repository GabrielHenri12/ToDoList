import { extendTheme } from '@chakra-ui/react'

const custonTheme = {
    colors: {
        blue: {
            100: '#00BBC9',
            200: '#00747C',
        },
        gray: {
            100: '#CACACA',
            200: '#878787',
            300: '#202022',
        }
    }
}

const theme = extendTheme(custonTheme);

export default theme;