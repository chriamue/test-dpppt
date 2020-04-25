import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import * as Dp3t from 'react-native-dp3t';


export default function App() {
  Dp3t.initWithDiscovery('appid', true).then(() => Dp3t.start());
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={() => {
        Dp3t.requestPermissions();
      }} title='battery' />
      <Button onPress={async () => {
        const status = await Dp3t.currentTracingStatus().catch((error: any) => console.log(error));

        Alert.alert(
          "DP3-T status",
          JSON.stringify(status),
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }} title='status' />
      <Button onPress={() => {}} title='start' />
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
