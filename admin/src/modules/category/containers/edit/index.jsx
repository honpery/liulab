/**
 * 编辑品类界面
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../actions';
import { CategoryEditComponent } from '../../components';

class CategoryEditApp extends Component {

    render() {
        return (<CategoryEditComponent {...this.props}></CategoryEditComponent>);
    }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {};
}

export const CategoryEditContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryEditApp);