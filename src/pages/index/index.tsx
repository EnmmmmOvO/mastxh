import { useState } from 'react'
import { View } from '@tarojs/components';
import './index.scss'
import Header from '../../components/header';
import PageContext from '../../contexts/pageContext';
import MenuContext from '../../contexts/menuContext';
import Home from '../home';



const Index = () => {
  const [page, setPage] = useState<number>(0);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const match = {
    0: <Home />,
  }

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
        <Header />
        <View
          className='bg-[#D8D9D7] w-screen h-[5000px] pt-12'
          onClick={() => {
            if (menuVisible) setMenuVisible(false)
          }}
        >
          {match[page]}
        </View>
      </MenuContext.Provider>
    </PageContext.Provider>
  )
}

export default Index
