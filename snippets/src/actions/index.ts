"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const saveSnippet = async (id:number, code: string)=>{
    await prisma.snippet.update({
        where:{
            id
        },
        data:{
            code
        }
    });
    revalidatePath(`/snippet/${id}`)
    redirect(`/snippet/${id}`);
}

export const deleteSnippet =async(id:number)=>{
    await prisma.snippet.delete({
        where:{id}
    })
    revalidatePath("/")
    redirect("/");
}


export async function createSnippet(prevState:{message:string},formData:FormData){

    try{
        const title = formData.get("title");
        const code = formData.get("code");
        
        if(typeof title !== "string" || title.length < 4){
            return {message: "Title is Required and must be required"}
        }
        if(typeof code !== "string" || code.length < 8){
            return {message: "CODE is Required and must be long"}
        }
      await prisma.snippet.create({
            data:{
                title,
                code
            }
        });
        // throw new Error("Some Internal server error");
        revalidatePath("/")

    //   const snippet =  await prisma.snippet.create({
    //         data:{
    //             title,
    //             code
    //         }
    //     });
    //     console.log("creted Snippets",snippet)

    }catch(error: unknown){
        if(error instanceof Error){
            return { message: error.message}
        }else{
            return {message:"Some internal server error"}
        }
    }
   
    redirect("/")
}