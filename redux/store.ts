import { createStore, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import auth from './auth'
import zendesk from './zendesk';

const reducers = combineReducers({
  auth,
  zendesk
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return reducers(state, action)
  }
}
const makeStore = (context: Context) => {

  const isServer = typeof window === 'undefined';

  if (isServer) {

    return createStore(reducer, composeWithDevTools());

  } else {

    // we need it only on client side
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'nextjs',
      storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = createStore(persistedReducer, composeWithDevTools());

    //@ts-ignore
    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};
export const wrapper = createWrapper<Store<any>>(makeStore, { debug: true });
