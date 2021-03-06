import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
  name:'ImageView',
  propTypes:{
    src:PropTypes.string,
    borderRadius:PropTypes.number,
    resizeMode:PropTypes.oneOf(['cover','contain','stretch']),
    View.propTypes
  },
}

module.exports = requireNativeComponent('RCTImageView', iface);
