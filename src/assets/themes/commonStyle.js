import { StyleSheet } from 'react-native';

export const commonColor = {
    starColor: '#F0E350',
    //default color by design
    strongBlue: '#449EC3',
    weakBlue: '#69BEE1',
    strongBlack: '#4D4D4D',
    weakBlack: '#747474',
    strongGray: '#D6D6D6',
    weakGray: '#E9E9E9',
    strongGreen: '#0A9D57',
    weakGreen: '#1FC877',
    yellow: '#FFE437',
    orange: '#FFAF37',
    red: '#FF5050',
    weakRed: '#FF5566',
    background: "#f2f2f2"
}

export const commonStyles = StyleSheet.create({
    fullBackgroundImage: {
        position: "absolute",
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%'
    },
    introTitle: {
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 25,
        marginTop: 10,
        color: commonColor.weakRed,
    },
    introSubTitle: {
        fontSize: 15,
        lineHeight: 20,
        marginTop: 5,
        fontWeight: 'bold',
        color: commonColor.strongBlack,
    },
    textAreaDefaultStyle: {
        minWidth: '91%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#f1f1f1',
        paddingBottom: 0,
    }
})