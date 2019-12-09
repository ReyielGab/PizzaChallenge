import client from '../../../api.js';
import Notifications from 'react-notification-system-redux';

const notificationOpts = {
    title: '',
    message: '',
    position: 'tc',
    autoDismiss: 6
};

const NEW_PIZZA_ORDER_CALCULATION_REQUEST = 'NEW_PIZZA_ORDER_CALCULATION_REQUEST';
const NEW_PIZZA_ORDER_CALCULATION_SUCCESS = 'NEW_PIZZA_ORDER_CALCULATION_SUCCESS';
const NEW_PIZZA_ORDER_CALCULATION_ERROR = 'NEW_PIZZA_ORDER_CALCULATION_ERROR';



export default (state = { 
    listOfCalulations: [],
    newPizzaOrderCalcRequestPending: false
}, action) => {
        switch(action.type) {
            case NEW_PIZZA_ORDER_CALCULATION_REQUEST:
                return state = {
                    ...state,
                    newPizzaOrderCalcRequestPending: true
                }

            case NEW_PIZZA_ORDER_CALCULATION_SUCCESS:
                return state = {
                    ...state,
                    newPizzaOrderCalcRequestPending: false
                }
            
            case NEW_PIZZA_ORDER_CALCULATION_ERROR:
                    return state = {
                        ...state,
                        newPizzaOrderCalcRequestPending: false
                    }
            
        }
        return state;
}


const newPizzaOrderCalcRequest = () => ({
    type: NEW_PIZZA_ORDER_CALCULATION_REQUEST
})

const newPizzaOrderCalcSuccess = (listOfCalulation) => ({
    type: NEW_PIZZA_ORDER_CALCULATION_SUCCESS,
    payload: listOfCalulation
})

const newPizzaOrderCalcError = () => ({
    type: NEW_PIZZA_ORDER_CALCULATION_ERROR
}) 


export const newPizzaOrderCalc = (pizzaOrder) => (dispatch) => {
        dispatch(newPizzaOrderCalcRequest());

        client.post('api/Pizza/NewPizzaCalculation', pizzaOrder).then(response => {
            dispatch(newPizzaOrderCalcSuccess(response.data));

            dispatch(Notifications.success({
                ...notificationOpts,
                message: 'Successfully computed pizza order',
                title: 'SUCCESS'
            }));    

        }).catch((error) => {
            console.log(error);
        })

}


