import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory, createMemoryHistory } from "history";
import rootReducer from "reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';

export default (url = "/") => {
  const history = createBrowserHistory();

  const enhancers = [];

  if (process.env.NODE_ENV !== "production") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const middleware = [
    routerMiddleware(history),
    thunk
  ];
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const initialState = {};

  const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers
  );
  return {
    store,
    history
  };
};
