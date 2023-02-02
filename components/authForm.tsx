import { Box, Button, Flex, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "@/lib/mutations"; 

export const AuthForm: FC<{ mode: "signin" | "signup"}> = ({ mode }) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setIsLoading(true);

        const user = await auth(mode, { email, password});
        setIsLoading(false);
        router.push("/");
    }

    return (
        <Box width="100vw" height="100vh" bg="black" color="white">
            <Flex justify="center" align="center" height="100px">
                <Image alt="logo" src="/m.png" height={20} width={40} />
            </Flex>
            <Flex justify="center" align="center" height="100vh">
                <Box padding="50px" bg="gray.900" paddingY="2rem" borderRadius="6px">
                    <form onSubmit={handleSubmit}>
                        <Input placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} />
                        <Input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
                        <Button type="submit" bg="green.500" sx={{
                            "&:hover": {
                                bg: "green.400",
                                color: "black"
                            }
                        }} width="100%" marginTop="1rem" isLoading={isLoading}>{ mode }</Button>
                    </form>
                </Box>
            </Flex>
        </Box>
    )
}