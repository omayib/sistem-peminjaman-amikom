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
let inventaries = []

function addOrReplace( argh, obj ) {
    var index = -1;
    argh.filter((el, pos) => {
        if( el.uid == obj.uid )
            delete argh[index = pos];
        return true;
    });
    argh[index] = obj;
}
function onRowSelect(row, isSelected, e){
    alert(`Anda akan meminjam ${row['name']} ?`);
    console.log(row["id"]+"is selected "+isSelected)


    var newData = {"id":row['id'],"name":row['name']};

    if(isSelected){
        inventaries.push(newData);
    }else {
        //get index
        for (var ind in inventaries){
            var unselectedItem = inventaries[ind];
            if(row['id']===unselectedItem['id']){
                console.log("id: "+unselectedItem['id']+ "seharusnya dihapus")
                inventaries.splice(ind,1);
            }
        }
    }

    console.log(inventaries);
}

export default class Step2 extends React.Component{

    constructor(props){
        super(props)
        this.isValidated = this.isValidated.bind(this);
    }
    _grabUserInput() {
        return {
            inventories: inventaries
        };
    }
    isValidated(){
        console.log("is validated")
        const userInput = this._grabUserInput();
        let isDataValid = false;
        this.props.updateStore({
            ...userInput,
            savedToCloud: false
        });
        isDataValid = true;
        return isDataValid;
    }

    render(){
        return(
            <BootstrapTable data={KoleksiInventaris} striped hover selectRow={selectRowProp}>
                <TableHeaderColumn dataField='name' isKey='true'>Inventaris yang tersedia</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}