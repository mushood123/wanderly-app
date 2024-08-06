import React, {Children, cloneElement, useEffect, useState} from 'react';
import {AuthContext} from '../auth';
import {LanguageContext} from '../language';
import {getDeviceLanguage} from '../../utils';
import {firebase} from '../../firebase';
import {language} from '../../locales';

export const GlobalStates = ({children}) => {
  const [locale, setLocale] = useState(getDeviceLanguage());
  const [user, setUser] = useState(null);

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
        {Children.map(children, child => cloneElement(child, {user}))}
      </AuthContext.Provider>
    </LanguageContext.Provider>
  );
};
