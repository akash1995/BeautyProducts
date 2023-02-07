import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
  Pressable,
} from 'react-native';
import Images from '../../common/assets/images';
import SvgIcon from '../../common/assets/images/SvgIcon';
import Fonts from '../../common/assets/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
const images = new Array(3).fill(Images.bodyDetail);
export default class ProductDetailScreen extends Component {
  scrollX = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.state = {
      tag: 'all',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Pressable
          style={styles.cartBackIcon}
          onPress={() => this.props.navigation.goBack()}>
          <SvgIcon width={30} height={30} icon={'back1'} />
        </Pressable>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.scrollX,
                    },
                  },
                },
              ],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={1}>
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{width: this.state.width, height: this.state.height}}
                  key={imageIndex}>
                  <ImageBackground source={image} style={styles.card}>
                    {console.log(images)}
                  </ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = this.scrollX.interpolate({
                inputRange: [
                  this.state.width * (imageIndex - 1),
                  this.state.width * imageIndex,
                  this.state.width * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, {width}]}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.ingreListCon}>
          <View style={styles.ingreCon}>
            <View style={styles.ingreIcon}>
              <SvgIcon width={30} height={30} icon={'fruits'} />
            </View>
            <Text style={styles.ingreType}>Fruits</Text>
          </View>
          <View style={styles.ingreCon}>
            <View style={styles.ingreIcon}>
              <SvgIcon width={30} height={30} icon={'vegitables'} />
            </View>
            <Text style={styles.ingreType}>Vegetables </Text>
          </View>
          <View style={styles.ingreCon}>
            <View style={styles.ingreIcon}>
              <SvgIcon width={30} height={30} icon={'native'} />
            </View>
            <Text style={styles.ingreType}>Natives</Text>
          </View>
        </View>
        <View style={styles.productDetail}>
          <View style={styles.productDetailFirst}>
            <View style={styles.productSpecCon}>
              <Text style={styles.productName}>Facial Cleaner</Text>
              <Text style={styles.productQuan}>Size:4.23 fl oz/125ml</Text>
            </View>
            <View style={styles.cartAction}>
              <TouchableOpacity>
                <SvgIcon width={30} height={30} icon={'remove'} />
              </TouchableOpacity>

              <Text style={styles.itemCount}>1</Text>
              <TouchableOpacity>
                <SvgIcon width={30} height={30} icon={'add'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.productDetailSec}>
            <View style={styles.ammountCon}>
              <View style={{alignSelf: 'center'}}>
                <SvgIcon width={27} height={27} icon={'dollar'} />
              </View>
              <Text style={styles.ammount}>11.99</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.cartBtn}
                onPress={() => this.props.navigation.navigate('CartScreen')}>
                <Text style={styles.cartText}>Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {backgroundColor: '#ececf0', height: '100%'},
  cartBackIcon: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 2,
  },
  scrollContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: '75%',
  },
  SearchCon: {
    paddingHorizontal: 20,
  },
  searchTtl: {
    color: '#000',
    fontSize: 20,
    fontFamily: Fonts.type.NunitoBlack,
  },
  searchBoxCon: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchTextBoxCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  searchText: {
    height: 50,
    borderColor: '#f9f9f9',
    borderWidth: 1,
    borderRadius: 10,
    color: '#000',
    backgroundColor: '#f9f9f9',
    fontFamily: Fonts.type.NunitoBold,
    paddingLeft: 35,
    width: '100%',
  },
  filerIocn: {
    width: '10%',
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
  },
  searchIcon: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '10%',
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },

  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: '100%',
  },
  ingreCon: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: 100,
    height: 100,
  },
  ingreListCon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingBottom: 30,
    position: 'relative',
    bottom: '90%',
  },

  ingreType: {
    color: '#000',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 13,
    alignSelf: 'center',
  },
  ingreIcon: {
    alignSelf: 'center',
    marginTop: 25,
  },
  productDetail: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  productDetailFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productDetailSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  productSpecCon: {
    paddingVertical: 5,
  },
  productName: {
    fontFamily: Fonts.type.FredokaOne,
    color: '#000',
    fontSize: 20,
  },
  productQuan: {
    color: '#000',
    fontFamily: Fonts.type.NunitoLight,
    paddingVertical: 5,
  },
  cartAction: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  itemCount: {
    fontFamily: Fonts.type.NunitoBlack,
    color: '#000',
    fontSize: 20,
    paddingHorizontal: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  ammountCon: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ammount: {
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 25,
    color: '#000',
  },
  cartBtn: {
    backgroundColor: '#000',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
  },
  cartText: {
    textAlign: 'center',
    fontFamily: Fonts.type.FredokaOne,
    color: '#fff',
    fontSize: 16,
  },
});
