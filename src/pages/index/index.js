import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import styles from './index.module.scss'

@connect(({  global, index }) => ({
  ...index,
  ...global
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    "navigationStyle": "custom"
  }

  componentWillMount () { }

  componentDidMount () {
    this.props.dispatch({
      type: 'index/save',
      payload: {
        page: 10
      }
    });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goHome = () => {
    Taro.navigateTo({
      url: '../home/index'
    })
  }

  render () {
    console.log(this.props);
    return (
      <View className='index'>
        <Text onClick={this.goHome} className={styles.text}>Hello world! 哈哈哈sa {this.props.page}</Text>
      </View>
    )
  }
}
export default Index;