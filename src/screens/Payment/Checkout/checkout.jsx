import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {CardForm} from '@stripe/stripe-react-native';
import {Button} from '../../../components';

export const Checkout = () => {
  const [cardData, setCardData] = useState(null);

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
    </View>
  );
};
