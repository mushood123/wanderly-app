import React, {useContext, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';
import {LanguageContext} from '../../contexts';

export const Card = ({
  hourlyRate = 0,
  places = [],
  name = 'NA',
  place = 'Lahore',
  currentUserId = 0,
  uid,
  showButton,
}) => {
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
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={styles.statValue}>
            {uid === currentUserId ? 'Edit' : 'Buy'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
