import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import userinfoActions from "../../actions/userinfo";
class Test extends  React.Component{
    constructor(){
        super();
    }
    componentWillMount(){

    }
    add(e){
        console.log(e);
    }
    render(){
        return(
            <div>
                <a onClick={this.add.bind(this,1)} key={1} href="javascript:;">新闻</a>
                <a onClick={this.add.bind(this,2)} key={2} href="javascript:;">游戏</a>
                <a onClick={this.add.bind(this,3)} key={3} href="javascript:;">客户端</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state",state);
    return {
        // userinfo: state.TEST
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)