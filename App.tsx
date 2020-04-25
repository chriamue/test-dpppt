import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Dpppt from 'react-native-dpppt';

export default function App() {
  Dpppt.init('APP_ID', true);
  Dpppt.requestIgnoreBatteryOptimizations();
  Dpppt.requestLocationAccess();
  Dpppt.start();
  Dpppt.status().then((status: any) => console.log(status))
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={() => Dpppt.requestIgnoreBatteryOptimizations()} title='battery' />
      <Button onPress={() => Dpppt.status().then((status: any) => console.log(status))} title='status' />

      <Button onPress={() => Dpppt.start()} title='start' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
