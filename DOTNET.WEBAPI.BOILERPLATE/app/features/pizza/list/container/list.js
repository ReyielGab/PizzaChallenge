import React from 'react';
import Radium, { StyleRoot } from 'radium';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PizzaList from '../components/list';
import Subheader from '../../../../shared-components/subheader';

import * as duck from '../duck';

@connect(
    state => (state.pizzaListReducer),
    dispatch => ({ actions: bindActionCreators(duck, dispatch) })
)

@Radium
class PizzaContainer extends React.Component{

    componentDidMount() {
        const { listOfCalulations, params, actions: { getListOfCalculation } } = this.props

        getListOfCalculation(params.id);
    }

    render() {
        const { listOfCalulations, params, actions: { getListOfCalculation } } = this.props
        console.log(listOfCalulations, 'hey');
        return(
            <StyleRoot>
                <Subheader />
                <PizzaList  
                    listOfCalulations={listOfCalulations}
                    userId={params.id}
                />
            </StyleRoot>
        )
    }

}

export default PizzaContainer;