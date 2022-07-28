import React from 'react';
import LottieView from 'lottie-react-native';

const AmazonLoader = () => {
  return <LottieView source={require('./amazonloader.json')} autoPlay loop />;
}

export default AmazonLoader