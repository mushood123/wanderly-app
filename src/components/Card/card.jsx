import React from 'react';
import {Text} from '../Text';
import {
  CardContainer,
  CardContent,
  UserContent,
  UserName,
  Separator,
  PackageContainer,
  PackageHeadings,
  PackageDetails,
  PackageDetailsWithMargin,
  TextCenter,
  ButtonContainer,
  ButtonText,
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
        <PackageContainer>
          <PackageHeadings>{locale.CLAUSE.VISITING_PLACES}</PackageHeadings>
          {places.map((place, index) => {
            return (
              <PackageDetailsWithMargin key={index}>
                {'-> '}
                {place}
              </PackageDetailsWithMargin>
            );
          })}
          <TextCenter>
            <PackageHeadings> {locale.CLAUSE.HOURLY_RATE}: </PackageHeadings>
            <PackageDetails>{hourlyRate}</PackageDetails>
          </TextCenter>
        </PackageContainer>
      </CardContent>
      {showButton && (
        <ButtonContainer
          onPress={() => {
            if (uid === currentUserId) {
              onEditPressed({...offer, packageId});
            } else {
              onBuyPressed(packageId, user?.uid);
            }
          }}>
          <ButtonText>
            {uid === currentUserId ? locale.LABEL.EDIT : locale.LABEL.BUY}
          </ButtonText>
        </ButtonContainer>
      )}
    </CardContainer>
  );
};
