import { StyleSheet } from 'react-native';

const contactStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    wrapper: {
        flex: 1,
        marginBottom: 10
    },
    button: {
        color: '#ff5c5c'
    },
    contact: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4.6,
        borderColor: 'lightslategrey',
        marginBottom: 10
    },
    contactName: {
        fontWeight: '600'
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'lightskyblue',
        marginRight: 10
    }
})


export default contactStyle;