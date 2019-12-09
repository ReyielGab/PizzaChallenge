import React from 'react';
import Radium from 'radium';

// ** material-ui
import { TableRow, TableRowColumn } from 'material-ui/Table';



@Radium
class PizzaListItem extends React.Component{

  

    render() {        

        const { pizza } = this.props;
        return(
           
            <TableRow hoverable={true}>

            <TableRowColumn> {pizza.numberOfPeople} </TableRowColumn>

            <TableRowColumn> {pizza.flavours}  </TableRowColumn>
            <TableRowColumn> {pizza.maxSlices} </TableRowColumn>

            <TableRowColumn> {pizza.slices}  </TableRowColumn>
            <TableRowColumn> {Math.ceil(pizza.numberOfPizza)} </TableRowColumn>

        </TableRow>

        )
    }
}


export default PizzaListItem;