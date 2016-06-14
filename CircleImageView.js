'use strict';
import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'CircleImageView',
  propTypes: {
    src: PropTypes.string,
    borderRadius: PropTypes.number,
    ...View.propTypes // include the default view properties
  },
};

module.exports = requireNativeComponent('CircleImageView', iface);
