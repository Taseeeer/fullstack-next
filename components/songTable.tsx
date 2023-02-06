import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function SongTable ({ song }) {
    return (
        <Box bg="transparent">
            <Box padding="10px" marginBottom="30px">
                <IconButton icon={<BsFillPlayFill />} fontSize="30px" colorScheme="green" isRound aria-label="play" />
                <Table variant="unstyled">
                    <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
                        <Tr>
                            <Th>#</Th>
                            <Th>Track</Th>
                            <Th>Date Added</Th>
                            <Th>
                                <AiOutlineClockCircle />
                            </Th>
                        </Tr>
                    </Thead>
                </Table>
            </Box>
        </Box>
    )
}