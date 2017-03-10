/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';
var moment = require('moment');


export default class Step5 extends Component {

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
                        Terimakasih
                    </form>
                </div>
            </div>
        )
    }
}