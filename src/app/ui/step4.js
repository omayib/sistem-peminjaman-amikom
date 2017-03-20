/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';


export default class Step4 extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <form id="Form" className="form-horizontal">
                        Acara :<label for="nama_acara">{this.props.getStore().eventName}</label><br/>
                        Nama penanggung jawab :<label for="pic">{this.props.getStore().pic}</label><br/>
                        Tanggal dipinjam:<label for="mulai">{this.props.getStore().borrowingDate}</label><br/>
                        Tanggal dikembalikan:<label for="selesai">{this.props.getStore().returningDate}</label><br/>
                        Waktu pengambilan:<label for="jamselesai">{this.props.getStore().borrowingTime}</label><br/>
                        Waktu pengembalian:<label for="jamselesai">{this.props.getStore().returningTime}</label><br/>
                        Catatan tambahan:<label for="catatan">{this.props.getStore().note}</label><br/>
                    </form>
                </div>
            </div>
        )
    }
}