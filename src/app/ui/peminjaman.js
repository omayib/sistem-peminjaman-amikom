import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import React, { Component } from 'react';
import {Link} from "react-router";
import {TransaksiPeminjaman} from '../data/dummy-data-collection';

require('../../css/react-bootstrap-table-all.min.css');
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

export class Peminjaman extends React.Component{
    render(){
        return(
            <div>
                <Link  to="/pengajuan" activeClassName="active">Buat pengajuan baru</Link>
                <BootstrapTable data={TransaksiPeminjaman} striped hover selectRow={selectRowProp}>
                    <TableHeaderColumn isKey dataField='id' >Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='pic' >Penanggung Jawab</TableHeaderColumn>
                    <TableHeaderColumn dataField='acara' >Acara</TableHeaderColumn>
                    <TableHeaderColumn dataField='inventaris' >Inventaris</TableHeaderColumn>
                    <TableHeaderColumn dataField='tanggal' >Tanggal</TableHeaderColumn>
                    <TableHeaderColumn dataField='jam' >Waktu</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}