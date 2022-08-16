import { View, Text, StyleSheet, Image, useWindowDimensions, Animated } from 'react-native';
import React from 'react';

const FlatListItem = ({ item, index, scrollX }) => {
  const { width } = useWindowDimensions();
  const blockWidth = width * 0.87;
  const inputRange = [(index - 1) * blockWidth, index * blockWidth, (index + 1) * blockWidth];

  const scrollY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -50, 0],
  });
  return (
    <Animated.View style={[styles.container, { blockWidth, transform: [{ translateY: scrollY }] }]}>
      <Image source={item.image} style={[styles.image]} />
      <View style={styles.view}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Animated.View>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  container: {
    width: 390,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  image: {
    height: 420,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    margin: 0,
  },
  view: {
    flex: 0.3,
  },
  title: {
    marginTop: 56,
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 20,
    lineHeight: 24,
    color: '#2C2F3D',
    textAlign: 'center',
  },
  description: {
    color: '#9FA1AC',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'center',
    paddingHorizontal: 35,
  },
});
