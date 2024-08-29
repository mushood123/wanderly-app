import {firebase} from '../../firebase';
import {store} from '../store';
import {setAcceptedPackage, setAllOffers, setCreatedOffers} from './actions';

export const getAcceptedPackage = user => {
  const onValueChange = firebase.getCurrentUserAcceptedOffers(user?.uid, {
    successCB: data => {
      store.dispatch(setAcceptedPackage(data));
    },
  });
  return () => {
    firebase.getOffersCloseConnection(onValueChange);
  };
};

export const getOfferByMe = user => {
  const onValueChange = firebase.getCurrentUserCreatedOffers(user?.uid, {
    successCB: data => {
      store.dispatch(setCreatedOffers(data));
    },
  });
  return () => {
    firebase.getOffersCloseConnection(onValueChange);
  };
};

export const getAllOffer = () => {
  const onValueChange = firebase.getOffers({
    successCB: data => {
      store.dispatch(setAllOffers(data));
    },
  });
  return () => {
    firebase.getOffersCloseConnection(onValueChange);
  };
};
