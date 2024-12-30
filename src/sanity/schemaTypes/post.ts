import { defineType, defineField ,defineArrayMember } from "sanity"

export const post = defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        defineField({
                name: 'title',//show on inspect view not on ui
                type: 'string',
                title: 'Title',//show on ui
                description: 'Title of the post',//show on ui as hint
                validation: Rule => Rule.required().error("Required Field"). max(20).warning("Title should be less than 20 characters")
        }),

        //slug field
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required().error("Required Field")
        }),

        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            validation: (Rule)  => Rule.required(),
        }),

        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            validation: Rule => Rule.required(),
            description: 'Summary of the post', 
        }),

        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                defineArrayMember({type: 'block'}),
                // defineArrayMember({type: 'image'}),
                // defineArrayMember({type: 'code'}),
                // defineArrayMember({type: 'video'}),
            ],
        }),

        defineField({
            name:'author',
            type: 'reference',
            title: 'Author',
            to: [{type: 'author'}],
        })
    ]
})