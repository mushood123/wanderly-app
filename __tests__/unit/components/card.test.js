import React from 'react';
import { render } from '../utils/theme-wrapper/theme-wrapper';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Card } from '~src/components/Card';


const mockStore = configureStore([]);

describe('Card component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            auth: {
                user: {
                    uid: 'user123',
                },
            },
            language: {
                locale: {
                    CLAUSE: {
                        VISITING_PLACES: 'Visiting Places',
                        HOURLY_RATE: 'Hourly Rate',
                    },
                    LABEL: {
                        EDIT: 'Edit',
                        BUY: 'Buy',
                    },
                },
            },
        });
    });

    it('renders correctly and matches snapshot with default props', () => {
        const tree = render(
            <Provider store={store}>
                <Card />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom props and matches snapshot', () => {
        const customProps = {
            hourlyRate: 50,
            places: ['New York', 'Los Angeles'],
            name: 'John Doe',
            place: 'San Francisco',
            currentUserId: 'user123',
            uid: 'user456',
            showButton: true,
            onEditPressed: jest.fn(),
            onBuyPressed: jest.fn(),
            packageId: 'package123',
            offer: { title: 'Custom Offer' },
        };

        const tree = render(
            <Provider store={store}>
                <Card {...customProps} />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with edit button when user owns the package', () => {
        const customProps = {
            currentUserId: 'user123', // Same as logged-in user
            uid: 'user123', // Same as currentUserId to simulate package owner
            showButton: true,
            packageId: 'package123',
            offer: { title: 'Custom Offer' },
        };

        const tree = render(
            <Provider store={store}>
                <Card {...customProps} />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with buy button for another user', () => {
        const customProps = {
            currentUserId: 'user123',
            uid: 'user789', // Different user
            showButton: true,
            packageId: 'package123',
            offer: { title: 'Custom Offer' },
        };

        const tree = render(
            <Provider store={store}>
                <Card {...customProps} />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
