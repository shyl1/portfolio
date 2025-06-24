import { createContext, useState } from "react";

type LoadingContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {}
});

function LoadingProvider({ children } : { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading , setLoading}}>
      {children}
    </LoadingContext.Provider>
  );
}


export { LoadingProvider}

export default LoadingContext;