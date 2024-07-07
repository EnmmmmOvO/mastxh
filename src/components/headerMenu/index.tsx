import { FC } from 'react';
import { View } from '@tarojs/components';
import List from './list';




const HeaderMenu: FC = () => {
  const menu = ['首页', '联系我们', '新闻',];

  return (
    <View className='p-2 pt-0 w-full box-border'>
      {menu.map((title, index) => <List key={index} index={index} title={title} />)}
    </View>
  );
}

export default HeaderMenu;
