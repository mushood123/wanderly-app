import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';
import {
  CardContainer,
  CardContent,
  UserContent,
  UserName,
  Separator,
} from './styles';
import {useSelector} from 'react-redux';

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
  const {user} = useSelector(state => state.auth);
  const {locale} = useSelector(state => state.language);
  return (
    <CardContainer>
      <CardContent>
        <UserContent>
          <UserName>{name}</UserName>
          <Text>{place}</Text>
        </UserContent>
        <Separator />

        <View style={styles.stats}>
          <Text style={styles.statValue}>{locale.CLAUSE.VISITING_PLACES}</Text>

          {places.map((place, index) => {
            return (
              <Text key={index} style={styles.title}>
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
      </CardContent>
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
    </CardContainer>
  );
};
