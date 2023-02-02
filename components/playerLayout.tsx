import { Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";

export default function PlayerLayout({ children }: any) {
    return (
        <Box width="100vw" height="100vh">
            <Box position="absolute" top="0" left="0" width="270px">
                <Sidebar />
            </Box>
            <Box marginLeft="270px" marginBottom="100px">
                {children} 
            </Box>
            <Box position="absolute" left="0" bottom="0">player</Box>
        </Box>
    )
}