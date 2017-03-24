/**
 * Created by omayib on 10/03/17.
 */

import React, { Component } from 'react';
import InventarisService from '../data/InventarisService';

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

function mappingInventaris(inventaris) {
    var dataMapped = [];
    for (var index in inventaris){
        var item = inventaris[index];
        var obj = {
            id:item["id"],
            nama:item["nama"],
            jumlah:item["jumlah"],
            stock_minimum:item["stock_minimum"],
            untuk_mahasiswa:Array.from(item["access"]).includes("Mahasiswa")==true ? "Y":"N",
            untuk_dosen:Array.from(item["access"]).includes("Dosen")==true ? "Y":"N",
            untuk_karyawan:Array.from(item["access"]).includes("Karyawan")==true ? "Y":"N",
            untuk_buma:Array.from(item["access"]).includes("Buma")==true ? "Y":"N",
        }
        dataMapped.push(obj);
    }
    return dataMapped;
}
export class Inventaris extends React.Component{
    dataInventaris;
    constructor(props){
        super(props);
        this.state = {
            collections:''
        }
        InventarisService.get()
            .then((response)=>{
                this.dataInventaris = mappingInventaris(response);
                this.setState({
                    collections: this.dataInventaris
                });

            })

    }
    render(){
        return(
            <BootstrapTable data={this.state.collections} cellEdit={ cellEditProp }   deleteRow={ true } insertRow={true} striped hover selectRow={selectRowProp} options={ options }>
                <TableHeaderColumn row='0' width='75px' rowSpan='2'  dataField='id' isKey={true} autoValue>ID</TableHeaderColumn>
                <TableHeaderColumn row='0' width='250px'  rowSpan='2'  dataField='nama'>Inventaris</TableHeaderColumn>
                <TableHeaderColumn row='0' rowSpan='2'  dataField='jumlah'>Jumlah Ketersediaan</TableHeaderColumn>
                <TableHeaderColumn row='0' rowSpan='2'  dataField='stock_minimum' >Stock minimal</TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='4' headerAlign='center' >Hak peminjaman</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='untuk_mahasiswa' dataAlign='center' editable={ { type: 'checkbox', options: { values: 'Y:-' } } }>Mahasiswa</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='untuk_dosen' dataAlign='center'  editable={ { type: 'checkbox', options: { values: 'Y:-' } } }>Dosen</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='untuk_karyawan'dataAlign='center'  editable={ { type: 'checkbox', options: { values: 'Y:-' } } }>Karyawan</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='untuk_buma'dataAlign='center'  editable={ { type: 'checkbox', options: { values: 'Y:-' } } }>Buma</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}