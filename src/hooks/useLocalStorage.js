export const useLocalStorage = {
  setItem(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
  },
  removeItem(id) {
    localStorage.removeItem(id);
  },
  getItem(id) {
    const storage = JSON.parse(localStorage.getItem(id));

    console.log(storage);
    return storage;
  },
};

export default useLocalStorage;
