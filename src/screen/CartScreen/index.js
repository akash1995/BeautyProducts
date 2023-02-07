import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../common/assets/images';
import SvgIcon from '../../common/assets/images/SvgIcon';
import Fonts from '../../common/assets/fonts';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const images = new Array(3).fill(Images.bodyDetail);

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.cartCon}>
        <View style={styles.cartHeadCon}>
          <Pressable
            style={styles.cartBackIcon}
            onPress={() => this.props.navigation.goBack()}>
            <SvgIcon width={30} height={30} icon={'back1'} />
          </Pressable>
          <View style={styles.cartTitleCon}>
            <Text style={styles.headTitle}>Shopping Bag</Text>
          </View>
          <TouchableHighlight style={styles.bagIcon}>
            <SvgIcon width={20} height={20} icon={'bag'} />
          </TouchableHighlight>
        </View>
        <View style={{height: '50%'}}>
          <ScrollView>
            <View style={styles.cartItemListCon}>
              <View style={styles.cartItemImg}>
                <Image source={Images.bodyDetail} style={styles.itemImg} />
              </View>
              <View style={styles.cartItemDesCon}>
                <Text style={styles.productName} numberOfLines={1}>
                  Facial Cleaner
                </Text>
                <Text style={styles.productQuan} numberOfLines={1}>
                  Size:4.23 fl oz/125ml
                </Text>
                <View style={styles.itemCol}>
                  <View style={styles.amountCon}>
                    <View>
                      <SvgIcon width={15} height={15} icon={'dollar'} />
                    </View>
                    <Text style={styles.amount}>11.99</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemRightCon}>
                <View style={styles.dltIcon}>
                  <SvgIcon width={12} height={12} icon={'cancel'} />
                </View>
                <View style={styles.cartAction}>
                  <TouchableOpacity>
                    <SvgIcon width={24} height={24} icon={'remCircle'} />
                  </TouchableOpacity>

                  <Text style={styles.itemCount}>1</Text>
                  <TouchableOpacity style={styles.add}>
                    <SvgIcon width={15} height={15} icon={'addCircle'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.cartItemListCon}>
              <View style={styles.cartItemImg}>
                <Image source={Images.bodyDetail} style={styles.itemImg} />
              </View>
              <View style={styles.cartItemDesCon}>
                <Text style={styles.productName} numberOfLines={1}>
                  Facial Cleaner
                </Text>
                <Text style={styles.productQuan} numberOfLines={1}>
                  Size:4.23 fl oz/125ml
                </Text>
                <View style={styles.itemCol}>
                  <View style={styles.amountCon}>
                    <View>
                      <SvgIcon width={15} height={15} icon={'dollar'} />
                    </View>
                    <Text style={styles.amount}>11.99</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemRightCon}>
                <View style={styles.dltIcon}>
                  <SvgIcon width={12} height={12} icon={'cancel'} />
                </View>
                <View style={styles.cartAction}>
                  <TouchableOpacity>
                    <SvgIcon width={24} height={24} icon={'remCircle'} />
                  </TouchableOpacity>

                  <Text style={styles.itemCount}>1</Text>
                  <TouchableOpacity style={styles.add}>
                    <SvgIcon width={15} height={15} icon={'addCircle'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.cartItemListCon}>
              <View style={styles.cartItemImg}>
                <Image source={Images.bodyDetail} style={styles.itemImg} />
              </View>
              <View style={styles.cartItemDesCon}>
                <Text style={styles.productName} numberOfLines={1}>
                  Facial Cleaner
                </Text>
                <Text style={styles.productQuan} numberOfLines={1}>
                  Size:4.23 fl oz/125ml
                </Text>
                <View style={styles.itemCol}>
                  <View style={styles.amountCon}>
                    <View>
                      <SvgIcon width={15} height={15} icon={'dollar'} />
                    </View>
                    <Text style={styles.amount}>11.99</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemRightCon}>
                <View style={styles.dltIcon}>
                  <SvgIcon width={12} height={12} icon={'cancel'} />
                </View>
                <View style={styles.cartAction}>
                  <TouchableOpacity>
                    <SvgIcon width={24} height={24} icon={'remCircle'} />
                  </TouchableOpacity>

                  <Text style={styles.itemCount}>1</Text>
                  <TouchableOpacity style={styles.add}>
                    <SvgIcon width={15} height={15} icon={'addCircle'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.SearchCon}>
          <View style={styles.searchBoxCon}>
            <View style={styles.searchTextBoxCon}>
              <TextInput
                style={styles.searchText}
                placeholder={'Promo Code'}
                placeholderTextColor={'#aaa'}
              />
              <Pressable style={styles.filerIocn}>
                <Text style={styles.applyBtn}>Apply</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.subtotalCon}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <View style={styles.amountCon}>
            <View>
              <SvgIcon width={20} height={20} icon={'dollar'} />
            </View>
            <Text style={styles.subtotalAmt}>11.99</Text>
          </View>
        </View>
        <View style={styles.subtotalCon}>
          <Text style={styles.subtotalText}>Shipping</Text>
          <View style={styles.amountCon}>
            <View>
              <SvgIcon width={20} height={20} icon={'dollar'} />
            </View>
            <Text style={styles.subtotalAmt}>4.99</Text>
          </View>
        </View>
        <View style={styles.subtotalCon}>
          <Text style={styles.subtotalText}>Bag Total</Text>
          <View style={styles.amountCon}>
            <View>
              <SvgIcon width={20} height={20} icon={'dollar'} />
            </View>
            <Text style={styles.subtotalAmt}>44.99</Text>
          </View>
        </View>
        <View style={styles.proceedBtn}>
          <TouchableOpacity
            style={styles.cartBtn}
            onPress={() => this.props.navigation.navigate('CheckoutScreen')}>
            <Text style={styles.cartText}>Proceed To Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cartCon: {
    backgroundColor: '#fafafa',
    height: '100%',
  },
  cartHeadCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 10,
  },
  itemCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartTitleCon: {
    alignSelf: 'center',
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
  bagIcon: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  cartItemListCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  cartItemImg: {
    elevation: 6,
    shadowColor: '#000',
    borderRadius: 15,
    borderColor: '#ebebeb',
  },

  itemImg: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  cartItemDesCon: {
    alignSelf: 'center',
    paddingHorizontal: 7,
    width: '50%',
  },
  productName: {
    fontFamily: Fonts.type.FredokaOne,
    color: '#000',
    fontSize: 14,
  },
  productQuan: {
    color: '#000',
    fontFamily: Fonts.type.NunitoLight,
    paddingVertical: 5,
  },
  amountCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 14,
    color: '#000',
  },

  itemRightCon: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cartAction: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  itemCount: {
    fontFamily: Fonts.type.NunitoBlack,
    color: '#000',
    fontSize: 16,
    paddingHorizontal: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  dltIcon: {
    alignItems: 'flex-end',
  },
  add: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    borderColor: '#ebebeb',
  },

  SearchCon: {
    paddingHorizontal: 10,
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
    width: '20%',
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
    backgroundColor: '#000',
  },
  applyBtn: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 10,
  },
  subtotalCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.2,
  },
  subtotalText: {
    color: '#000',
    fontFamily: Fonts.type.NunitoSemiBold,
    fontSize: 18,
  },
  subtotalAmt: {
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 20,
    color: '#000',
  },
  proceedBtn: {
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 10,
    width: '100%',
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
