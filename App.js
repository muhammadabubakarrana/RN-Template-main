import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import myStore2 from './src/reduxTookit/myStore';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Signin} from './src/screens/authFlow';
import {Home, PracticeComponent} from './src/screens/appFlow';
export default function App() {
  return (
    <RootSiblingParent>
      <Provider store={myStore2}>
        <SafeAreaProvider style={{flex: 1}}>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </RootSiblingParent>
  );
}
