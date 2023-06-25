import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Images, Text } from '../components';
import { appStyles, colors, sizes } from '../services';
import { height, width, totalSize } from "react-native-dimension"


export const ItemsList = ({ style, data, onPress }) => {
    return (
        <FlatList
            style={[style]}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <View style={styles.row}>
                    <View style={styles.boxTxt} >
                        <Text style={styles.numTxt} isSmallTitle >{`item ${item.num}`}</Text>
                        <TouchableOpacity onPress={onPress} style={styles.btn}>
                            <Text style={styles.txt} > Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Image   resizeMode='contain' /> */}
                    <Images.SqareRound width style={styles.img} source={item.img} />
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    row: {
        ...appStyles.flexDirectionRow,
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: height(1),
        ...appStyles.borderedWrapper,
        backgroundColor: colors.appBgColor3
    },
    txt: {
        ...appStyles.buttonText
    },
    btn: {
        ...appStyles.buttonColord,
        height: height(4),
        borderRadius: 5,
        paddingHorizontal: width(2),
        backgroundColor: colors.success,
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
        color: "black"
    }
});
