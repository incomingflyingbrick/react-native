'use strict';
import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  StyleSheet,
  ListView,
  Text,
  View,
  NativeModules,
  DeviceEventEmitter,
  TouchableHighlight,
  Navigator,
} from 'react-native';


class MovieDetail extends Component{
  constructor(props){
    super(props)
    this.state={
      movie:props.movie,
      des:props.des,
      title:props.title,
      url:props.url,
    };
  }

  render(){
    return (
      <Text>{this.state.title}</Text>
    );
  }
};



var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer:{
    flex:1
  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center'
  },
  year:{
    textAlign:'center'
  },
});

module.exports = MovieDetail;
