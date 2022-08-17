import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { black, white } from '../../styles/COLORS';
import Arrows from '../../assets/screens/arrows.svg';

const GrayButton = ({ text, opacity = 1, onPress }) => {
  return (
    <Pressable style={[styles.button, { opacity }]} title={text} onPress={onPress}>
      <Text style={styles.text}>
        {text}
        {'     '}
        <Arrows style={styles.svg} width={12} height={12} />
      </Text>
    </Pressable>
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
  svg: {
    alignmentBaseline: 'center',
  },
});
