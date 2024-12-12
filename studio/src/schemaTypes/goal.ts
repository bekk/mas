import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

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
    defineField({
      name: 'dependentOn',
      title: 'Dependent On',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'team' }] }]
    }),
    defineField({
      name: 'keyResults',
      title: 'Key Results',
      type: 'array',
      of: [{
        type: 'object', fields: [defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "progress",
          type: "number",
          validation: (Rule) => Rule.required().min(0).max(100),
        })]
      }],
    })
  ],
})
