
import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server={
    newsletter : defineAction({
        input: z.object({
            email: z.string()
        }),
        handler: async (input, context)=>{
            //guardamos el email en la base de datos
            console.log("email guardado correctamente")
            return {
                succes: true,
                message: "Te has subscrito correctamente"
            }
        }
    })
}