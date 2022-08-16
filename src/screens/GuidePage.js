import { View, StyleSheet, FlatList, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { whiteCont } from '../styles/COLORS';
import data from '../utils/data';
import FlatListItem from '../components/FlatListItem/FlatListItem';
import Paginator from '../components/Paginator/Paginator';

const GuidePage = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <FlatListItem item={item} scrollX={scrollX} index={index} />
        )}
        pagingEnabled
        bounces={false}
        key={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
        contentContainerStyle={{ marginHorizontal: 10 }}
      />
      <Paginator data={data} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whiteCont,
  },
  dot: {
    height: 10,
    borderRadius: 0,
    color: '#b0a00a',
    marginHorizontal: 8,
  },
});

export default GuidePage;
