/**
 * 订单模块容器
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../actions';
import { RoleComponent } from '../../components';

class RoleApp extends Component {

    render() {
        return (<RoleComponent {...this.props}></RoleComponent>);
    }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    let result = {};
    Object.keys(actions).forEach(key => {
        if (typeof actions[key] === 'function') return result[key] = bindActionCreators(actions[key], dispatch);
        result[key] = bindActionCreators(
            Object.assign({}, ...Object.keys(actions[key]).map(ck => ({ [ck]: actions[key][ck] })))
            , dispatch
        );
    });
    return result;
}

export const RoleContainer = connect(mapStateToProps, mapDispatchToProps)(RoleApp);