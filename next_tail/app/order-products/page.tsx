"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router = useRouter()
    const handleClick =()=>{
        console.log("Placing your Order")
        router.push("/")
    }
    return (
        <>
            <h1>oRDER pRODUCT</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}