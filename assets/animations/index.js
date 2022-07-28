import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './amazonloader.json';

const AmazonLoader = () => {
     const mainDivStyles = {
       height: '90vh',
       display: 'flex',
       zIndex: 9999999,
       justifyContent: 'center',
       alignItems: 'center',
    };
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
     return (
        <div style={mainDivStyles}>
           <Lottie options={defaultOptions} style={{height:'200px', width:'200px'}}/>
        </div>
     )
}

export default AmazonLoader;