import { defineType, defineField } from "sanity";

export const author = defineType({
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Author Name',
            description: 'Name of the author',
            validation: Rule => Rule.required().error("Required Field").max(20).warning("Name should be less than 20 characters")
        }),

        defineField({
            name: 'about',
            type: 'text',
            title: 'About',
            description: 'About Author', 
        }),

        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,  //for cropping
            },
            validation: Rule => Rule.required(),
        })

    ]
})
    