import { NAMESPACE_SEP } from "./constants";

function prefix(obj, namespace) {
  return Object.keys(obj).reduce((memo, key) => {
    const newKey = `${namespace}${NAMESPACE_SEP}${key}`;
    memo[newKey] = obj[key];
    return memo;
  }, {});
}
export default function prefixNamespace(model) {
  if (model.reducers) model.reducers = prefix(model.reducers, model.namespace);
  return model;
}
