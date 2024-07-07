import { createContext } from 'react';

interface MenuContextType {
  menuVisible: boolean;
  setMenuVisible: (menuVisible: boolean) => void;
}

const MenuContext = createContext<MenuContextType>({
  menuVisible: false,
  setMenuVisible: () => {
    if (process.env.NODE_ENV === 'development') {
      console.error('MenuContext is not defined');
    }
  }
});

export default MenuContext;
