import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import SplashIcon from '../assets/splashIcon.svg';
import { whiteCont } from '../styles/COLORS';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('GuidePage');
    }, 2500);
  });
  return (
    <View style={styles.container}>
      <SplashIcon width={90} height={90} />
      <Text style={styles.text}>Human Music</Text>
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
  text: {
    fontFamily: 'DINCond-Regular',
    fontSize: 35,
    lineHeight: 42,
    textAlign: 'center',
  },
});

export default Splash;
