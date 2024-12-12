import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'goal',
  title: 'Mål',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'objective',
      title: 'Objective',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
