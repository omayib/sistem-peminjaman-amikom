/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

export default class Step1 extends Component {

    constructor(props){
        super(props);
        this.setState({
            startDate: moment()
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <form id="Form" className="form-horizontal">
                        Nama acara :<input type="text" name="FirstName" value=""/><br/>
                        Nama penanggung jawab :<input type="text" name="FirstName" value=""/><br/>
                        Tanggal mulai:<DatePicker /><br/>
                        Tanggal selesai:<DatePicker />
                    </form>
                </div>
            </div>
        )
    }
}