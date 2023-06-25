import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Wrapper, Text, Lines, Cards, StatusBars, ItemsList, Headers, Images } from '../../../components';
import { appImages, appStyles, colors, fontFamily, sizes } from '../../../services';
import { height, width, totalSize } from "react-native-dimension";
import { goBack } from '../../../navigation/rootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../../../reduxTookit/cartSlice';



function AddToCart() {
    const items = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeItem = index => {
        dispatch(removeCartItem(index))
    }

    return (
        <Wrapper isMain >
            <View style={styles.redux}>
                <TouchableOpacity onPress={() => goBack()} >
                    <Image resizeMode='contain' source={appImages.Back} style={styles.back} />
                </TouchableOpacity>
            </View>
            {/* <Spacer isBasic /> */}
            {/* <ItemsList onPress={() => { removeItem(index) }} data={items} /> */}
            <FlatList
                data={items}
                renderItem={({ item, index }) => (
                    <View style={styles.row}>
                        <View style={styles.boxTxt} >
                            <Text style={styles.numTxt} isSmallTitle >{`Shoe ${item.num}`}</Text>
                            <TouchableOpacity onPress={() => { removeItem(index) }} style={styles.btn}>
                                <Text style={styles.txt} >Remove</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.priceTxt} isSmallTitle>{item.price}</Text>
                        <Images.SqareRound width style={styles.img} source={item.img} />
                    </View>
                )}
            />
        </Wrapper>

    );
}


const styles = StyleSheet.create({
    redux: {
        ...appStyles.flexDirectionRow,
        ...appStyles.alignItemsCenter,
        ...appStyles.justifyContentSpaceBetween,
        ...appStyles.marginHorizontalSmall
    },
    back: {
        height: height(10),
        width: width(15)
    },
    btn: {
        ...appStyles.buttonColord,
        height: height(4),
        borderRadius: 5,
        paddingHorizontal: width(2),
        backgroundColor: "red",
        marginHorizontal: width(0)
    },
    row: {
        ...appStyles.flexDirectionRow,
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: height(1),
        ...appStyles.borderedWrapper,
        backgroundColor: colors.appBgColor3
    },
    txt: {
        ...appStyles.buttonText,
        color: "white"
    },
    btn: {
        ...appStyles.buttonColord,
        height: height(4),
        borderRadius: 5,
        paddingHorizontal: width(2),
        backgroundColor: "red",
        marginHorizontal: width(0)
    },
    img: {
        height: height(12),
        width: width(24)
    },
    boxTxt: {
        alignItems: "center",
    },
    numTxt: {
        color: "green"
    },
    priceTxt: {
        color: "blue"
    }
});

export default AddToCart;