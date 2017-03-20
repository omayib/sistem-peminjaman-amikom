/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';
import TimePicker from 'react-times';
import '../../css/timepicker.css';
import '../../css/main.css';
import 'react-datepicker/dist/react-datepicker.css';

var DatePicker = require('react-datepicker');

import Moment from 'moment';

export default class Step1 extends Component {

    constructor(props){
        super(props);
        let borrowingDateFormated='';
        let returningDateFormated='';
        let borrowingTime = '';
        let returningTime = '';
        this.state = {
            borrowingDate: Moment(),
            returningDate: Moment(),
            borrowingTime: Moment().format('HH:mm'),
            returningTime: Moment().format('HH:mm')
        };
        this.onBorrowingDateChanged = this.onBorrowingDateChanged.bind(this);
        this.onReturningDateChanged = this.onReturningDateChanged.bind(this);
        this.onBorrowingTimeChanged = this.onBorrowingTimeChanged.bind(this);
        this.onReturningTimeChanged = this.onReturningTimeChanged.bind(this);
        this.isValidated = this.isValidated.bind(this);
    }
    _grabUserInput() {
        return {
            eventName: this.refs.eventName.value,
            pic: this.refs.pic.value,
            borrowingDate: this.state.borrowingDateFormated,
            returningDate: this.state.returningDateFormated,
            borrowingTime: this.state.borrowingTime,
            returningTime: this.state.returningTime
        };
    }
    isValidated() {
        const userInput = this._grabUserInput();
        let isDataValid = false;
        this.props.updateStore({
            ...userInput,
            savedToCloud: false
        });
        isDataValid = true;
        return isDataValid;
    }
    onBorrowingTimeChanged(time) {
        this.setState({
            borrowingTime: time
        });
    }
    onReturningTimeChanged(time) {
        this.setState({
            returningTime: time
        });
    }
    onBorrowingDateChanged(date){
        var a = date.format('DD/MM/YYYY');
        console.log(a)
        this.setState({
            borrowingDate: date,
            borrowingDateFormated: a
        });
    }
    onReturningDateChanged(date){
        var a = date.format('DD/MM/YYYY');
        console.log(a)
        this.setState({
            returningDate: date,
            returningDateFormated:a
        });
    }


    render() {
        return (
            <div className="step step1">
                <form  id="Form" className="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Nama acara :</label>
                        <div class="col-sm-10">
                            <input ref="eventName"
                                   type="text"
                                   class="form-control"
                                   id="email"
                                   placeholder="nama acara"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Nama P.J. :</label>
                        <div class="col-sm-10">
                            <input ref="pic"
                                   type="text"
                                   class="form-control"
                                   id="pic"
                                   placeholder="nama penanggung jawab"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Tanggal pinjam :</label>
                        <div class="col-sm-10">
                            <DatePicker
                                selected={this.state.borrowingDate}
                                onChange={this.onBorrowingDateChanged.bind(this)}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Tanggal kembali :</label>
                        <div class="col-sm-10">
                            <DatePicker
                                selected={this.state.returningDate}
                                onChange={this.onReturningDateChanged.bind(this)}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Waktu pengambilan :</label>
                        <div class="col-sm-10">
                            <TimePicker
                                theme="classic"
                                time={this.state.borrowingTime}
                                onTimeChange={this.onBorrowingTimeChanged.bind(this)}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Waktu pengembalian :</label>
                        <div class="col-sm-10">
                            <TimePicker
                                theme="classic"
                                time={this.state.returningTime}
                                onTimeChange={this.onReturningTimeChanged.bind(this)}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
