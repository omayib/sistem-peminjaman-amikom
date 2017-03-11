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
                    <TableHeaderColumn row='0' isKey dataField='id' rowSpan='2' >Id</TableHeaderColumn>
                    <TableHeaderColumn row='0' dataField='inventaris' rowSpan='2'>Inventaris</TableHeaderColumn>
                    <TableHeaderColumn row='0' dataField='pic' rowSpan='2' >P.I.C</TableHeaderColumn>
                    <TableHeaderColumn row='0' dataField='acara' rowSpan='2' >Acara</TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='2' headerAlign='center'>Tanggal</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='tanggal'  headerAlign='center'>pinjam</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='tanggal' headerAlign='center' >kembali</TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='2' headerAlign='center'>Waktu</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='jam' headerAlign='center' >pinjam</TableHeaderColumn>
                    <TableHeaderColumn row='1' dataField='jam' headerAlign='center' >kembali</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}