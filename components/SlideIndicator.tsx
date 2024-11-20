import { View, Text } from 'react-native';
import React, { FC } from 'react';

interface SlideIndicatorProps {
  count: number;
  active?: number;
}

const SlideIndicator: FC<SlideIndicatorProps> = ({ count, active }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: active === index + 1 ? '#6b56f1' : '#d9d4fb',
          }}
          key={index}
        ></View>
      ))}
    </View>
  );
};

export default SlideIndicator;
