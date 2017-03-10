/**
 * Created by omayib on 28/02/17.
 */
console.log("starting...")
import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Akun} from "./ui/akun";
import {Car} from "./ui/car";
import {CarDetail} from "./ui/car-detail";

import {Main} from "./ui/main";
import {About} from "./ui/about";
import {Peminjaman} from "./ui/peminjaman";
import {FormPengajuan} from "./ui/form-pengajuan";
import {data} from "./data/dummy-data-collection"
import {Inventaris} from "./ui/inventaris";

require('../css/main.css');


class App extends React.Component{

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Main}>
                    <Route path={"akun"} component={Akun}/>
                    <Route path={"inventaris"} component={Inventaris} data={data}/>
                    <Route path={"about"} component={About}/>
                    <Route path={"peminjaman"} component={Peminjaman}/>
                    <Route path={"pengajuan"} component={FormPengajuan}/>
                </Route>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"))