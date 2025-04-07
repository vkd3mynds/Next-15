"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { prisma } from "@/lib/prisma";
// import { redirect } from "next/navigation";
import { useActionState } from "react";
import * as actions from "@/actions"

const CreateSnippetPage = () => {
    const [formStateData, xyz ] = useActionState(actions.createSnippet, {message:""})
   
    return(
        <>
        <h1 className="text-2xl text-amber-800">Snnipets</h1>
        <form action={xyz}>
        <div>
            <Label>Title</Label>
            <Input type="text" name="title" id="title"/>
            
        </div>
        <div>
            <Label>Code</Label>
        <Textarea name="code" id="code"/>
        </div>
        {formStateData.message && (<div className="p-2 bg-red-300 border-red-600 border-2 text-sm rounded-sm mt-2">{formStateData.message}</div>)}
        
        <Button type="submit" className="my-4">New</Button>
        </form>
        </>
    )
}
export default CreateSnippetPage;