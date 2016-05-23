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
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


var MOCKED_MOVIES_DATA = [
{title: "牛逼", year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
];

var movie = MOCKED_MOVIES_DATA[0];



class AwesomeProject extends Component {

  constructor(props) {
      super(props);
      this.state = {
        movies: null,
        dataSource: new ListView.DataSource({
          rowHasChanged:(row1,row2)=> row1!==row2,
        }),
        loaded:false
      };
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
  console.warn("this is a did mount");
   this.fetchData();
 }
// getting data from internet
 fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.warn(responseData.movies);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
         loaded: true,
        });
      })
      .done();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
   return (
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
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
