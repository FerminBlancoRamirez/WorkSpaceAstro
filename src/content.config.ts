import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const post = defineCollection({
    loader: glob({
        pattern: ["**/*.md", "**/*.mdx"],
        base: "./src/content/posts"
    }),
    schema: z.object({
        titulo: z.string(),
        fecha: z.string(),
        autor: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
})

const proyects = defineCollection({
    loader: glob({
        pattern: ["**/*.md", "**/*.mdx"],
        base: "./src/content/proyects"
    }),
    schema: ({ image }) =>
        z.object({
            titulo: z.string(),
            fecha: z.string(),
            autor: z.string().optional(),
            tags: z.array(z.string()).optional(),
            // Añade el campo de imagen obligatorio u opcional
            altImagen1: z.string().optional(),
            altImagen2: z.string().optional(),
            authorAvatar: image(),
            imagen1: image().optional(),
            imagen2: image().optional(),
            rating: z.number().default(0)
        }),
})

export const collections = {
    post,
    proyects
}