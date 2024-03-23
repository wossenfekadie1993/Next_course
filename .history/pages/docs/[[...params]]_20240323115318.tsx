import { useRouter } from "next/router";
import React from 'react';
export default function docs(){
    const router =useRouter()
    const {params} =router.query

    if (params && params.length==2){
        return <div>two routes</div>
    }else if(params && params.length==1){
        return <div>one route</div>
    }else{
        return <div>the default document</div>}
    
}    
