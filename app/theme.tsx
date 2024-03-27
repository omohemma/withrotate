import {extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        brand: {
            100: "#AD1FEA",
            200: "#4661E6",
            300: "#4661E6",
            400: "#F2F4FF",
            500: "#F7F8FD",
            600: "#3A4374",
            700: "#647196",
            800: "#F49F85",
            900: "#62BCFA",
            'white': "#FFFFFF",
            'black': "#000000",
        },
    },
    fonts: {
        heading: 'var(--font-jost)',
        body: 'var(--font-jost)',
    }
})

export default theme
