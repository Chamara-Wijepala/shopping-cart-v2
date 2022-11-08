import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialData: T) {
  const [storedData, setStoredData] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialData;
  });

  function setData(value: T | ((val: T) => T)) {
    const dataToStore = value instanceof Function ? value(storedData) : value;

    setStoredData(dataToStore);

    window.localStorage.setItem(key, JSON.stringify(dataToStore));
  }

  function deleteData() {
    window.localStorage.removeItem(key);
  }

  return [storedData, setData, deleteData] as const;
}
