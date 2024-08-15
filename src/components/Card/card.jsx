import React, {useContext, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';
import {LanguageContext} from '../../contexts';
import {AuthContext} from '../../contexts';

export const Card = ({
  hourlyRate = 0,
  places = [],
  name = 'NA',
  place = 'Lahore',
  currentUserId = 0,
  uid,
  showButton,
  onEditPressed = () => {},
  onBuyPressed = () => {},
  packageId,
  offer,
}) => {
  const {user} = useContext(AuthContext);
  const {locale} = useContext(LanguageContext);
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text>{place}</Text>
        </View>
        <View style={styles.saperator} />

        <View style={styles.stats}>
          <Text style={styles.statValue}>{locale.CLAUSE.VISITING_PLACES}</Text>

          {places.map(place => {
            return (
              <Text style={styles.title}>
                {'-> '}
                {place}
              </Text>
            );
          })}

          <Text style={styles.stat}>
            <Text style={styles.statValue}> {locale.CLAUSE.HOURLY_RATE}: </Text>
            <Text style={styles.statLabel}>{hourlyRate}</Text>
          </Text>
        </View>
      </View>
      {showButton && (
        <TouchableOpacity
          onPress={() => {
            if (uid === currentUserId) {
              onEditPressed({...offer, packageId});
            } else {
              onBuyPressed(packageId, user.uid);
            }
          }}
          style={styles.btn}>
          <Text style={styles.statValue}>
            {uid === currentUserId ? locale.LABEL.EDIT : locale.LABEL.BUY}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
