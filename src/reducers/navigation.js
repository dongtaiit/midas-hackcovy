import { RootStack } from '../navigation/RootStackNavigator'

export default (state, action) => {
    const nextState = RootStack.router.getStateForAction(action, state);
    return nextState || state
};