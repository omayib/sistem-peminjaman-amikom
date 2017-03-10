/**
 * Created by omayib on 10/03/17.
 */
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

const steps =
    [
        {name: 'Agenda', component: <Step1 />},
        {name: 'Inventaris', component: <Step2 />},
        {name: 'Catatan', component: <Step3 />},
        {name: 'Rangkuman', component: <Step4 />},
        {name: 'Final', component: <Step5 />}
    ]

export class FormPengajuan extends Component{
    render(){
        return (
            <div className='step-progress' >
                <StepZilla steps={steps}
                           prevBtnOnLastStep={true}
                           preventEnterSubmission={true}
                           nextTextOnFinalActionStep={"Submit"}
                           stepsNavigation={true}
                           hocValidationAppliedTo={[4]}/>
            </div>);
    }
}