import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'styled-components';
import { styles } from './styles';
import { IconCreatePackage } from '../../assets';
import { EditModal } from '../../components';
import { setModalVisibility } from '../../redux/Packages';
import { ROUTES } from '../../routes';
import { PackagesHome, OffersByMe, AcceptedByMe } from '../../screens';
import { font } from '../../theme/fonts';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    const { modalVisibility } = useSelector(state => state.package);
    const dispatch = useDispatch();
    const { cardColor } = useTheme();

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12, fontFamily: font.primary },
                    tabBarItemStyle: { paddingTop: 60 },
                    tabBarStyle: { backgroundColor: cardColor },
                }}
            >
                <Tab.Screen
                    name={ROUTES.AllOffers}
                    component={PackagesHome}
                />
                <Tab.Screen
                    name={ROUTES.AcceptedOffers}
                    component={AcceptedByMe}
                />
                <Tab.Screen
                    name={ROUTES.CreatedOffers}
                    component={OffersByMe}
                />
            </Tab.Navigator>
            <TouchableOpacity
                onPress={() => {
                    dispatch(setModalVisibility(true));
                }}
                style={styles.createPackageContainer}
            >
                <IconCreatePackage
                    height={40}
                    width={40}
                />
            </TouchableOpacity>
            {modalVisibility && <EditModal isCreateOffer />}
        </>
    );
};
