import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {CardForm} from '@stripe/stripe-react-native';
import {Button} from '../../../components';
import {initStripe} from '@stripe/stripe-react-native';
import {useSelector} from 'react-redux';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_4w4O2cKeqIBDIzucoUBDOKYO';

export const Checkout = () => {
  const [cardData, setCardData] = useState(null);

  /////////////////////////////////////////////////////////
  const {user} = useSelector(state => state.auth);
  const {locale} = useSelector(state => state.language);
  const {allOffers} = useSelector(state => state.package);
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
        title={`user redux`}
        style={{marginVertical: 10}}
        onPress={() => console.log(JSON.stringify(user))}
      />
      <Button
        title={`language redux`}
        style={{marginVertical: 10}}
        onPress={() => console.log(locale.LABEL.CONFIRM)}
      />
      <Button
        title={`package redux`}
        style={{marginVertical: 10}}
        onPress={() => console.log(allOffers)}
      />
    </View>
  );
};
