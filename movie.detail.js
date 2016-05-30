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

class MovieDetail extends Component{
  render(){
    return (<Text>"This is a movie detail page"</Text>);
  }
};

AppRegistry.registerComponent('MovieDetail', () => MovieDetail);
