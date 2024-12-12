/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

export const structure = (S: any) =>
  S.list()
    .title('Website Content')
    .items([
      // Filter out "AI Assist Context" and "Settings" content from the list of content types
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['settings', 'assist.instruction.context'].includes(listItem.getId()),
      ),
    ])
