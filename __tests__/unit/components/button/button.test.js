import React from 'react';
import { Button } from '~src/components/Button';
import { render } from '../../utils/theme-wrapper/theme-wrapper';

describe('Button component', () => {
    it('matches the snapshot', () => {
        const { toJSON } = render(
            <Button
                onPress={() => { }}
                title="Test Button"
                style={{ backgroundColor: 'blue' }}
                textStyle={{ color: 'white' }}
            />
        );
        expect(toJSON()).toMatchSnapshot();
    });

    it('matches the snapshot when disabled', () => {
        const { toJSON } = render(
            <Button
                onPress={() => { }}
                title="Disabled Button"
                disabled
                style={{ backgroundColor: 'gray' }}
                textStyle={{ color: 'lightgray' }}
            />
        );
        expect(toJSON()).toMatchSnapshot();
    });
});
