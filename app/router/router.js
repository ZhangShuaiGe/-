/* 
* @Author: anchen
* @Date:   2017-07-16 11:54:22
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-16 16:37:01
*/
import React from "react";
import {Router,Route,hashHistory} from "react-router";
import Index from "../containers/Home/index";
import City from "../components/City";
export default class router extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" components={Index}>
                    <Route path="/city" components={City}></Route>
                </Route>
            </Router>
        );
    }
}