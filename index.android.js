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
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={styles.navBarTitleText}>
        {route.name}
      </Text>
    );
  },

};

// request url from movie database
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
// import module
var Awe  = require('./AwesomeProject');
var Detail = require('./detail');

var ActionBar = React.createClass({
   // render navigator
  render:function(){
    return (<Navigator
    initialRoute={{name:'Popular Movies',index:0,component:Awe}}
     renderScene={(route,navigator)=>{
      if(route.index===0){
        return(<Awe route={route} navigator={navigator}/>);
      }
      if(route.index===1){
        return(<Detail route={route} navigator={navigator} movie={route.passProps.data}/>);
      }
    }}
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
  container:{
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
    marginTop:25,
    height:48,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
  },
  navBarText: {
    fontSize: 20,
    marginVertical: 10,
    alignSelf:'center',
    fontWeight: '300',
  },
  navBarTitleText: {
    fontSize:16,
    color: 'black',
    fontWeight: '500',
    alignSelf:'center',
    marginTop:20,
    marginRight:70,
  },
});


AppRegistry.registerComponent('ActionBar', () => ActionBar);
