import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'dripsy';

// @ts-ignore
export default function Button({ children }) {
  return <Text sx={{ color: 'primary' }}>{children}</Text>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {}
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
};
