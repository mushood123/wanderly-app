import React from 'react';
import { render } from '../utils/theme-wrapper/theme-wrapper';
import { Text } from '~src/components/Text';


describe('Text component', () => {
    it('renders correctly with default styles and matches snapshot', () => {
        const tree = render(<Text>Hello World</Text>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom styles and matches snapshot', () => {
        const customStyle = { color: 'red', fontSize: 20 };
        const tree = render(<Text style={customStyle}>Styled Text</Text>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with nested elements and matches snapshot', () => {
        const tree = render(
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Nested Bold Text</Text>
            </Text>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
