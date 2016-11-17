/**
 * 选择商品下单的确认界面
 */
import React, { Component } from 'react';
import './style.scss';
import classname from 'classname';
import DefaultCover from '../../../../public/images/huluwa.jpg';

export class BookSelectConfirmComponent extends Component {

	// 更改数量
	changeProductNum(product_id, changeNum) {
		this.props.addProduct(product_id, changeNum);
	}

	// 下单
	saveOrder(productList) {
		let {xhttp, entities, category, history} = this.props;
		let newData = {};

		for (let product_id in productList) {
			let num = productList[product_id];

			let category = newData[entities[product_id].category_id._id] = [];

			let productData = Object.assign({}, entities[product_id].data, { num });

			category.push(productData);
		}
		this.saveOrder(newData, result => {
			history.pushState(null, '/order/' + result.order_id);
		});
	}

	render() {
		let {entities, category, xhttp, product, changeBookState, bookPageState} = this.props;
		let {productList} = bookPageState;

		return (
			<div className="book-select-confirm-page">
				<header className="list-header">
					<a className="button ui labeled left icon confirm" onClick={changeBookState.bind(this, 'select')}><i className="left arrow icon"></i>选择产品</a>
				</header>

				<table className="ui table">
					<thead>
						<tr>
							<th>序号</th>
							<th>产品</th>
							<th>货号</th>
							<th>单价</th>
							<th>数量</th>
							<th>合计</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(productList).map((product_id, product_index) => (
							<tr key={product_index}>
								<td>{product_index + 1}</td>
								<td className="product">
									<img src={DefaultCover} />
									<span className="name">{entities[product_id].name}</span>
								</td>
								<td>{entities[product_id].code}</td>
								<td>{entities[product_id].unit_price}</td>
								<td>{productList[product_id]}</td>
								<td>{entities[product_id].unit_price * productList[product_id]}</td>
								<td>
									<a>移除</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className="btn-group">
					<button className="ui button primary" onClick={this.saveOrder.bind(this, productList)}>下单</button>
				</div>
			</div>
		);
	}

	// 创建订单
	createOrder(newData, cb) {
		this.props.xhttp({ action: 'create', api: 'order', data: { products: newData } }, cb);
	}
}
