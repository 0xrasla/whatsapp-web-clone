class Storage {
  constructor() {}

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key, value) {
    localStorage.setItem(key, value);
  }

  delete(key) {
    localStorage.removeItem(key);
  }
}

export { Storage };
