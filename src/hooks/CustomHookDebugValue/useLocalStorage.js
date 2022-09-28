import { useCallback, useState, useEffect, useDebugValue } from "react";

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useDebugValue(value, (v) => getValueSlowly(v));

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}

function getValueSlowly(value) {
  for (let i = 0; i < 30000000; i++) {}
  return value;
}

// useDebugValue работает только внутри пользовательских хуков.
// В примере, функция getValueSlowly будет вызвана только в режиме инструментов разработчика react, при взаимодействии там с useDebugValue, в другом случае она не будет вызвана