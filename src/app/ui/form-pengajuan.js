/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';

import StepZilla from 'react-stepzilla';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import '../../css/main.css';



export class FormPengajuan extends Component{
    constructor(props) {
        super(props);
        this.state = {};

        this.dataPengajuan = {
            savedToCloud: false,
            eventName:'',
            pic:'',
            borrowingDate:'',
            borrowingTime:'',
            returningDate:'',
            returningTime:'',
            inventories:[],
            note:''
        };
    }

    getStore() {
        return this.dataPengajuan;
    }

    updateStore(update) {
        this.dataPengajuan = {
            ...this.dataPengajuan,
            ...update,
        }

        console.log("update store eventName: "+this.dataPengajuan.eventName)
        console.log("update store pic: "+this.dataPengajuan.pic)
        console.log("update store borrowingDate: "+this.dataPengajuan.borrowingDate)
        console.log("update store returningDate: "+this.dataPengajuan.returningDate)
        console.log("update store borrowingTime:"+this.dataPengajuan.borrowingTime)
        console.log("update store returningTime: "+this.dataPengajuan.returningTime)
        console.log("update store inventories: "+JSON.stringify(this.dataPengajuan.inventories))
        console.log("update store note: "+this.dataPengajuan.note)
    }

    render(){

        const steps =
            [
                {name: '1. Agenda', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}}/>},
                {name: '2. Inventaris', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
                {name: '3. Catatan', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}}/>},
                {name: '4. Rangkuman', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
                {name: '5. Final', component: <Step5 />}
            ]

        return (
            <div className='step-progress' >
                <StepZilla steps={steps}
                           prevBtnOnLastStep={false}
                           preventEnterSubmission={true}
                           nextTextOnFinalActionStep={"Submit"}
                           stepsNavigation={true}
                           hocValidationAppliedTo={[4]}/>
            </div>);
    }
}