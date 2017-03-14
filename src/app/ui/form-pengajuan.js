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

        this.sampleStore = {
            email: '',
            gender: '',
            savedToCloud: false
        };
    }

    getStore() {
        return this.sampleStore;
    }

    updateStore(update) {
        this.sampleStore = {
            ...this.sampleStore,
            ...update,
        }

        console.log("update store"+this.sampleStore.email)
    }

    render(){

        const steps =
            [
                {name: '1. Agenda', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}}/>},
                {name: '2. Inventaris', component: <Step2 />},
                {name: '3. Catatan', component: <Step3 />},
                {name: '4. Rangkuman', component: <Step4 />},
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