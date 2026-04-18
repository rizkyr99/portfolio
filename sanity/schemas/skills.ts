import { defineType, defineField } from 'sanity'

export const skillsSchema = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'groups',
      title: 'Skill Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'group', title: 'Group Name', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Skills',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'name', type: 'string' }),
                    defineField({
                      name: 'level',
                      type: 'number',
                      validation: (r) => r.min(1).max(5).integer(),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
