import { createContext } from 'react';

interface PageContextType {
  page: number;
  setPage: (page: number) => void;
}

const PageContext = createContext<PageContextType>({
  page: 0,
  setPage: () => {
    if (process.env.NODE_ENV === 'development') {
      console.error('PageContext is not defined');
    }
  }
});

export default PageContext;
