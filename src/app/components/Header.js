/**
 * Created by omayib on 28/02/17.
 */
import React from "react";
import {Link} from "react-router";
import '../../css/main.css';

export const Header =(props) => {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">SIPENIS</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="pull-right nav navbar-nav">
                            <li><Link  to="/akun" activeClassName="active">Akun</Link></li>
                            <li><Link  to="/inventaris" activeClassName="active">Inventaris</Link></li>
                            <li><Link  to="/peminjaman" activeClassName="active">Peminjaman</Link></li>
                            <li><Link  to="/about" activeClassName="active">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};