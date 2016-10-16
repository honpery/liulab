/**
 * 模板模块容器
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {xhttp} from '../../actions/xhttp/';

class TemplateContainer extends Component {
	render() {
		return (<div>{React.cloneElement(this.props.children, this.props) }</div>);
	}
}


// 合并state
function mapStateToProps(state) {
	return state;
}

// 合并dispatch
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		xhttp
	}, dispatch);
}

export const TemplateApp = connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);