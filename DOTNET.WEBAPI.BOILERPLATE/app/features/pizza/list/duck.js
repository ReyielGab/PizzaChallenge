import client from '../../../api.js';
import Notifications from 'react-notification-system-redux';

const notificationOpts = {
    title: '',
    message: '',
    position: 'tc',
    autoDismiss: 6
};

const GET_LIST_OF_CALCULATIONS_REQUEST = 'GET_LIST_OF_CALCULATIONS_REQUEST';
const GET_LIST_OF_CALCULATIONS_SUCCESS = 'GET_LIST_OF_CALCULATIONS_SUCCESS';
const GET_LIST_OF_CALCULATIONS_ERROR = 'GET_LIST_OF_CALCULATIONS_ERROR';

//** foreign action type */
const NEW_PIZZA_ORDER_CALCULATION_SUCCESS = 'NEW_PIZZA_ORDER_CALCULATION_SUCCESS';

export default (state = {
    listOfCalulations: [],
    getListOfCalculationsRequestPending: false
    }, action) => {
        switch(action.type) {
            case GET_LIST_OF_CALCULATIONS_REQUEST:
                return state ={
                    ...state,
                    getListOfCalculationsRequestPending: true
                }

            case GET_LIST_OF_CALCULATIONS_SUCCESS:
                return state = {
                    ...state,
                    getListOfCalculationsRequestPending: false,
                    listOfCalulations: action.payload
                }

            case GET_LIST_OF_CALCULATIONS_ERROR:
                return state = {
                    ...state,
                    getListOfCalculationsRequestPending: false,
                }

            case NEW_PIZZA_ORDER_CALCULATION_SUCCESS:
                return state = {
                    ...state,
                    listOfCalulations: [...state.listOfCalulations, action.payload]
                }
        }


        return state;
    }

const getListOfCalculationRequest = () => ({
    type: GET_LIST_OF_CALCULATIONS_REQUEST
})

const getListOfCalculationSuccess = (listOfCalc) => ({
    type: GET_LIST_OF_CALCULATIONS_SUCCESS,
    payload: listOfCalc
})

const getListOfCalculationError = () => ({
    type: GET_LIST_OF_CALCULATIONS_ERROR
})


export const getListOfCalculation = (userId) => (dispatch) => {
    dispatch(getListOfCalculationRequest());
    client.get(`api/Pizza/GetListOfCalculations?UserId=${userId}`).then(response => {
        dispatch(getListOfCalculationSuccess(response.data));

    }).catch((error) => {
        console.log(error);
    })
}