import React, {Children, cloneElement, useEffect, useState} from 'react';
import {AuthContext} from '../auth';
import {LanguageContext} from '../language';
import {getDeviceLanguage} from '../../utils';
import {firebase} from '../../firebase';
import {language} from '../../locales';
import {PackagesContext} from '../packages';

export const GlobalStates = ({children}) => {
  const [locale, setLocale] = useState(getDeviceLanguage());
  const [allOffers, setAllOffers] = useState([]);
  const [createdOffer, setCreatedOffers] = useState([]);
  const [user, setUser] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    const getUser = () => {
      firebase.onAuthStateChanged(user => {
        setUser(user);
      });
    };
    getUser();
  }, []);

  return (
    <LanguageContext.Provider value={{locale: language[locale], setLocale}}>
      <AuthContext.Provider value={{user: user, setUser}}>
        <PackagesContext.Provider
          value={{
            allOffers,
            setAllOffers,
            createdOffer,
            setCreatedOffers,
            modalVisibility,
            setModalVisibility,
          }}>
          {Children.map(children, child => cloneElement(child, {user}))}
        </PackagesContext.Provider>
      </AuthContext.Provider>
    </LanguageContext.Provider>
  );
};
