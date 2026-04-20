import { defineType, defineField } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'blurb', title: 'Blurb', type: 'text', rows: 3 }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['frontend', 'fullstack', 'backend'] },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'repoUrl', title: 'Repo URL', type: 'url' }),
    defineField({ name: 'liveUrl', title: 'Live URL', type: 'url' }),
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({
      name: 'context',
      title: 'Problem / Context',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'One bullet per feature — "What it does" list',
    }),
    defineField({
      name: 'stackDetail',
      title: 'Stack Detail',
      type: 'array',
      description: 'Full stack table with tool + rationale',
      of: [
        defineField({
          name: 'stackItem',
          title: 'Stack Item',
          type: 'object',
          fields: [
            defineField({ name: 'tool', title: 'Tool / Layer', type: 'string' }),
            defineField({ name: 'why', title: 'Why', type: 'string' }),
          ],
          preview: { select: { title: 'tool', subtitle: 'why' } },
        }),
      ],
    }),
    defineField({
      name: 'approach',
      title: 'Architecture / Approach',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
