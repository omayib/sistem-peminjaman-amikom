/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

export default class Step3 extends Component {

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
                        Comment: <textarea name="comment" rows="5" cols="40"></textarea>
                    </form>
                </div>
            </div>
        )
    }
}