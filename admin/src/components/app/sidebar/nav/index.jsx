/**
 * 侧边栏导航
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import classname from 'classname';
import routes from '../../../../config/routes.json';
import './style.scss';

export class AppSidebarNavComponent extends Component {
	render() {

		return (
			<nav className="sidebar-nav">
				<ul>
					{routes
						.filter(topLevel => permission.modules.filter(item => item.key === topLevel.path)[0].allow)
						.map((item, index) => (
							<li key={index} className={classname({ active: item.path === this.props.routes[1].path })}>
								<Link to={item.path}>
									<i className={`fa fa-${item.icon}`}></i>
									<span className="title">{item.name}</span>
								</Link>
							</li>
						))}
				</ul>
			</nav>
		);
	}
}
