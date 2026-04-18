import { defineType, defineField } from 'sanity'

export const musicSchema = defineType({
  name: 'music',
  title: 'Music',
  type: 'document',
  fields: [
    defineField({
      name: 'rotation',
      title: 'Albums in Rotation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'artist', type: 'string' }),
            defineField({ name: 'album', type: 'string' }),
            defineField({ name: 'year', type: 'number' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'gear',
      title: 'Gear',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', type: 'string' }),
            defineField({ name: 'note', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({ name: 'spotifyEmbedUrl', title: 'Spotify Embed URL', type: 'url' }),
  ],
})
