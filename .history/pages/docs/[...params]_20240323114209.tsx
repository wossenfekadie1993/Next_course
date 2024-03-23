import { useRouter } from "next/router";

export default function docs(){
    const router =useRouter()
    const params =router.query
return (
    <h1>thi is the path of  {params]
    </h1>
    )
}    
