/* 
* @Author: anchen
* @Date:   2017-07-16 11:50:01
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-16 17:12:49
*/
import React from "react";
import "./style.less";
export default class Head extends React.Component{
    constructor(){
        super();
        this.state = {
            city:"北京",
        }
    }
    componentWillMount(){
        var city = localStorage.getItem("city");
        console.log(city);
        if(city != null){
            this.setState({city:city});
        }
    }
    render(){
        return (
            <div className="head_box">
                城市：{this.state.city}
                <input type="text" placeholder="搜索"/>
                <span>登录</span>
            </div>
        );
    }

}