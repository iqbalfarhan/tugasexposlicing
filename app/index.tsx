import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Button from '@/components/Button';
import Title from '@/components/Title';
import Paragraph from '@/components/Paragraph';
import SlideIndicator from '@/components/SlideIndicator';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '@/constants/colors';

const AuthScreen = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          padding: 30,
          gap: 30,
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ overflow: 'hidden', borderRadius: 40 }}>
          <ImageBackground
            style={{
              height: 400,
              width: '100%',
              backgroundColor: COLORS.primary,
            }}
            source={{
              uri: 'https://robohash.org/iqbalfarhan08',
            }}
          />
        </View>
        <View style={{ gap: 20, paddingHorizontal: 20 }}>
          <Title style={{ textAlign: 'center' }}>
            Transform speech into Text Effortlessly.
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
            onPress={() => {
              router.push('/register');
            }}
          />
          <Button
            label='Sign In'
            mode='outlined'
            onPress={() => router.push('/login')}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
