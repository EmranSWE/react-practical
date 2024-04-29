export const setToLocalStorage = (key: string, token: string) => {
    if (!key || typeof window === "undefined") {
      return "";
    }
    return localStorage.setItem(key, token);
  };
  

  export const setToLoginInfo = (key: string, value: string | boolean | number) => {
    if (!key || typeof window === "undefined") {
      return;
    }
  
    // Convert boolean or number values to string before setting in local storage
    const serializedValue = typeof value === "boolean" || typeof value === "number"
      ? value.toString()
      : value;
  
    localStorage.setItem(key, serializedValue);
  };
  
  export const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === "undefined") {
      return "";
    }
    return localStorage.getItem(key);
  };
  

  export const getToLoginInfo = (key: string): string | null => {
    if (!key || typeof window === "undefined") {
      return null;
    }
  
    return localStorage.getItem(key);
  };