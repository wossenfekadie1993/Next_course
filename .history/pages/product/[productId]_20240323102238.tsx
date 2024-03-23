import userRouter from 'next/router'

export default function(){
    const router=userRouter
    const productId= router.query.productd
    return <h1>the product of {productId} is this</h1>
}
