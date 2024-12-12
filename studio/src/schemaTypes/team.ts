import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'goals',
      title: 'Mål',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'goal'}]}],
    })
  ],
})
