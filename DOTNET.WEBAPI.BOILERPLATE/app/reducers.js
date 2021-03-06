import { reducer as notifications } from 'react-notification-system-redux';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';


import mainPageReducer from './features/main/duck';

import usersListReducer from './features/users/list/duck';
import editUserReducer from './features/users/edit/duck';
import userNewReducer from './features/users/new/duck';

import pizzaListReducer from './features/pizza/list/duck';
import newPizzaReducer from './features/pizza/new/duck';



const appReducer = combineReducers({
    form,
    notifications,
    routing : routerReducer,
    mainPageReducer,
    usersListReducer,
    userNewReducer,
    editUserReducer,
    pizzaListReducer,
    newPizzaReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'APP_USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;