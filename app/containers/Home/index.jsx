import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../actions/userinfo';
import Head from "../../components/Header/Head.js";
import Category from "../../components/Category/index";
import HomeAd from "../../components/HomeAd";
import Test from "../../components/Test";
class Index extends React.Component {
    render() {
        return (
            <div>
                <Test/>
                <Head />
                <Category/>
                <HomeAd/>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
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
)(Index)