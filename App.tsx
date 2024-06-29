import React from 'react';
import {StyleSheet, Text, View, NativeModules} from 'react-native';

const {HelloModule} = NativeModules;

const App = () => {
  const handleOnPress = () => {
    HelloModule.navigateToNative();
  };

  return (
    <View style={styles.container}>
      <Text onPress={handleOnPress} style={styles.btn}>
        Click Here...👆 to Navigate to Native Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 10,
  },
});

export default App;
