'use strict';
//var MOCKED_MOVIES_DATA = [{title: "This is movie title", year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}];

var React = require('react-native');
var {
  Component,
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
  TouchableOpacity
} = React;


var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    var previousRoute = navState.routeStack[index - 1];

    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    if(route.index===1){
      return null;
    }
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.name}
      </Text>
    );
  },

};

function newRandomRoute() {
  return {
    title: '#' + Math.ceil(Math.random() * 1000),
  };
}

// request url from movie database
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
// import module
var Awe  = require('./AwesomeProject');
var Detail = require('./detail');

var ActionBar = React.createClass({
  // render nav
  _renderScene(route,navigator){
      console.warn("route:"+route.index);
      if(route.index===0){
        return(<Awe route={route} navigator={navigator}/>);
      }
      // }else if(route.index===1){
      //    return(<Detail route={route} navigator={navigator} title={'Brave Heart'} des={"This is movie description"}>);
      // }
    },
  // render navigator
  render:function(){
    return (<Navigator
    initialRoute={{name:'Popular Movies',index:0,component:Awe}}
    renderScene={this._renderScene}
    navigationBar={
           <Navigator.NavigationBar
             routeMapper={NavigationBarRouteMapper}
             style = {styles.navBar}
           />
         }
    />);
  }




});

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
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#00B2EE'
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    alignSelf:'center'
  },
  navBarTitleText: {
    color: 'black',
    fontWeight: '500',
    marginVertical: 9,
  },
});

var navStyles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent('ActionBar', () => ActionBar);
