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
  Linking,
} from 'react-native';


class MovieDetail extends Component{
  constructor(props){
    super(props)
    this.state={
      movie:props.movie,
    };
    console.log(JSON.stringify(props.movie));
  }

  render(){
    return (
      <View style={styles.container}>
      <Image style={styles.largeImage} source={{uri:this.state.movie.posters.original}}/>
      <Text style = {styles.textStyle}>{'Title:'+this.state.movie.title}</Text>
      <Text style = {styles.textStyle}>{'Rating:'+this.state.movie.ratings.audience_score}</Text>
      <Text style = {styles.textStyle}>{'Year:'+this.state.movie.year}</Text>
      <Text onPress={()=>{
        Linking.openUrl(this.state.movie.links.alternate);
      }} style = {styles.textStyle}>{'Link:'+this.state.movie.links.alternate}</Text>
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
  textStyle:{
    marginTop:10,
    fontSize:16,
    fontWeight:'200',
    color:'black'
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
