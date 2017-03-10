/**
 * Created by omayib on 10/03/17.
 */

import {KoleksiInventaris} from '../data/dummy-data-collection';
import React, { Component } from 'react';
const selectRowProp = {
    mode: 'checkbox',
    onSelect: onRowSelect
};
function onAfterInsertRow(row) {
    let newRowStr = '';

    for (const prop in row) {
        newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
}
function onAfterDeleteRow(rowKeys) {
    alert('The rowkey you drop: ' + rowKeys);
}
const options = {
    afterInsertRow: onAfterInsertRow ,  // A hook for after insert rows
    afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows
};
const cellEditProp = {
    mode: 'dbclick'
};
function onRowSelect(row, isSelected, e){
    let rowStr='';
    for (const prop in row){
        rowStr += prop+':"'+row[prop]+'"';
    }
    console.log(e);
    alert(`is selected: ${isSelected}, ${rowStr}`);
}

export class Inventaris extends React.Component{
    render(){
        return(
            <BootstrapTable data={KoleksiInventaris} cellEdit={ cellEditProp }   deleteRow={ true } insertRow={true} striped hover selectRow={selectRowProp} options={ options }>
                <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Inventaris</TableHeaderColumn>
                <TableHeaderColumn dataField='jumlah'>Jumlah</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}