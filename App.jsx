import React, { useEffect, useState } from 'react';
import { Appearance, TextInput } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { restore, getUser } from '~src/redux/App';
import { store } from '~src/redux/store';
import { font } from '~src/theme/fonts';
import { Navigator } from './src/navigator';
import { DarkTheme, LightTheme } from './src/theme/colors';

const App = () => {
    const dispatch = useDispatch();
    const { appLoading } = useSelector(state => state.app);
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        getUser();
        dispatch(restore());
    }, [dispatch]);

    return <Provider store={store}>{!appLoading && <Navigator user={user} />}</Provider>;
};

const WrappedApp = () => {
    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener(theme => {
        setColorScheme(theme.colorScheme);
    });
    return (
        <ThemeProvider theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    );
};

export default WrappedApp;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.fontFamily = font.primary;
