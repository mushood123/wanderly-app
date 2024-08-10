import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';
import {LanguageContext} from '../../contexts';

export const Card = ({hourlyRate = 0, places = [], name = 'Jane Doe'}) => {
  const {locale} = useContext(LanguageContext);

  const designers = [
    {
      name: 'David Borg',
      title: 'Flying wings',
      popularity: 2342,
      likes: 4736,
      followers: 136,
      ranking: 1,
    },
  ];
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.content}>
          <Text style={styles.name}>{designers[0].name}</Text>
          <Text>City of user</Text>
        </View>
        <View style={styles.saperator}></View>

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
    </View>
  );
};
