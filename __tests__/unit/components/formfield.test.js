import React from 'react';
import { render } from '../utils/theme-wrapper/theme-wrapper';
import { FormField } from '~src/components/FormField';


describe('FormField component', () => {
    it('renders correctly and matches snapshot', () => {
        const tree = render(
            <FormField
                title="Email"
                secureTextEntry={false}
                keyboardType="default"
                isValidate={true}
                handleOnChangeText={() => { }}
                value=""
                disable={false}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with secureTextEntry', () => {
        const tree = render(
            <FormField
                title="Password"
                secureTextEntry={true}
                keyboardType="default"
                isValidate={false}
                handleOnChangeText={() => { }}
                value="password"
                disable={false}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when disabled', () => {
        const tree = render(
            <FormField
                title="Email"
                secureTextEntry={false}
                keyboardType="default"
                isValidate={true}
                handleOnChangeText={() => { }}
                value="test@test.com"
                disable={true}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
