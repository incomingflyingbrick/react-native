import React, {
  Component,
} from 'react';
import {
  DrawerLayoutAndroid,
  ProgressBarAndroid,
  Text,
} from 'react-native';

class DrawerLayout extends Component {
  render() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() => <Text>React Native</Text>}>
        <ProgressBarAndroid />
      </DrawerLayoutAndroid>
    );
  }
}
module.exports = DrawerLayout;
