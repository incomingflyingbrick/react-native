'use strict';
import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
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
      year:props.year,
    };
  }

  render(){
    return (
      <View style={styles.container}>
      <Image style={styles.largeImage} source={{uri:'http://i.imgur.com/UePbdph.jpg'}}/>
      <Text>{this.state.title}</Text>
      <Text>{this.state.des}</Text>
      <Text>{this.state.year}</Text>
      </View>
    );
  }
};



var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  largeImage: {
    width: 106,
    height: 162,
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
