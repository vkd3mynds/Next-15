"use client";

import { useRouter } from "next/router";
import { startTransition } from "react";


export default function ErrorBoundary({error,reset}:{
    error:Error;
    reset:()=> void
}){

    const router = useRouter()
    const reload = ()=>{
        startTransition(()=>{
            // router.refresh()
            reset();
        })
    }
    return <>
    <h1>Error in Review</h1>
    <p>{error.message}</p>
    <button onClick={()=>startTransition(reload)} className="p-2 bg-blue-300 m-4 rounded-sm">Try Again</button>
    </>
}