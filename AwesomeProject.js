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
} from 'react-native';
var dataModuel = NativeModules.DataModule;

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class AwesomeProject extends Component {

  displayMoiveName(name){
     alert(name);
  }

  constructor(props) {
      super(props);
      this.state = {
        movies: null,
        dataSource: new ListView.DataSource({
          rowHasChanged:(row1,row2)=> row1!==row2,
        }),
        loaded:false,
        clicked:false,
        test:'Sina'
      };
      DeviceEventEmitter.addListener('data',(e)=>{
        console.log("Got event");
      })
    }

  render() {
    if (!this.state.dataSource) {
      return this.renderLoadingView();
    }

    // if(this.state.loaded){
    //   return <MovieDetail title={"Brave Heart"} test={this.state.test} ></MovieDetail>
    // }

    return (
      <ListView
      dataSource = {this.state.dataSource}
      renderRow = {this.renderMovie}
      style = {styles.ListView}
      />
    );
  };

  componentDidMount() {
   this.fetchData();
 }

// Getting data from internet
 fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        dataModuel.showData("Finished Loading",1000);
        console.log("after show toast");
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      }).done();
    }

  // loading view
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie,section,row) {
    return (
      <TouchableHighlight onPress={()=>{
        console.warn("Row pressed:"+row)
      }} underlayColor='#eeeecc'>
     <View style={styles.container}>
       <Image
         source={{uri: movie.posters.thumbnail}}
         style={styles.thumbnail}
       />
       <View style={styles.rightContainer}>
         <Text style={styles.title}>{movie.title}</Text>
         <Text style={styles.year}>{movie.year}</Text>
       </View>
     </View>
     </TouchableHighlight>
   )
  }
}

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
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  active:{
    borderWidth:2,
    borderColor:'#00ff00'
  },
  base:{
    width:38,
    height:38,
  },
});
module.exports = AwesomeProject;
