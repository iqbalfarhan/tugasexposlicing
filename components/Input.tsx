import { TextInput, TextInputProps, View } from 'react-native';
import React, { FC } from 'react';
import { Octicons } from '@expo/vector-icons';

type InputProps = TextInputProps & {
  rightIcon?: keyof typeof Octicons.glyphMap;
  leftIcon?: keyof typeof Octicons.glyphMap;
};

const Input: FC<InputProps> = ({ rightIcon, leftIcon, ...props }) => {
  return (
    <View
      style={{
        backgroundColor: '#f2f2f2',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        gap: 10,
        paddingVertical: 7,
        borderRadius: 14,
      }}
    >
      {leftIcon && <Octicons name={leftIcon} size={20} color={'#aaa'} />}
      <TextInput {...props} style={{ flex: 1, fontFamily: 'Nunito-Medium' }} />
      {rightIcon && <Octicons name={rightIcon} size={20} color={'#aaa'} />}
    </View>
  );
};

export default Input;
