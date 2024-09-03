import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    logout: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
        height: 60,
        width: 60,
        borderRadius: 30,
    },
});
