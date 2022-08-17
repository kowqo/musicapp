import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import React from 'react';
import uuid from 'react-native-uuid';

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  const blockWidth = width * 0.87;
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * blockWidth, i * blockWidth, (i + 1) * blockWidth];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [31, 45, 31],
          extrapolate: 'clamp',
        });
        const bgColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#C4C4C4', '#2C2F3D', '#C4C4C4'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, backgroundColor: bgColor }]}
            key={uuid.v4()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    position: 'absolute',
    left: 390 / 3.6,
    top: 587,
  },
  dot: {
    height: 5,
    borderRadius: 5,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 8,
  },
  active: {
    backgroundColor: '#2C2F3D',
  },
});
