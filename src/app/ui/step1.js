/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';
import TimePicker from 'react-times';
import '../../css/timepicker.css';
import '../../css/main.css';

var DatePicker = require('react-datepicker');
import Moment from 'moment';

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

function onChange(value) {
    console.log(value && value.format(str));
}

export default class Step1 extends Component {

    constructor(props){
        super(props);
        let hour = '', minute = '';
        this.state = {
            startDate: Moment(),
            hour,
            minute
        };
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onHourChange = this.onHourChange.bind(this);
        this.onMinuteChange = this.onMinuteChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.isValidated = this.isValidated.bind(this);
    }
    _grabUserInput() {
        return {
            email: this.refs.email.value
        };
    }
    isValidated() {
        const userInput = this._grabUserInput(); // grab user entered vals
        let isDataValid = false;
        this.props.updateStore({
            ...userInput,
            savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
        });
        isDataValid = true;
        return isDataValid;
    }
    onHourChange(hour) {
        this.setState({ hour });
    }

    onMinuteChange(minute) {
        this.setState({ minute });
    }

    onTimeChange(time) {
        const [ hour, minute ] = time.split(':');
        this.setState({ hour, minute });
    }



    onFocusChange(focused) {
        this.setState({ focused });
    }

    render() {
        const { hour, minute} = this.state;
        return (
            <div className="step step1">
                <form  id="Form" className="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Nama acara :</label>
                        <div class="col-sm-10">
                            <input
                                ref="email" type="text" class="form-control" id="email" placeholder="nama acara"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Nama P.J. :</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="pic" placeholder="nama penanggung jawab"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Tanggal pinjam :</label>
                        <div class="col-sm-10">
                            <DatePicker />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Tanggal kembali :</label>
                        <div class="col-sm-10">
                            <DatePicker />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Waktu pengambilan :</label>
                        <div class="col-sm-10">
                            <TimePicker
                                theme="classic"
                                time={hour && minute ? `${hour}:${minute}` : null}
                                onTimeChange={this.onTimeChange.bind(this)}
                                onFocusChange={this.onFocusChange}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Waktu pengembalian :</label>
                        <div class="col-sm-10">
                            <TimePicker
                                theme="classic"
                                time={hour && minute ? `${hour}:${minute}` : null}
                                onTimeChange={this.onTimeChange.bind(this)}
                                onFocusChange={this.onFocusChange}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
