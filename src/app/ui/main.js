/**
 * Created by omayib on 01/03/17.
 */
import React from 'react';
import { Link } from 'react-router';
import {Header} from '../components/Header';

export class Main extends React.Component{
    render(){
        return (

            <div>
                <div>
                    <Header/>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        );
    }
}