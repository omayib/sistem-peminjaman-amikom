/**
 * Created by omayib on 01/03/17.
 */
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import React, { Component } from 'react';
import {KoleksiInventaris} from '../data/dummy-data-collection';

const selectRowProp = {
    mode: 'checkbox',
    onSelect: onRowSelect
};

function onRowSelect(row, isSelected, e){
    let rowStr='';
    for (const prop in row){
        rowStr += prop+':"'+row[prop]+'"';
    }
    console.log(e);
    alert(`is selected: ${isSelected}, ${rowStr}`);
}

export default class Step2 extends React.Component{
    render(){
        return(
            <BootstrapTable data={KoleksiInventaris} striped hover selectRow={selectRowProp}>
                <TableHeaderColumn dataField='name' isKey='true'>Inventaris yang tersedia</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}