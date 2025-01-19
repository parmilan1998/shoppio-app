import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/index';

interface SplashScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const translateAnim = React.useRef(new Animated.Value(50)).current;

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fadeAnimation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    });

    const translateAnimation = Animated.timing(translateAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    });

    Animated.parallel([fadeAnimation, translateAnimation]).start(() => {
      setTimeout(() => {
        navigation.replace('Welcome');
      }, 4000);
    });

    return () => {
      fadeAnim.stopAnimation();
      translateAnim.stopAnimation();
    };
  }, [navigation, fadeAnim, translateAnim]);

  return (
    <LinearGradient colors={['#FF7E5F', '#FEB47B']} style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{translateY: translateAnim}],
          },
        ]}>
        <Image
          source={require('../assets/images/shoppio.png')}
          style={styles.logo}
          resizeMode="contain"
          onLoad={() => setImageLoaded(true)}
          onError={() => console.warn('Failed to load logo image.')}
          accessible={true}
          accessibilityLabel="Shoppio logo"
        />
        {imageLoaded && (
          <Text
            style={styles.tagline}
            accessible={true}
            accessibilityRole="text">
            Empowering Your Future
          </Text>
        )}
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  tagline: {
    marginTop: 20,
    fontSize: 28,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default SplashScreen;
