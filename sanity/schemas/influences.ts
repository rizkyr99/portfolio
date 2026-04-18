import { defineType, defineField } from 'sanity'

export const influencesSchema = defineType({
  name: 'influences',
  title: 'Influences',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Influences',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', type: 'string' }),
            defineField({
              name: 'kind',
              type: 'string',
              options: { list: ['musician', 'engineer', 'writer'] },
            }),
            defineField({ name: 'why', type: 'string' }),
          ],
        },
      ],
    }),
  ],
})
