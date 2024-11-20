import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '@/components/Button';
import Title from '@/components/Title';
import Paragraph from '@/components/Paragraph';
import SlideIndicator from '@/components/SlideIndicator';
import { useRouter } from 'expo-router';

const AuthScreen = () => {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 30,
        gap: 30,
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 60,
      }}
    >
      <View style={{ overflow: 'hidden', borderRadius: 40 }}>
        <ImageBackground
          style={{
            height: 400,
            width: '100%',
            backgroundColor: '#6b56f1',
          }}
          source={{
            uri: 'https://robohash.org/iqbalfarhan08',
          }}
        />
      </View>
      <View style={{ gap: 20 }}>
        <Title style={{ textAlign: 'center' }}>
          Transform speect to Text Effortlessly.
        </Title>
        <Paragraph style={{ textAlign: 'center' }}>
          Capture every detail with RecogNotes, Record conversations, lecture,
          meeting and more, and watch as they transcriped into accurate text
          instantly.
        </Paragraph>
      </View>
      <SlideIndicator count={5} active={1} />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button
          label='Register'
          mode='filled'
          color='#6b56f1'
          onPress={() => {
            router.push('/register');
          }}
        />
        <Button
          label='Sign In'
          mode='outlined'
          color='#6b56f1'
          onPress={() => router.push('/login')}
        />
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
