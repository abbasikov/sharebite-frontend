import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let __store;

const configureStore = () => {
  const middleware = [];
  const enhancers = [];

  middleware.push(thunk);

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      : compose;

  enhancers.push(applyMiddleware(...middleware));

  const enhancer = composeEnhancers(...enhancers);
  const store = createStore(rootReducer, enhancer);

  return store;
};

const getStore = () => {
  if (!__store) {
    __store = configureStore();
  }
  return __store;
};

export const store = getStore();
