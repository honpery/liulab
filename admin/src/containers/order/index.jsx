/**
 * 订单模块容器
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {xhttp} from '../../actions/xhttp/';



class OrderContainer extends Component {
	render() {
		return (<div>{React.cloneElement(this.props.children, this.props) }</div>);
	}
}

function mapStateToProps (state) {
	return state;
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		xhttp
	}, dispatch);
}




export const OrderApp = connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
