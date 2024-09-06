import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditModal } from '~src/components/EditModal';
import { render } from '../utils/theme-wrapper/theme-wrapper';  // Adjust the path as needed

// Mocking redux hooks
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

// Mocking formik
jest.mock('formik', () => ({
    useFormik: () => ({
        values: {
            hourlyRate: '50',
            places: 'place1,place2',
        },
        errors: {},
        handleChange: jest.fn(),
    }),
}));

// Mocking firebase
jest.mock('../../../src/firebase/database', () => ({
    firebase: {
        createOffer: jest.fn(),
        setOrder: jest.fn(),
    },
}));

describe('EditModal Component', () => {
    it('renders correctly and matches snapshot', () => {
        // Mock the useSelector and useDispatch hooks
        useSelector
            .mockReturnValueOnce({
                locale: {
                    CLAUSE: {
                        SET_HOURLY_RATE: 'Set Hourly Rate',
                        ENTER_PLACE_TO_VIST: 'Enter Place to Visit',
                    },
                },
            })  // Mock locale
            .mockReturnValueOnce({
                user: {
                    uid_1: {
                        locations: {
                            currentLocation: {
                                coords: {
                                    latitude: 51.509865,
                                    longitude: -0.118092,
                                },
                            },
                        },
                        userData: {
                            name: 'John Doe',
                            age: 30,
                            Experience: '5 years',
                            phone: '+123456789',
                        },
                    },
                },
            })  // Mock user with uid_1
            .mockReturnValueOnce({
                modalVisibility: true,
            });  // Mock modalVisibility

        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        const requestedPackage = {
            packageDetails: {
                hourlyRate: '100',
                places: ['place1', 'place2'],
            },
            packageId: 'package-123',
        };

        const { toJSON } = render(
            <EditModal
                requestedPackage={requestedPackage}
                setRequestedPackage={jest.fn()}
                isCreateOffer={false}
            />
        );

        expect(toJSON()).toMatchSnapshot();
    });
});
