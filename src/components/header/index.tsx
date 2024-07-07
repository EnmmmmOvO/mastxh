import { FC, useContext, useState } from 'react';
import { View } from '@tarojs/components';
import { usePageScroll } from '@tarojs/taro';
import { AtIcon } from 'taro-ui';
import './style.scss';
import HeaderMenu from '../headerMenu';
import MenuContext from '../../contexts/menuContext';


const Header : FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollCache, setScrollCache] = useState<number>(0);

  const { menuVisible, setMenuVisible } = useContext(MenuContext);

  usePageScroll(({ scrollTop }) => {
    if (menuVisible) return;
    const threshold = 200;
    const buffer = 50;

    if (scrollTop > scrollY) {
      if (scrollTop > threshold + buffer) {
        setShow(false);
        setScrollCache(scrollTop);
      }
    } else {
      if (scrollTop < scrollCache - buffer) {
        setShow(true);
        setScrollCache(scrollTop);
      }
    }
    setScrollY(scrollTop <= 0 ? 0 : scrollTop);
  });

  return (
    <View
      className={`w-screen fixed top-0 left-0 z-50 header-transition ${show ? 'header-show' : 'header-hidden'}`}
    >
      <View className='flex justify-end items-center p-3 bg-white'>
        {
          menuVisible
            ? <AtIcon value='close' size='15' color='#000' className='icon-transition' onClick={() => setMenuVisible(false)} />
            : <AtIcon value='menu' size='15' color='#000' className='icon-transition' onClick={() => setMenuVisible(true)} />
        }
      </View>
      <View className={`menu-transition -mt-1 ${menuVisible ? 'menu-visible' : 'menu-hidden'}`}>
        <HeaderMenu />
      </View>
    </View>
  )
}

export default Header;
