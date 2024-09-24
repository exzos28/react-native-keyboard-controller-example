import React from 'react';
import {SafeAreaView, StyleSheet, TextInput as RNTextInput, Text} from 'react-native';

import {
  KeyboardAwareScrollView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';
import {GestureHandlerRootView, TextInput as GHTextInput} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <KeyboardProvider>
        <Content />
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

function Content() {
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.content}>
        <Text>TextInputs from react-native: ✅</Text>
        {new Array(5).fill(null).map((_, i) => (
          <RNTextInput
            key={i}
            style={styles.input}
            placeholder={`${i}`}
          />
        ))}
        <Text>TextInputs from react-native-gesture-handler: ❌</Text>
        {new Array(5).fill(null).map((_, i) => (
          <GHTextInput
            key={i}
            style={styles.input}
            placeholder={`${i}`}
          />
        ))}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  input: {
    padding: 10,
    borderWidth: 1,
  },
  content: {
    gap: 50,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default App;
