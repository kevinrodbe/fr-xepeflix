export function webStorage(storageType) {
  const types = {
    local: window.localStorage,
    session: window.sessionStorage,
  };
  const selectedStorage = types[storageType] || types.session;

  function _parserToString(val) {
    return typeof val === 'string' ? val : JSON.stringify(val);
  }

  function get(key) {
    return JSON.parse(selectedStorage.getItem(key));
  }

  function set(key, value) {
    selectedStorage.setItem(key, _parserToString(value));
  }

  function remove(key) {
    selectedStorage.removeItem(key);
  }

  return {
    get,
    remove,
    set,
  };
}
