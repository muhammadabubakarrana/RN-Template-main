import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Wrapper, Text } from '../../../components';
import { appStyles } from '../../../services';

function Splash() {
  return (
    <Wrapper style={styles.main} isMain isCenter isGradient>
      <Text style={styles.txt} isXXLTitle>REDUX APP</Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  main: {
    ...appStyles.alignItemsCenter,
    ...appStyles.justifyContentCenter
  },
  txt: {
    ...appStyles.fontExtraBold,
    ...appStyles.textLarge,
    ...appStyles.h1,
    color: "#fb5f26"
  }
});

export default Splash;
