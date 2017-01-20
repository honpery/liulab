/**
 * 到货组件
 */
import React, { Component } from 'react';
import { MANIFEST_STATUS } from '../../../../../constants/';
import {ManifestMenuItemComponent as Item} from '../item/';
import './style.scss';

export class Arrival extends Component {
    render() {
        let {list, xhttp} = this.props;
        return (
            <div className="manifest-menu-arrival menu-sec">
                <header>
                    <h3>未到货货单</h3>
                    <div className="actions">
                        <button className="ui button primary mini">已到货</button>
                    </div>
                </header>

                <ul>
                    {list.map((item, index) => (
                        <Item manifest={item} key={index}></Item>
                    ))}
                </ul>
            </div>
        );
    }
}