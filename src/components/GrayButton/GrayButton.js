import { StyleSheet, Text, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React from 'react';
import { black, white } from '../../styles/COLORS';

const GrayButton = ({ text, opacity = 0 }) => {
  return (
    <TouchableOpacity style={[styles.button, { opacity }]} title={text}>
      <Text style={styles.text}>
        {text}
        {'     '}>>
      </Text>
    </TouchableOpacity>
  );
};

export default GrayButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 243,
    height: 46,
    backgroundColor: black,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 740,
  },
  text: {
    color: white,
  },
});
