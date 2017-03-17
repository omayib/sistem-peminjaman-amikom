/**
 * Created by omayib on 07/03/17.
 */
import React, { Component } from 'react';

export default class Step3 extends Component {

    constructor(props){
        super(props);

        var data= this.props.getStore();
        this.state = {
            note: data["note"]
        };
        this.isValidated = this.isValidated.bind(this);
    }

    _grabUserInput() {
        return {
            note:this.refs.note.value
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

    render() {
        return (
            <div>
                <div className="row">
                    <form id="Form" className="form-horizontal">
                        Comment: <textarea ref="note" name="comment" rows="5" cols="40">{this.state.note}</textarea>
                    </form>
                </div>
            </div>
        )
    }
}