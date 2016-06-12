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
} = React;

// request url from movie database
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
// import module
var Awe  = require('./AwesomeProject');
// calling android native module


var ActionBar = React.createClass({
  _renderScene(route,navigator){
      return(<Awe route={route} navigator={navigator}/>  );
  },

  render:function(){
    return <Navigator
    initialRoute={{name:'My first scene',index:0,component:Awe,title:"this is navigator"}}
    renderScene={this._renderScene}
    />
  }
});

class MovieDetail extends Component{
  constructor(props){
    super(props)
    this.state={
      movie:props.movie,
      loaded:false,
      title:props.title,
      test:props.test,
    };
  }

  render(){
    return (
      <Text>this is title</Text>


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

var navStyles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent('ActionBar', () => ActionBar);
