import { StyleSheet } from 'react-native';

const detailStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    skyBlue: {
        backgroundColor: 'cornflowerblue',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10
    },
    image: {
        width: 170,
        height: 170,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100
    },
    name: {
        fontSize: 40,
        color: 'grey'
    },
    metdataWrapper: {
        textAlign: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    metadata: {
        fontSize: 16,
        width: 100,
        textAlign: 'center',
        marginRight: 5
    },
    detailData: {
        fontSize: 15
    }
});

export default detailStyle;