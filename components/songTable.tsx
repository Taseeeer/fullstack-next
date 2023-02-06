import { background, Box, Flex, IconButton, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function SongTable ({ songs }) {
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
                    <Tbody>
                        {songs.map((song, index) => (
                            <Tr key={song.id} sx={{
                                transition: "all .3s",
                                "&:hover": {
                                    bg: "rgba(255,255,255,0.1)"
                                }
                            }} cursor="pointer">
                                <Td>{index+1}</Td> 
                                <Td>
                                    <Flex gap="1rem" alignItems="center">
                                        <Image src={`https://picsum.photos/400?random=${song.id}`} width="15px" />
                                        <Text>
                                            {song.name}
                                        </Text>
                                    </Flex>
                                </Td> 
                                <Td>{song.createdAt}</Td> 
                                <Td>{song.duration}</Td> 
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    )
}