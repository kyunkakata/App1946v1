import React, { Component } from 'react'
import Bill from './components/Bill'
import ItemMenu from './components/ItemMenu'
import Menu from './components/Menu'
import {createStackNavigator} from 'react-navigation'
import ShowItem from './components/ShowItem'
import AboutUs from './components/AboutUs'
import Setting from './setting/Setting'
import Setting2 from './setting/Setting2'
export class App extends Component {
  render() {
    return (
      <RootStack />
    )
  }
}
const RootStack =createStackNavigator({
  Bill:Bill,
  ItemMenu:ItemMenu,
  Menu:Menu,
  ShowItem:ShowItem,
  AboutUs:AboutUs,
  Setting:Setting,
  Setting2:Setting2,
},
{
  initialRouteName:'Menu',
  headerMode:'none',
  navigationOptions:{
    headerVisible:false,
  }
})

export default App