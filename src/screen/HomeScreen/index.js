import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import Images from '../../common/assets/images';
import SvgIcon from '../../common/assets/images/SvgIcon';
import Fonts from '../../common/assets/fonts';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: 'all',
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <View style={styles.userDetail}>
              <Image source={Images.profilePic} style={styles.profilepic} />
              <Text style={styles.user}>
                Hello, <Text style={styles.userName}>Akash</Text>
              </Text>
            </View>
            <View style={styles.notification}>
              <SvgIcon width={20} height={20} icon={'bell'} />
            </View>
          </View>
          <View style={styles.SearchCon}>
            <Text style={styles.searchTtl}>Find Your beauty products</Text>
            <Pressable
              style={styles.searchBoxCon}
              onPress={() => this.props.navigation.navigate('SearchScreen')}>
              <View style={styles.searchTextBoxCon}>
                <View style={styles.searchIcon}>
                  <SvgIcon icon={'search'} width={17} height={17} />
                </View>
                <TextInput
                  style={styles.searchText}
                  placeholder={'Search Product'}
                  placeholderTextColor={'#aaa'}
                  editable={false}
                  selectTextOnFocus={false}
                />
                <Pressable style={styles.filerIocn}>
                  <SvgIcon width={20} height={20} icon={'filer1'} />
                </Pressable>
              </View>
            </Pressable>
          </View>

          <View style={styles.bannerCon}>
            <Image source={Images.hairban1} style={styles.banImg} />
          </View>

          <View style={styles.catCon}>
            <Text style={styles.catText}>Categories</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{marginTop: 7}}>
              <Pressable
                style={styles.catBtn}
                onPress={() => this.setState({tag: 'all'})}>
                <Text
                  style={
                    this.state.tag === 'all'
                      ? styles.activeCatText
                      : styles.deactiveCatText
                  }>
                  ALL
                </Text>
              </Pressable>

              <Pressable
                style={styles.catBtn}
                onPress={() => this.setState({tag: 'face'})}>
                <Text
                  style={
                    this.state.tag === 'face'
                      ? styles.activeCatText
                      : styles.deactiveCatText
                  }>
                  Face
                </Text>
              </Pressable>
              <Pressable
                style={styles.catBtn}
                onPress={() => this.setState({tag: 'hair'})}>
                <Text
                  style={
                    this.state.tag === 'hair'
                      ? styles.activeCatText
                      : styles.deactiveCatText
                  }>
                  Hair
                </Text>
              </Pressable>
              <Pressable
                style={styles.catBtn}
                onPress={() => this.setState({tag: 'body'})}>
                <Text
                  style={
                    this.state.tag === 'body'
                      ? styles.activeCatText
                      : styles.deactiveCatText
                  }>
                  Body
                </Text>
              </Pressable>
              <Pressable
                style={styles.catBtn}
                onPress={() => this.setState({tag: 'gifts'})}>
                <Text
                  style={
                    this.state.tag === 'gifts'
                      ? styles.activeCatText
                      : styles.deactiveCatText
                  }>
                  Gifts
                </Text>
              </Pressable>
              <Pressable
                style={styles.catBtn}
                onPress={() => this.setState({tag: 'new'})}>
                <Text
                  style={
                    this.state.tag === 'new'
                      ? styles.activeCatText
                      : styles.deactiveCatText
                  }>
                  New
                </Text>
              </Pressable>
            </ScrollView>
          </View>
          <View style={{paddingLeft: 20}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{marginTop: 7}}>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate('ProductDetailScreen')
                }>
                <View style={styles.thumCon}>
                  <Image source={Images.face1} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Face Cleaner
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </Pressable>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.face2} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Cream Cleaner
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.hair1} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Hair Cleaner
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.hair2} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Hair Growth
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.body1} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Body Wash
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.body2} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Body Wash
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={[styles.catCon, styles.viewmoreCon]}>
            <Text style={styles.catText}>Our Bestsellers</Text>
            <Pressable>
              <Text style={styles.viewmore}>View More</Text>
            </Pressable>
          </View>
          <View style={{paddingLeft: 20}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{marginTop: 7}}>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.face1} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Face Cleaner
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.face2} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Cream Cleaner
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.hair1} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Hair Cleaner
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.hair2} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Hair Growth
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.body1} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Body Wash
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.catThumCon}>
                <View style={styles.thumCon}>
                  <Image source={Images.body2} style={styles.thumb} />
                </View>
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Body Wash
                  </Text>

                  <View style={styles.cartCon}>
                    <Text style={styles.productPrice}>$180.00</Text>
                    <View style={styles.cartIcon}>
                      <SvgIcon width={20} height={20} icon={'cart'} />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View>
          <View style={{paddingVertical: 25}}>
            <Text style={styles.ingreText}>Our Ingredients</Text>
          </View>
          <View style={styles.ingreListCon}>
            <View style={styles.ingreCon}>
              <View style={styles.ingreIcon}>
                <SvgIcon width={50} height={50} icon={'fruits'} />
              </View>
              <Text style={styles.ingreType}>Fruits</Text>
            </View>
            <View style={styles.ingreCon}>
              <View style={styles.ingreIcon}>
                <SvgIcon width={50} height={50} icon={'vegitables'} />
              </View>
              <Text style={styles.ingreType}>Vegetables</Text>
            </View>
            <View style={styles.ingreCon}>
              <View style={styles.ingreIcon}>
                <SvgIcon width={50} height={50} icon={'native'} />
              </View>
              <Text style={styles.ingreType}>Natives</Text>
            </View>
            <View style={styles.ingreCon}>
              <View style={styles.ingreIcon}>
                <SvgIcon width={50} height={50} icon={'oils'} />
              </View>
              <Text style={styles.ingreType}>Essential Oils</Text>
            </View>
            <View style={styles.ingreCon}>
              <View style={styles.ingreIcon}>
                <SvgIcon width={50} height={50} icon={'botani'} />
              </View>
              <Text style={styles.ingreType}>Botanicals</Text>
            </View>
            <View style={styles.ingreCon}>
              <View style={styles.ingreIcon}>
                <SvgIcon width={50} height={50} icon={'planOil'} />
              </View>
              <Text style={styles.ingreType}>Plant Oils</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '##fafafa',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  userDetail: {
    flexDirection: 'row',
  },
  user: {
    color: '#000',
    alignSelf: 'center',
    marginHorizontal: 10,
    fontSize: 17,
  },
  userName: {
    color: '#1a1a1a',
    fontFamily: Fonts.type.FredokaOne,
  },
  profilepic: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  notification: {
    alignSelf: 'center',
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
  bannerCon: {
    paddingHorizontal: 20,
  },
  banImg: {width: '100%', height: 150, borderRadius: 15},
  catCon: {
    paddingLeft: 20,
  },
  catText: {
    color: '#000',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 17,
    marginTop: 10,
  },
  catBtn: {
    marginRight: 10,
  },
  activeCatText: {
    backgroundColor: '#1e1b1b',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  deactiveCatText: {
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  catThumCon: {
    marginRight: 8,
    marginVertical: 5,
  },
  thumCon: {
    backgroundColor: '#ebebeb',
    width: 170,
    height: 240,
    borderRadius: 15,
    elevation: 0.5,
    borderColor: '#ebebeb',
    borderWidth: 0.1,
  },
  thumb: {
    width: 50,
    height: 150,
    alignItems: 'center',
    alignSelf: 'center',
  },
  productDetail: {
    paddingHorizontal: 10,
    // backgroundColor: '#fff',
    width: 160,
    height: 90,
    // borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 5,
    padding: 5,

    // elevation: 0.6,
  },

  productName: {
    color: '#000',
    fontFamily: Fonts.type.NunitoBlack,
    textAlign: 'left',
    width: '90%',
    position: 'absolute',
    bottom: 45,
    left: 10,
  },
  productPrice: {
    color: '#000',
    fontFamily: Fonts.type.NunitoBlack,
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  viewmoreCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  viewmore: {
    color: '#183f35',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 16,
    marginTop: 10,
  },
  cartCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  cartIcon: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    bottom: 3,
  },
  productDes: {
    color: '#000',
  },
  ingreCon: {
    width: '33%',
    paddingVertical: 20,
  },
  ingreListCon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 30,
  },
  ingreText: {
    fontSize: 26,
    fontFamily: Fonts.type.FredokaOne,
    textAlign: 'center',
    color: '#183f35',
  },
  ingreType: {
    color: '#000',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 16,
    alignSelf: 'center',
  },
  ingreIcon: {
    alignSelf: 'center',
  },
});
