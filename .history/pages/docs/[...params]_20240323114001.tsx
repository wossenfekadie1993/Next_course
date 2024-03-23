import { useRouter } from "next/router";

export default function docs(){
    const router =useRouter()
    const path =router.query
return <h1>{path}</h1>
}