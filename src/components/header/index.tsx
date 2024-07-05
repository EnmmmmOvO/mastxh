import { FC, useState } from 'react';
import { View } from '@tarojs/components';
import { usePageScroll } from '@tarojs/taro';
import { AtIcon } from 'taro-ui';
import './style.scss';


const Header : FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollCache, setScrollCache] = useState<number>(0);

  usePageScroll(({ scrollTop }) => {
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
      className={`w-screen fixed top-0 left-0 z-50 bg-white header-transition ${show ? 'header-show' : 'header-hidden'}`}
    >
      <View className='flex justify-end items-center p-3'>
        <AtIcon value='menu' size='15' color='#000' />
      </View>
    </View>
  )
}

export default Header;
