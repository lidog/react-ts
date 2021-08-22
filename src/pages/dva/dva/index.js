import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import * as sagaEffects from "redux-saga/effects";
import { NAMESPACE_SEP } from "./constants";
import { connect, Provider } from "react-redux";
import prefixNamespace from "./prefixNamespace";

export { connect };

function dva() {
  const app = {
    _models: [],
    model,
    router,
    _router: null,
    start,
  };
  const initialReducers = {};
  function model(model) {
    const prefixedModel = prefixNamespace(model);
    app._models.push(prefixedModel);
    return prefixedModel;
  }
  function router(router) {
    app._router = router;
  }

  function start(root) {
    for (const model of app._models) {
      initialReducers[model.namespace] = getReducer(model);
    }
    const rootReducer = createReducer();
    const sagas = getSagas(app);
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagas.forEach(saga => sagaMiddleware.run(saga));
    ReactDOM.render(
      <Provider store={store}>{app._router()}</Provider>,
      document.querySelector(root)
    );
    function createReducer() {
      return combineReducers(initialReducers);
    }
  }
  function getSagas(app) {
    const sagas = [];
    for (const model of app._models) {
      sagas.push(getSaga(model.effects, model));
    }
    return sagas;
  }
  return app;
}
function getSaga(effects, model) {
  return function* () {
    for (const key in effects) {
      const watcher = getWatcher(key, model.effects[key], model);
      yield sagaEffects.fork(watcher);
    }
  };
}
function getWatcher(key, effect, model) {
  return function* () {
    yield sagaEffects.takeEvery(key, function* sagaWithCatch(...args) {
      yield effect(...args, {
        ...sagaEffects,
        put: action => sagaEffects.put({ ...action, type: prefixType(action.type, model) }),
      });
    });
  };
}
function prefixType(type, model) {
  if (type.indexOf("/") === -1) {
    return `${model.namespace}${NAMESPACE_SEP}${type}`;
  }
  return type;
}
function getReducer(model) {
  const { reducers, state: defaultState } = model;
  const reducer = (state = defaultState, action) => {
    const reducer = reducers[action.type];
    if (reducer) {
      return reducer(state, action);
    }
    return state;
  };
  return reducer;
}

export default dva;
