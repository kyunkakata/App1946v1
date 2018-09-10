import React, { Component } from 'react'
import { Text, View,ImageBackground, Image} from 'react-native'

export class LoadingScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            foo:'',
        }
    }
    componentWillMount(){
        const id = this.props.navigation.getParam('itemId','NO-ID');
        this.props.navigation.navigate('ShowItem',{
            itemId:id,itemSelected:this.props.navigation.getParam('itemSelected','NO-ID'),
            onNavigateBack:this.handleOnNavigateBack
        });
    }
    handleOnNavigateBack=(foo)=>{
        this.setState({foo});
        this.props.navigation.navigate('ItemMenu',{
            itemSelected:this.state.foo
        })
      }
  render() {
    return (
      <View  style={{flex:1}}>
        <ImageBackground 
        style={{flex:1,justifyContent:'center',alignItems:'center'}}
        source={require('../assets/menu/background.png')}>
        <Image
          source={require('../assets/icon/logo1946.gif')} 
          style={{height:160,width:200,marginTop:20}}
        />
        <Image 
            source={require('../assets/icon/show-loader.gif')}
        />
        </ImageBackground>
      </View>
    )
  }
}

export default LoadingScreen