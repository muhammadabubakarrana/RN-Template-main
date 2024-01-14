import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  Wrapper,
  Text,
  Lines,
  Cards,
  StatusBars,
  ItemsList,
  Headers,
  Images,
} from '../../../components';
import {appImages, appStyles, colors, routes, sizes} from '../../../services';
import {height, width, totalSize} from 'react-native-dimension';
import {useDispatch, useSelector} from 'react-redux';
import {addCartItem} from '../../../reduxTookit/cartSlice';

function Home(props) {
  const {navigate} = props.navigation;
  const dispatch = useDispatch();
  const addedItems = useSelector(state => state);
  console.log(addedItems);
  const addItem = item => {
    dispatch(addCartItem(item));
  };
  const data = [
    {
      price: '$77',
      num: 1,
      img: appImages.ShoeOne,
    },
    {
      price: '$67',
      num: 2,
      img: appImages.ShoeTwo,
    },
    {
      price: '$54',
      num: 3,
      img: appImages.ShoeThree,
    },
    {
      price: '$67',
      num: 4,
      img: appImages.ShoeFour,
    },
    {
      price: '$99',
      num: 5,
      img: appImages.ShoeTwo,
    },
    {
      price: '$67',
      num: 6,
      img: appImages.ShoeFive,
    },
  ];

  return (
    <Wrapper isMain>
      <View style={styles.redux}>
        <Text isMediumTitle isBoldFont>
          REDUX APP
        </Text>
        <TouchableOpacity
          onPress={() => navigate(routes.ADD_TO_CART)}
          style={styles.shopingRow}>
          <Image
            resizeMode="contain"
            source={appImages.Shoping}
            style={styles.shoping}
          />
          <Text isBoldFont isXLTitle>
            {addedItems.cart.length}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Spacer isBasic /> */}
      {/* <ItemsList onPress={() => { addItem() }} data={data} /> */}
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.row}>
            <View style={styles.boxTxt}>
              <Text
                style={styles.numTxt}
                isSmallTitle>{`Shoe ${item.num}`}</Text>
              <TouchableOpacity
                onPress={() => {
                  addItem(item);
                }}
                style={styles.btn}>
                <Text isSmallTitle style={styles.txt}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.priceTxt} isSmallTitle>
              {item.price}
            </Text>
            <Images.Round style={styles.img} source={item.img} />
          </View>
        )}
      />
    </Wrapper>
  );
}

export default Home;
const styles = StyleSheet.create({
  redux: {
    ...appStyles.flexDirectionRow,
    ...appStyles.alignItemsCenter,
    ...appStyles.justifyContentSpaceBetween,
    ...appStyles.marginHorizontalSmall,
    ...appStyles.marginVerticalSmall,
  },
  shopingRow: {
    ...appStyles.flexDirectionRow,
    ...appStyles.alignItemsCenter,
    ...appStyles.justifyContentSpaceBetween,
    backgroundColor: 'lightgreen',
    borderRadius: totalSize(4),
    ...appStyles.paddingHorizontalSmall,
  },
  shoping: {
    height: height(5),
    width: width(8),
    ...appStyles.marginHorizontalTiny,
  },
  back: {
    height: height(10),
    width: width(15),
  },
  row: {
    ...appStyles.flexDirectionRow,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height(1),
    ...appStyles.borderedWrapper,
    backgroundColor: colors.appBgColor3,
  },
  txt: {
    ...appStyles.buttonText,
  },
  btn: {
    ...appStyles.buttonColord,
    height: height(4),
    borderRadius: 5,
    paddingHorizontal: width(2),
    backgroundColor: colors.success,
    marginHorizontal: width(0),
  },
  img: {
    height: height(12),
    width: width(24),
  },
  boxTxt: {
    alignItems: 'center',
  },
  numTxt: {
    color: 'red',
  },
  priceTxt: {
    color: 'blue',
  },
});
