import React from 'react';
import Radium, { StyleRoot } from 'radium';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PizzaNew from '../components/new';

// *** material-ui components
import Dialog from 'material-ui/Dialog';

import * as duck from '../duck';

const styles = {
    dialogBodyStyle: {
    minHeight: '440px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
},
};

@connect(
    state => (state.newPizzaReducer),
    dispatch => ({ actions: bindActionCreators(duck, dispatch) })
)

@Radium
class NewPizzaContainer extends React.Component {
    onSave(values) {
        const { userId , actions : { newPizzaOrderCalc } } = this.props;
        values['userId'] = userId;
        newPizzaOrderCalc({
            ...values
        })
    
    }    
    
    render() {
        const { openNewPizzaDiag, closeDialog } = this.props;
        return (
            <StyleRoot>
                <Dialog
                    open={openNewPizzaDiag}
                    modal={false}
                    bodyStyle={styles.dialogBodyStyle}
                    onRequestClose={closeDialog}
                >
                    <PizzaNew
                        closeDialog={closeDialog}
                        onSubmit={this.onSave.bind(this)}
                    />
                </Dialog>
            </StyleRoot>
        )
    }

}


export default NewPizzaContainer;