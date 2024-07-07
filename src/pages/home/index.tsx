import { FC } from 'react';
import { Image, View } from '@tarojs/components';
import HomeImage from '../../../material/img/home.jpg';

const Home: FC = () => {
  return (
    <View>
      <View> 澳大利亚 </View>
      <View> 马鞍山同乡会 </View>
      <Image src={HomeImage} className='w-full' />
    </View>
  );
}

export default Home;
