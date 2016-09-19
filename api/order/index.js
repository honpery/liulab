/**
 * 订单控制器
 */
const express = require('express');
const _router = express.Router();
const orderModelActions = require('./actions');
const xres = require('../common/xres');
const async = require('async');
const fs = require('fs');
const path = require('path');


// 订单列表/详情
_router.get('/:order_id?', (req, res) => {
    let { order_id } = req.params;
    if (!order_id) {
        // list
        orderModelActions.list({}, (result) => {
            res.json(xres({CODE: 0}, result));
        });
    } else {
        // detail
        orderModelActions.detail(order_id, {}, (result)=> {
            res.json(xres({CODE: 0}, result));
        });
    }
});


// 创建订单
_router.post('/', (req, res) => {
    let {products} = req.body;
    let d = new Date();
    let order_id = d.getFullYear() + ''
                 + d.getMonth()  + ''
                 + d.getDate() + ''
                 + d.getHours() + ''
                 + d.getMinutes() + ''
                 + d.getSeconds() + ''
                 + d.getMilliseconds();

    // todo
    let user_id = '57c319dc640be57907fb3dd3';

    let newData = {
        order_id,
        products,
        user_id,
    };

    // 添加初始状态
    newData.products.map((sheet) => {

        sheet.data.map((data) => {
            data.progress = data.progress || [];
            data.progress.push({
                status: 'pending',
                time: d
            });
        });
    });


    orderModelActions.create(newData, (result) => {
        res.json(xres({CODE: 0}, result));
    });
});


// 修改订单
_router.patch('/:order_id', (req, res) => {
    let {order_id} = req.params;
    // 当前订单
    orderModelActions.detail(order_id, {}, (result) => {

    });
});

// 审核
_router.patch('/:order_id/check', (req, res) => {
    let {order_id} = req.params;

    orderModelActions.detail
});

//


module.exports = _router;
