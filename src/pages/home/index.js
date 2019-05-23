import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import styles from './index.module.scss'

@connect(({ index }) => ({
  ...index,
  // ...global
}))
class Home extends Component {

  config = {
    navigationBarTitleText: 'HOME'
  }

  componentWillMount () { }

  componentDidMount () {
    // this.props.dispatch({
    //   type: 'save',
    //   payload: {
    //     page: 10
    //   }
    // });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(this.props);
    return (
      <View className='index'>
        <Text className={styles.text}>HOME</Text>
      </View>
    )
  }
}
export default Home;