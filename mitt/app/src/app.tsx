import { Component, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import rootStore from './store/store'
import config from './common/config/config'
import './style'

console.log()
class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={rootStore}>{this.props.children}</Provider>
  }
}

export default App
