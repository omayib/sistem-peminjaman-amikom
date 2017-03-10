/**
 * Created by omayib on 01/03/17.
 */
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import React, { Component } from 'react';
import {Accounts} from '../data/dummy-data-collection';

const selectRowProp = {
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

export class Akun extends React.Component{
    render(){
        return(
            <BootstrapTable data={Accounts} striped hover selectRow={selectRowProp}>
                <TableHeaderColumn isKey dataField='name'>Nama</TableHeaderColumn>
                <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                <TableHeaderColumn dataField='department'>Bagian</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}