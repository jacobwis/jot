import { RichUtils } from 'draft-js';
import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const selectedDocumentSelector = (state: AppState) =>
  state.documents.documents[state.documents.selectedID];

export const selectedDocumentContentsSelector = createSelector(
  selectedDocumentSelector,
  document => (document ? document.contents : undefined)
);

export const currentInlineStylesSelector = createSelector(
  selectedDocumentContentsSelector,
  contents => contents.getCurrentInlineStyle()
);

export const boldEnabled = createSelector(currentInlineStylesSelector, inlineStyles =>
  inlineStyles.contains('BOLD')
);
export const italicEnabled = createSelector(currentInlineStylesSelector, inlineStyles =>
  inlineStyles.contains('ITALIC')
);
export const underlineEnabled = createSelector(currentInlineStylesSelector, inlineStyles =>
  inlineStyles.contains('UNDERLINE')
);

export const currentTextAlign = createSelector(selectedDocumentContentsSelector, contents => {
  const blockType = RichUtils.getCurrentBlockType(contents) as string;

  if (blockType === 'unstyled') {
    return 'align-left';
  }

  if (blockType === 'align-center' || blockType === 'align-right' || blockType === 'align-left') {
    return blockType;
  }
});

export const olEnabled = createSelector(
  selectedDocumentContentsSelector,
  contents => RichUtils.getCurrentBlockType(contents) === 'ordered-list-item'
);

export const ulEnabled = createSelector(
  selectedDocumentContentsSelector,
  contents => RichUtils.getCurrentBlockType(contents) === 'unordered-list-item'
);

export const documentArraySelector = (state: AppState) => {
  const { sortBy, documents } = state.documents;
  const unsorted = Object.keys(documents).map(key => documents[key]);

  if (sortBy === 'created-at') {
    return unsorted.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  if (sortBy === 'updated-at') {
    return unsorted.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  return unsorted;
};
