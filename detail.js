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
// import custom view
var CircleImageView = require('./CircleImageView');
var DrawerLayout = require('./drawer');
class MovieDetail extends Component{
  constructor(props){
    super(props)
    this.state={
      movie:props.movie,
      clicked:false,
    };
    console.log(JSON.stringify(props.movie));
  }

  render(){
    if(this.state.clicked){
        return (<DrawerLayout/>)
    }
    return (
      <View style={styles.container}>
      <Image style={styles.largeImage} source={{uri:this.state.movie.posters.original}}/>
      <Text style = {styles.textStyle}>{'Title:'+this.state.movie.title}</Text>
      <Text style = {styles.textStyle}>{'Rating:'+this.state.movie.ratings.audience_score}</Text>
      <Text style = {styles.textStyle}>{'Year:'+this.state.movie.year}</Text>
      <Text onPress={()=>{
        Linking.openUrl('http://stackoverflow.com/questions/35501084/react-native-linking-to-another-app').catch(err=>console.error("Error",err));
      }} style = {styles.textStyle}>{'Link:'+this.state.movie.links.alternate}</Text>
      <CircleImageView style={styles.circleImage} src={this.state.movie.posters.original}  borderRadius={5}
      onPress={
        ()=>{
          this.setState({clicked:true});
        }
      }
      />
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
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center'
  },
  circleImage:{
    width:100,
    height:100
  }
});

module.exports = MovieDetail;
