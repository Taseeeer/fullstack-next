import { useRouter } from "next/router"

export default function EachPlaylist() {

    const router = useRouter();
    const { id } = router.query;
    return <h1>Hi {id}</h1>
}