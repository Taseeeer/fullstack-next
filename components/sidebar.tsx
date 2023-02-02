import { usePlaylist } from "@/lib/hooks";
import { Box, Divider, LinkBox, LinkOverlay, List, ListIcon, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md';

const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/'
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search',
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: '/library',
    },
];

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/',
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: '/favorites',
    },
]

export default function Sidebar() {
    
    const { playlists, isError, isLoading } = usePlaylist();

    return (
        <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
            <Box display="flex" alignItems="center" gap="0.5rem" paddingY="20px" marginBottom="20px" paddingX="20px">
                <Image alt="logo" src="/m.png" height={20} width={40} />
                <h2 style={{ fontSize: "1.4rem"}}>StreamMux</h2>
            </Box>
            <Box>
                <List spacing={2}>
                    {navMenu.map(menu => (
                        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                            <LinkBox>
                                <Link href={menu.route}>
                                    <LinkOverlay>
                                        <ListIcon as={menu.icon} color="white" marginRight="20px" />
                                        {menu.name}
                                    </LinkOverlay>
                                </Link>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Divider paddingY="10px" />
            <Box paddingY="1rem">
                <List spacing={2}>
                    {musicMenu.map(menu => (
                        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                            <LinkBox>
                                <Link href={menu.route}>
                                    <LinkOverlay>
                                        <ListIcon as={menu.icon} color="white" marginRight="20px" />
                                        {menu.name}
                                    </LinkOverlay>
                                </Link>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Divider paddingY="10px" />
            <Box height="55%" overflowY="auto" paddingY="20px">
                <List spacing={2}>
                    {playlists.map(playlist => (
                        <ListItem paddingX="20px" fontSize="16px" key={playlist.name}>
                            <LinkBox>
                                <Link href="/">
                                    <LinkOverlay>
                                        {playlist.name}
                                    </LinkOverlay>
                                </Link>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}