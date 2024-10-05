import React from 'react';
import { View } from 'react-native';
import StarbucksClone from '../components/StarbucksClone'; // Bileşen yolu

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <StarbucksClone />
    </View>
  );
}
