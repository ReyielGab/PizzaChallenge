import React from 'react';
import Radium, { StyleRoot } from 'radium';
import { browserHistory } from 'react-router';


// * material-ui
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

import BasicDialog from '../../../../shared-components/basic-dialog';
import colorPallete from '../../../../util/styles/color-pallete'

import PizzaNewContainer from '../../new/container/new';
import PizzaListItem from '../components/list-item';


const styles = {    
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    headerText: {
        color: colorPallete.primaryTextColor,
        fontSize: '24px',
        margin: '10px 0px 0px 10px'
    },
    loadingStyle: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px'
    }

};

// *** dialog options
const basicDialogOpts = {
    title : 'Do you want to remove',
    subtitle : 'This User will be permanently removed.',
    highlightTitle : null,
    open : false,
    closeDialog : null,
    actions: []    
};

@Radium
class PizzaList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            basicDialogOpts: basicDialogOpts,
            openNewPizzaDiag: false
        }
    }

    onBack() {
        browserHistory.push('/');
    }

    onOpenNewPizzaDiag() {
        this.setState({
            openNewPizzaDiag: true
        })
    }

    onCloseNewPizzaDiag() {
        this.setState({
            openNewPizzaDiag: false
        })
    }

    onDisplayPizzas() {
        const { listOfCalulations } = this.props;

        return listOfCalulations.map( (x, index) => (
           <PizzaListItem 
                 key={index}
                 pizza={x}                
            />
        ));
    }

    render() {
        const { userId } = this.props;

        return(
            <StyleRoot>
                <div>
                    <FlatButton hoverColor='none' label="BACK TO LIST OF USERS" onTouchTap={this.onBack.bind(this)} />
                </div>
                  <div style={styles.header}>
                    <label style={styles.headerText}> List of Calculations </label>

                    <div style={{ display: 'flex' }}>

                        <FloatingActionButton title="ADD NEW ORDER" secondary={true} style={{ marginRight: '10px' }} 
                         onTouchTap={this.onOpenNewPizzaDiag.bind(this)}
                        >
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
              

                </div>

                <Table>
                    <TableHeader
                        adjustForCheckbox={false}
                        displaySelectAll={false}>
                        <TableRow>
                            {/* <TableHeaderColumn>ID</TableHeaderColumn> */}
                            <TableHeaderColumn>NUMBER OF PEOPLE</TableHeaderColumn>
                            <TableHeaderColumn>NUMBER OF FLAVOURS</TableHeaderColumn>
                            <TableHeaderColumn>NUMBER OF MAXIMUM SLICES PER PERSON</TableHeaderColumn>
                            <TableHeaderColumn>NUMBER OF SLICES</TableHeaderColumn>
                            <TableHeaderColumn>NUMBER OF PIZZA</TableHeaderColumn>
                            {/* <TableHeaderColumn></TableHeaderColumn> */}
                        </TableRow>

                    </TableHeader>

                    <TableBody
                        showRowHover={true}
                        displayRowCheckbox={false}>                        
                        {/* {!userListRequestPending ? this.onDisplayListOfUsers() : <div style={styles.loadingStyle}> <CircularProgress size={80} thickness={5} /> </div> } */}
                        {this.onDisplayPizzas()}
                    </TableBody>
                </Table>

                { /** BASIC DIALOG */ } 
                <BasicDialog
                    basicDialogOpts={ this.state.basicDialogOpts }
                    // closeDialog={ this.onCloseBasicDialog.bind(this) }
                    // isPending={ basicDialogRequestPending }
                />   

                {/* New Order Pizza */}
                <PizzaNewContainer
                    userId={userId}
                    openNewPizzaDiag={this.state.openNewPizzaDiag}
                    closeDialog={this.onCloseNewPizzaDiag.bind(this)}
                />
            </StyleRoot>
        )
    }
}


export default PizzaList;