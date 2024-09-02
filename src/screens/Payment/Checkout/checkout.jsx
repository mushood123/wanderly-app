import React, {useCallback, useEffect, useState} from 'react';
import {styles, Container} from './styles';
import {initStripe, useStripe, CardForm} from '@stripe/stripe-react-native';
import {Button} from '~src/components';
import {STRIPE_PUBLISHABLE_KEY} from '~src/utils';

export const Checkout = () => {
  const [cardData, setCardData] = useState(null);
  const stripe = useStripe();

  const createCardToken = useCallback(async () => {
    try {
      const cardToken = await stripe.createToken({
        type: 'Card',
      });
      console.log(JSON.stringify(cardToken));
    } catch (error) {
      console.error('Error creating card token:', error);
    }
  }, [stripe]);

  useEffect(() => {
    initStripe({
      publishableKey: STRIPE_PUBLISHABLE_KEY,
    });
  }, []);

  return (
    <Container>
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
          createCardToken();
        }}
      />
    </Container>
  );
};
