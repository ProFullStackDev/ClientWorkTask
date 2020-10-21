import React from 'react';
import { View } from 'react-native';

const Border: React.FC = (props: any) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: '#3E3E3E',
        opacity: 0.1,
        width: '100%',
      }}
    />
  );
};

export default Border;
