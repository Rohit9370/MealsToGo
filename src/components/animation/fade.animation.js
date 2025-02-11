import { Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';

const FadeAnimation = ({ duration = 1500, children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true, // Add useNativeDriver for better performance
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeAnimation;