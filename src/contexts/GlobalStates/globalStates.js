import React, {Children, cloneElement, useEffect, useState} from 'react';
import {AuthContext} from '../auth';
import {LanguageContext} from '../language';
import {getDeviceLanguage} from '../../utils';
import {firebase} from '../../firebase';
import {language} from '../../locales';
import {PackagesContext} from '../packages';

export const GlobalStates = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState(getDeviceLanguage());
  const [allOffers, setAllOffers] = useState([]);
  const [acceptedPackage, setAcceptedPackage] = useState([]);
  const [createdOffer, setCreatedOffers] = useState([]);
  const [user, setUser] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    const getUser = () => {
      firebase.onAuthStateChanged(user => {
        const _u = JSON.stringify(user);
        firebase.getUser(user.uid, {
          successCB: _user => {
            setUser({...JSON.parse(_u), ..._user});
            setLoading(false);
          },
        });
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
            acceptedPackage,
            setAcceptedPackage,
          }}>
          {loading === false &&
            Children.map(children, child => cloneElement(child, {user}))}
        </PackagesContext.Provider>
      </AuthContext.Provider>
    </LanguageContext.Provider>
  );
};
