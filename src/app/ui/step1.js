/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';
import TimePicker from 'react-times';
import '../../css/timepicker.css';

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
            <div>
                <div className="row">
                    <form id="Form" className="form-horizontal">
                        Nama acara :<input type="text" name="FirstName" value=""/><br/>
                        Nama penanggung jawab :<input type="text" name="FirstName" value=""/><br/>
                        Tanggal pinjam:<DatePicker /><br/>
                        Tanggal kembali:<DatePicker /><br/>
                        Waktu peminjaman:<TimePicker
                                    theme="classic"
                                    time={hour && minute ? `${hour}:${minute}` : null}
                                    onTimeChange={this.onTimeChange.bind(this)}
                                    onFocusChange={this.onFocusChange}/> <br/>
                        Waktu pengembalian: <TimePicker
                                 theme="classic"
                                 time={hour && minute ? `${hour}:${minute}` : null}
                                 onTimeChange={this.onTimeChange.bind(this)}
                                 onFocusChange={this.onFocusChange}/> <br/>
                    </form>
                </div>
            </div>
        )
    }
}
