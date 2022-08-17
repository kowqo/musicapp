import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, Animated } from 'react-native';
import GrayButton from '../components/GrayButton/GrayButton';
import Paginator from '../components/Paginator/Paginator';
import data from '../utils/data';

const { width } = Dimensions.get('window');

const blockWidth = width * 0.87;
const blockPaddings = (width - blockWidth) / 2;
const blockPadding = 10;

const GuidePage = ({ navigation }) => {
  let opacity = 1;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {
    opacity = scrollX > 500 ? 1 : 0;
  }, [scrollX]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment="start"
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: blockPaddings,
        }}
        snapToInterval={blockWidth}
        decelerationRate={0}
        pagingEnabled
        scrollEventThrottle={16}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * blockWidth,
            index * blockWidth,
            (index + 1) * blockWidth,
          ];

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
                <Image source={item.image} style={styles.posterImage} />
                <View style={styles.view}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </Animated.View>
            </View>
          );
        }}
      />
      <Paginator data={data} scrollX={scrollX} />
      <GrayButton
        onPress={() => {
          navigation.navigate('Splash');
        }}
        opacity={opacity}
        text="Continue to the app"
      />
    </SafeAreaView>
  );
};

export default GuidePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  posterImage: {
    width: '100%',
    height: blockWidth * 1.2,
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
