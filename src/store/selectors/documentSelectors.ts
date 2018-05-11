import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const selectedDocumentSelector = (state: AppState) =>
  state.documents.documents[state.documents.selectedID];

export const selectedDocumentContentsSelector = createSelector(
  selectedDocumentSelector,
  document => document.contents
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
