import React, { Component, isValidElement, useRef, useState } from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import { totalSize, height, width } from 'react-native-dimension';
import { Text, Logos, Toasts, Icons, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Loaders, Pickers, Lines, Modals, Cards, Images, CheckBoxes, Chips, Headers, StatusBars } from '../../../components';
import { appImages, appStyles, routes, } from '../../../services';
import { Swipable } from '../../../components/modals';

function PracticeComponent() {
    const [isModalVisible, setModalVisible] = useState(false);
    const showModal = () => {
        setModalVisible(!isModalVisible)
    };
    const data = [
        {
            text: 'Button 1',
            keyName: 1,
        },
        {
            text: 'Button 2',
            keyName: 2,
        },
    ];


    return (
        <>
            <StatusBars.Dark />
            <Headers.Primary showBackArrow title="Allah" />
            <Wrapper isMain style={[{}]}>
                <ScrollViews.KeyboardAvoiding>
                    <Spacer isBasic />
                    <Wrapper marginHorizontalZero>
                        <TextInputs.Bordered
                            placeholder="Email"
                            iconName="email"
                        />
                        <TextInputs.SearchBar />
                        <TextInputs.Underlined
                            placeholder="Password"
                            iconName="lock"
                            secureTextEntry
                        />
                        <TextInputs.Colored
                            placeholder="Email"
                            iconName="email"
                        />
                    </Wrapper>
                    <Spacer isBasic />

                    <Spacer isDoubleBase />
                    <Buttons.Colored
                        text="Sign In"
                        iconName="access-point"
                        iconType="material-community"
                        onPress={showModal}
                    />
                    <CheckBoxes.Primary text="Allah" />
                    <Icons.Back />

                    <Spacer isBasic />
                    <Lines.Horizontal style={{ marginHorizontal: width(10) }} color="red" height={1} />
                    <Spacer isBasic />

                    <Wrapper alignItemsCenter>
                        <Icons.WithText
                            title="Register Now"
                            iconName="arrow-right"
                            direction="row-reverse"
                            onPress={() => navigate(routes.signup)}
                        />
                    </Wrapper>
                    <Wrapper marginHorizontalSmall>
                        <Chips.Primary
                            disabled
                            containerStyle={{ flexWrap: "wrap" }}
                            // buttonStyle={{ backgroundColor: 'blue' }}
                            // textStyle={{ color: 'white' }} 
                            data={data.map((item) => <Buttons.ColoredSmall key={item.keyName} text={item.text} />)} />
                    </Wrapper>
                    <Icons.Button iconStyle={{ marginTop: height(1) }} iconName="youtube-tv" badgeValue="100" showBadge />
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>
            {/* <Modals.Swipable
                children={<Text>This is the content of the modal</Text>}
                title="My Modal"
                isVisible={isModalVisible}
                toggleModal={showModal}
                footerFlex={1}
                headerFlex={1}
            /> */}
        </>

    );
}

export default PracticeComponent;
