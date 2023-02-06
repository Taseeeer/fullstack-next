import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function GradientLayout({ color, children, image, subtitle, title, description, roundImage }) {

    return <Box height="calc(100vh - 100px)" overflowY="scroll" bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}>
        <Flex bg={`${color}.600`} padding="40px" align="end">
            <Box padding="20px">
                <Image src={image} boxShadow="2xl" boxSize="160px" borderRadius={roundImage ? "100%": "3px"} />
            </Box>

            <Box padding="20px" lineHeight="40px" color="white">
                <Text fontSize="sm" fontWeight="bold" casing="uppercase">{ subtitle }</Text>
                <Text fontSize="6xl" fontWeight="bold" casing="uppercase">{ title }</Text>
                <Text fontSize="sm" fontWeight="100">{ description }</Text>
            </Box>
        </Flex>
        <Box paddingY="50px" color="white">{ children }</Box>
    </Box>
}