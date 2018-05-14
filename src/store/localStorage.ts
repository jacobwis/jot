import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { AppState } from './reducers';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('jot');
    if (serializedState === null) {
      return undefined;
    }

    const parsedState = JSON.parse(serializedState);

    return {
      ...parsedState,
      documents: {
        ...parsedState.documents,
        documents: Object.keys(parsedState.documents.documents).reduce((acc, key) => {
          const document = parsedState.documents.documents[key];
          const contentState = convertFromRaw(document.contents);

          return {
            ...acc,
            [key]: {
              ...document,
              contents: EditorState.createWithContent(contentState)
            }
          }
        }, {})
      }
    }
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppState) => {
  try {
    const serializedState = JSON.stringify({
      ...state,
      documents: {
        ...state.documents,
        documents: Object.keys(state.documents.documents).reduce((acc, key) => {
          const document = state.documents.documents[key];
          return {
            ...acc,
            [key]: {
              ...document,
              contents: convertToRaw(document.contents.getCurrentContent())
            }
          };
        }, {})
      }
    });
    localStorage.setItem('jot', serializedState);
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
  }
};
