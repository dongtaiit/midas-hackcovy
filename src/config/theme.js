import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const theme = {
    mainColor: '#1473BC',
    subMainColor: '#345472',
    mainTextColor: '#fff',
    subTextColor: '#666666',
    primaryColor: '#00A0E3',
    primaryColorFade: 'rgba(0, 160, 227, 0.8)',
    primaryColorFade2: 'rgba(0, 160, 227, 0.4)',
    mask: 'rgba(0, 160, 227, 0.5)',
    secondaryColor: '#06512D',
    underlayColor: 'rgba(49, 125, 235, 1)',
    textColor: '#363C4D',
    textColorArticle: '#0099FF',
    tabBackgroundColor: '#363C4D',
    backgroundColor: '#EBEBF3',
    likedColor: '#F2547D',
    pinkColor: '#F2547D',
    cupColor: '#FEC107',
    divider: 'rgba(0,0,0,0.05)',
    borderStyle: 'solid',
    borderWidth: 1,
    lightBackground: '#fff',
    inactiveColor: '#8293A9',
    smallSizeText: 12,
    defaultPadding: 16,
    defaultMargin: 16,
    defaultRadius: 4,
    radius: 2,
    shadow: {
        shadowColor: 'rgba(0,0,0,0.05)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    leftIcon: 'arrow-left',
    lightOverlay: 'rgba(255, 255, 224, 0.8)'
};

export const styled = {
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 48/2
    },
    thumbnail: {
        height: width - 150,
        alignSelf: 'stretch'
    }
};