import React, { Component, useRef, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Logos, Toasts, Icons, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Loaders, Pickers, Lines, Modals } from '../../../components';
import { appStyles, routes, } from '../../../services';

function Signin(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const { navigate } = props.navigation;
  const showModal = () => {
    setModalVisible(!isModalVisible)
  };
  const data = [
    { label: 'Football', value: 'football' },
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
  ]


  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Logos.Primary
            size={totalSize(25)}
          />
          <Spacer isDoubleBase />
        </Wrapper>
        <Spacer isBasic />
        <Wrapper marginHorizontalBase>
          <TextInputs.Colored
            placeholder="Email"
            iconName="email"
          />
          <Spacer isBasic />
          <TextInputs.Underlined
            placeholder="Password"
            iconName="lock"
            secureTextEntry
          />
          <Spacer isDoubleBase />
          <Buttons.Colored
            text="Sign In"
            iconName="login"
            iconType="material-community"
            onPress={showModal}
          />
        </Wrapper>
        <Spacer isBasic />
        <Lines.Horizontal style={{ marginTop: 10 }} color="red" height={1} />
        <Spacer isBasic />

        <Wrapper alignItemsCenter>
          <Icons.WithText
            text="Register Now"
            iconName="arrow-right"
            direction="row-reverse"
            onPress={() => navigate(routes.signup)}
          />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>


  );
}

export default Signin;
