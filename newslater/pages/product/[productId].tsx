import {useRouter} from 'next/router'

export default function(){
    const router=useRouter()
    const productId= router.query.productId
    return <h1>the product of {productId} is this</h1>
}
