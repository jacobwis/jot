import { createStore } from 'redux';
import * as storage from './localStorage';
import rootReducer from './reducers';

export * from './reducers';
export * from './types';

const persistedState = storage.loadState();

const store = createStore(
  rootReducer,
  persistedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  storage.saveState(store.getState());
});

export default store;
