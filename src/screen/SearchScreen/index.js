import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import Images from '../../common/assets/images';
import SvgIcon from '../../common/assets/images/SvgIcon';
import Fonts from '../../common/assets/fonts';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <Pressable
              style={styles.cartBackIcon}
              onPress={() => this.props.navigation.goBack()}>
              <SvgIcon width={30} height={30} icon={'back1'} />
            </Pressable>
            <View style={styles.cartTitleCon}>
              <Text style={styles.headTitle}>Search Product</Text>
            </View>
            <View style={styles.notification}>
              <Image source={Images.profilePic} style={styles.profilepic} />
            </View>
          </View>
          <View style={styles.SearchCon}>
            <View style={styles.searchBoxCon}>
              <View style={styles.searchTextBoxCon}>
                <View style={styles.searchIcon}>
                  <SvgIcon icon={'search'} width={17} height={17} />
                </View>
                <TextInput
                  style={styles.searchText}
                  placeholder={'Search Product'}
                  placeholderTextColor={'#aaa'}
                />
                <Pressable style={styles.filerIocn}>
                  <SvgIcon width={20} height={20} icon={'filer1'} />
                </Pressable>
              </View>
            </View>
          </View>

          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 7}}>
              <View style={styles.searchScrlCon}>
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
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchScrlCon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },

  user: {
    color: '#000',
    alignSelf: 'center',
    marginHorizontal: 10,
    fontSize: 17,
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
    paddingHorizontal: 15,
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

  catThumCon: {
    marginVertical: 5,
    width: '48%',
  },

  thumCon: {
    backgroundColor: '#ebebeb',
    width: '100%',
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
    width: 160,
    height: 90,
    position: 'absolute',
    bottom: 5,
    padding: 5,
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

  cartBackIcon: {
    alignSelf: 'center',
  },

  headTitle: {
    fontFamily: Fonts.type.NunitoSemiBold,
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },

  cartTitleCon: {
    alignSelf: 'center',
  },
});
