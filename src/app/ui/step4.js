/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';
var moment = require('moment');


export default class Step4 extends Component {

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
                        Nama acara :<label for="nama_acara">Pentas Seni Reog dan Warog</label><br/>
                        Nama penanggung jawab :<label for="pic">Jokowididi</label><br/>
                        Tanggal mulai:<label for="mulai">13 Agustus 2013</label><br/>
                        Tanggal selesai:<label for="selesai">16 Agustus 2013</label><br/>
                    </form>
                </div>
            </div>
        )
    }
}