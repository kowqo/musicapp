import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import React from 'react';

const FlatListItem = ({ item, index, blockWidth, blockPadding, scrollX }) => {
  const inputRange = [(index - 1) * blockWidth, index * blockWidth, (index + 1) * blockWidth];

  const scrollY = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
  });
  return (
    <View style={{ width: blockWidth }}>
      <Animated.View
        style={{
          marginHorizontal: blockPadding - 10,
          padding: blockPadding,
          borderRadius: 34,
          backgroundColor: '#fff',
          alignItems: 'center',
          transform: [{ scaleY: scrollY }],
        }}>
        <Image source={item.image} style={[styles.posterImage, { height: blockWidth * 1.2 }]} />
        <View style={styles.view}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 50,
  },
  title: {
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
