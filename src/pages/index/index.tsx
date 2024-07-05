import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components';
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import Header from '../../components/header';


export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <>
        <Header />
        <View className='bg-black w-screen h-[5000px] -z-50' />
      </>
    )
  }
}
