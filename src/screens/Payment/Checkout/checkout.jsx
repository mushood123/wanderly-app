import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {CardForm} from '@stripe/stripe-react-native';
import {Button} from '../../../components';
import {initStripe} from '@stripe/stripe-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../../../counterSlice';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_4w4O2cKeqIBDIzucoUBDOKYO';

export const Checkout = () => {
  const [cardData, setCardData] = useState(null);

  /////////////////////////////////////////////////////////
  const count = useSelector(state => state.counter?.value);
  const dispatch = useDispatch();
  /////////////////////////////////////////////////////////
  useEffect(() => {
    initStripe({
      publishableKey: STRIPE_PUBLISHABLE_KEY,
    });
  }, []);

  return (
    <View style={styles.container}>
      <CardForm
        cardStyle={styles.cardStyle}
        postalCodeEnabled={false}
        style={styles.containerStyle}
        onFormComplete={info => setCardData(info)}
      />
      <Button
        title={'Confirm'}
        style={{marginVertical: 10}}
        disabled={cardData?.complete ? false : true}
        onPress={() => {
          console.log(cardData);
        }}
      />
      <Button
        title={`increment ${count}`}
        style={{marginVertical: 10}}
        onPress={() => dispatch(increment(1), console.log(count))}
      />
      <Button
        title={`decrement ${count}`}
        style={{marginVertical: 10}}
        onPress={() => dispatch(decrement(1), console.log(count))}
      />
    </View>
  );
};
