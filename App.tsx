/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isAspectRatioUndefined, setAspectRatioUndefined] = useState(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View
        style={{
          width: 100,
          backgroundColor: 'red',
          aspectRatio: isAspectRatioUndefined ? undefined : 16 / 9,
        }}
      />
      <Button
        title={'Toggle aspect ratio is undefined'}
        onPress={() => setAspectRatioUndefined(v => !v)}
      />
    </SafeAreaView>
  );
}

export default App;
