import Head from 'next/head'
import { Image } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import GradientLayout from '@/components/gradientLayout'
import prisma from '@/lib/prisma'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useMe } from '@/lib/hooks'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ artists }) {

  const { user, isLoading } = useMe();

  return <GradientLayout image="https://i.pinimg.com/originals/4d/b0/71/4db0719744d73a1ad88e0f9fc1db649b.jpg" color="blue" subtitle="Listen to it" title={`${user?.firstName} ${user?.lastName}`} description={"This is the description you asked for."}>
    <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
          <Box>
            <Flex>
              {artists.map((artist) => (
                <Box key={artist.id} padding="0.5rem" borderRadius="12px" margin="1rem" bgColor="gray.900">
                  <Image
                    src="https://placekitten.com/300/300"
                    borderRadius="12px"
                  />
                  <Box>
                    <Text fontSize="large">{artist.name}</Text>
                    <Text fontSize="x-small">Artist</Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
        <Flex>
          
        </Flex>
      </Box>
  </GradientLayout> 
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: {
      artists: JSON.parse(JSON.stringify(artists))
    },
  }
}