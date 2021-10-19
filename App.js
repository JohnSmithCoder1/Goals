import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder='Course Goal' style={{borderColor: 'black', borderWidth: 1, padding: 10}} />
        <Button title='ADD' />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
