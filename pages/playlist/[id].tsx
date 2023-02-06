import GradientLayout from "@/components/gradientLayout";
import SongTable from "@/components/songTable";
import { validateToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { useRouter } from "next/router";

const getBgColor = id => {
    const colors = [
        "red",
        "green",
        "blue",
        "purple",
        "maroon",
        "teal",
        "yellow",
        "gray",
    ];

    return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)]
}

export default function EachPlaylist({ playlist }) {
    const color = getBgColor(playlist?.id);
    console.log(playlist)

    return <GradientLayout color={color} title={playlist.name} image={`https://picsum.photos/400?random=${playlist.id}`} roundImage={false} subtitle="playlist" description="This is a single song.">
        <SongTable />
    </GradientLayout>
};


export const getServerSideProps = async ({ query, req }) => {
    let user = validateToken(req.cookies.StreamMux)
  
    const [playlist] = await prisma.playlist.findMany({
      where: {
        id: +query.id,
        userId: user.id,
      },
      include: {
        songs: {
          include: {
            artist: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    })
  
    return {
      props: {
        playlist: JSON.parse(JSON.stringify(playlist))
      },
    }
  }