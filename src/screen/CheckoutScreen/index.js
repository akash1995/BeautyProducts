import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import SvgIcon from '../../common/assets/images/SvgIcon';
import Fonts from '../../common/assets/fonts';
import MapView from 'react-native-maps';
import Images from '../../common/assets/images';

export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentType: 'credit',
    };
  }
  paymentMethod = type => {
    console.log(type);
    this.setState({paymentType: type});
  };
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
            <Text style={styles.headTitle}>Checkout</Text>
          </View>
          <View />
        </View>
        <View style={styles.ShippCon}>
          <View>
            <Text style={styles.shipText}>Shipping Information</Text>
            <View style={styles.shipInfo}>
              <Text style={styles.shipAdText}>Eleanor Pana</Text>
              <Text style={styles.shipAdText}>Street:18 sun city new work</Text>
              <Text style={styles.shipAdText}>1-8000-359-98-98</Text>
            </View>
          </View>
          <Pressable>
            <Text style={styles.editText}>Edit</Text>
          </Pressable>
        </View>
        <View style={styles.mapCon}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View style={styles.paymentCon}>
          <View>
            <Text style={styles.shipText}>Payment Method</Text>
          </View>
        </View>
        <View style={styles.paymentMethodCon}>
          <TouchableOpacity
            style={
              this.state.paymentType === 'credit'
                ? styles.cardConActive
                : styles.cardCon
            }
            onPress={() => this.paymentMethod('credit')}>
            <Image source={Images.credit} style={styles.itemImg} />
            <Text style={styles.paymentText}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.paymentType === 'upi'
                ? styles.cardConActive
                : styles.cardCon
            }
            onPress={() => this.paymentMethod('upi')}>
            <Image source={Images.upi} style={styles.itemImg} />
            <Text style={styles.paymentText}>UPI Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.paymentType === 'apple'
                ? styles.cardConActive
                : styles.cardCon
            }
            onPress={() => this.paymentMethod('apple')}>
            <Image source={Images.apple} style={styles.itemImg} />
            <Text style={styles.paymentText}>Apple Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.paymentType === 'paytm'
                ? styles.cardConActive
                : styles.cardCon
            }
            onPress={() => this.paymentMethod('paytm')}>
            <Image source={Images.paytm} style={styles.itemImg} />
            <Text style={styles.paymentText}>Paytem Payment</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.proceedBtn}>
          <View style={styles.paymentCon}>
            <View>
              <Text style={styles.total}>Total</Text>
            </View>
            <View style={styles.amountCon}>
              <View>
                <SvgIcon width={20} height={20} icon={'dollar'} />
              </View>
              <Text style={styles.subtotalAmt}>44.99</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cartBtn}
            onPress={() => this.props.navigation.navigate('CheckoutScreen')}>
            <Text style={styles.cartText}>Pay</Text>
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
  ShippCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  shipText: {
    color: '#000',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 20,
  },
  total: {
    color: '#000',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 25,
  },
  shipAdText: {
    fontFamily: Fonts.type.NunitoLight,
    fontWeight: '600',
    fontSize: 17,
    color: '#000',
  },
  editText: {
    color: '#000',
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 16,
  },
  mapCon: {
    borderRadius: 100,
  },
  map: {
    height: 150,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 50,
  },
  paymentCon: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amountCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 20,
    color: '#000',
  },
  subtotalText: {
    color: '#000',
    fontFamily: Fonts.type.NunitoSemiBold,
    fontSize: 25,
  },
  subtotalAmt: {
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 25,
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
  paymentMethodCon: {
    paddingHorizontal: 20,
  },
  itemImg: {
    height: 30,
    width: 50,
    borderRadius: 10,
  },
  cardCon: {
    flexDirection: 'row',
    padding: 12,
  },
  cardConActive: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 12,
  },
  paymentText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#000',
    fontSize: 17,
    fontFamily: Fonts.type.NunitoBold,
    paddingHorizontal: 10,
  },
});
