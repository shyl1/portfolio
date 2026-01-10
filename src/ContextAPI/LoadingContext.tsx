import { createContext, useEffect, useState } from "react";

type LoadingContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {}
});

function LoadingProvider({ children } : { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <LoadingContext.Provider value={{ loading , setLoading}}>
      {children}
    </LoadingContext.Provider>
  );
}


export { LoadingProvider}

export default LoadingContext;