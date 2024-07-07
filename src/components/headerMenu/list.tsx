import { FC, useContext } from 'react';
import { View } from '@tarojs/components';
import PageContext from '../../contexts/pageContext';
import './style.scss'
import MenuContext from '../../contexts/menuContext';

interface HeaderMenuProps {
  title: string;
  index: number;
}

const List: FC<HeaderMenuProps> = ({ title, index}) => {
  const {page, setPage} = useContext(PageContext);
  const {setMenuVisible} = useContext(MenuContext);

  const handleClick = () => {
    setPage(index);
    setTimeout(() => setMenuVisible(false), 0.2);
  };

  return (
    <View
      onClick={handleClick}
      className={`px-4 py-2 w-full text-sm mt-1 ${index === page ? 'selected' : ''}`}
    >
      {title}
    </View>
  );
}

export default List;
