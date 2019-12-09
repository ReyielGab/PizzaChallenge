import React from 'react';
import Radium, { StyleRoot } from 'radium';
import { reduxForm, Field } from 'redux-form';

// ** material-ui
import RaisedButton from 'material-ui/RaisedButton';

import { TextField } from 'redux-form-material-ui';

import { required, number } from '../../../../util/validation';

import colorPalette from '../../../../util/styles/color-pallete';

const styles = {
    container: {
        width: '100%',
        height: '100%'
    },

    title: {
        color: colorPalette.primaryColor,
        fontWeight: 400,
        fontSize: '18px',
        margin: 0
    },

    subtitle: {
        color: colorPalette.primaryTextColor,
        fontSize: '14px'
    },

    contentWrapper: {
        display: 'flex',
        flexDirection: 'column'
    },

    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: '120px',

        left: {
            marginLeft: '12px'
        }
    }
};

@reduxForm({
    form: 'newUserForm'
})

@Radium
class PizzaNew extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { closeDialog, handleSubmit } = this.props;
        return (
            <StyleRoot style={styles.container}>
                <form onSubmit={handleSubmit}>
                    <h1 style={styles.title} >Pizza - New</h1>
                    <p style={styles.subtitle}>Compute new number of pizza</p>

                    <div style={styles.contentWrapper}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Field
                                name="numberOfPeople"
                                component={TextField}
                                hintText="Number of People"
                                floatingLabelText="Number of People"                                
                                validate={[required, number]}
                            />

                            <Field
                                name="flavours"
                                component={TextField}
                                hintText="Flavours"
                                floatingLabelText="Flavours"
                                validate={[required, number]}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Field
                                name="slices"
                                component={TextField}
                                hintText="Slices in pizza"
                                floatingLabelText="Slices in pizza"
                                validate={[required, number]}
                            />

                            <Field
                                name="maxslices"
                                component={TextField}
                                hintText="Maximum slices per person"
                                floatingLabelText="Maximum slices per person"
                                validate={[required, number]}
                            />
                        </div>                       

                    </div>                  

                        <div style={styles.buttonWrapper}>
                            <RaisedButton
                                label="CLOSE"
                                style={styles.buttonWrapper.left}
                                onTouchTap={closeDialog.bind(this)}
                            />

                            <RaisedButton
                                type="submit"
                                label="SAVE AND CREATE NEW"
                                style={styles.buttonWrapper.left}
                                secondary={true}
                            />
                        </div> 

            

                </form>
            </StyleRoot>
        )
    }
}

export default PizzaNew;