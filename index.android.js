/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var dataModuel = NativeModules.DataModule;
var MOCKED_MOVIES_DATA = [
{title: "This is movie title", year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
];
var bridge = NativeModules.BridgeModule;
var movie = MOCKED_MOVIES_DATA[0];
// var ScrollResponderMixin={
//     mixins: [Subscribable.Mixin],
//    componentWillMount:function(){
//      console.log("inside will mount2");
//      DeviceEventEmitter.addListener('keyboardWillShow',function(e:Event){
//      });
//    },
//  }

class MovieDetail extends Component{
  render(){
    return (<Text>"This is a movie detail page"</Text>);
  }
};

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
        loaded:false
      };
      DeviceEventEmitter.addListener('keyboardWillShow',(e)=>{
        console.log("Got event");
      })
    }

  render() {
    if (!this.state.dataSource) {
      return this.renderLoadingView();
    }

    // var movie = this.state.movies[0];
    // return this.renderMovie(movie);
    return (<ListView
      dataSource = {this.state.dataSource}
      renderRow = {this.renderMovie}
      style = {styles.ListView}
      />);
  };

  componentDidMount() {
   this.fetchData();
 }
// getting data from internet
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
       console.warn(movie.title+" row:"+row);
       bridge.startMovieActivity();
    }} underlayColor='#eeeeee'>
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
   );
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
//AppRegistry.registerComponent('MovieDetail', () => MovieDetail);
