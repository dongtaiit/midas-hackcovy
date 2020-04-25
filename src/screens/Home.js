import { createAppContainer,createBottomTabNavigator } from 'react-navigation';
import TabNews from "../container/Tabs/TabsNews";
import TabsSocial from "../container/Tabs/TabsSocial";
import TabsProfile from "../container/Tabs/TabsProfile";
import TabsService from "../container/Tabs/TabsService";
import TabsChat from "../container/Tabs/TabsChat";
import { theme } from "../config/theme";
import CustomTabBar from "../container/common/CustomTabBar";

const {
    primaryColor,
    divider,
    borderStyle,
    borderWidth,
    lightBackground,
    inactiveColor,
    smallSizeText
} = theme;

const Home = createBottomTabNavigator({
    News: {
        screen: TabNews
    },
    Discus: {
        screen: TabsSocial,
    },
    Profile: {
        screen: TabsProfile
    },
    Service: {
        screen: TabsService
    },
    Chat: {
        screen: TabsChat
    }
    }, 
    {
    tabBarComponent: CustomTabBar,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    initialRouteName: "Profile",
    lazy: true,
    tabBarOptions: {
        activeTintColor: primaryColor,
        inactiveTintColor: inactiveColor,
        upperCaseLabel: false,
        indicatorStyle: {
            backgroundColor: primaryColor
        },
        style: {
            backgroundColor: lightBackground,
            borderTopColor: divider,
            borderTopWidth: borderWidth,
            borderStyle: borderStyle
        },
        labelStyle: {
            fontSize: smallSizeText
        },
        showIcon: true,
        showLabel: true
    }
}
);

export default Home