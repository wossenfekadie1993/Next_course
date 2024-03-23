import { useRouter } from "next/router";
import React from 'react';
export default function docs(){
    const router =useRouter()
    const {params} =router.query

    if (params.length==2){
        return <div>h</div>
    }elif(params.length==2){
        return <div>h</div>
    }
    return <div></div> the defualt 

    
}    
