import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import Loader from '../components/loader/loader';

interface ILoadingContext {
  setLoader: (show: boolean) => void;
}

interface ILoaderContextProps {
  children: React.ReactElement;
}

const LoadingContext = createContext<ILoadingContext>({
  setLoader: () => {},
});

export const LoaderProvider = ({ children }: ILoaderContextProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const setLoader = useCallback((show: boolean) => {
    setLoading(show);
  }, []);

  const contextValue = useMemo(() => {
    return {
      setLoader,
    };
  }, []);

  return (
    <LoadingContext.Provider value={contextValue}>
      {loading && <Loader />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('No Loading Context Found');
  }

  return context;
};
