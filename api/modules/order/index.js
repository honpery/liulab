/**
 * 订单控制器
 */
const _router = require('express').Router();
const utils = require('../../common/utils');
const orderHandlers = require('./handler');
const manifestHandlers = require('../manifest/handler');
const _ = require('lodash');

module.exports = _router

    // 批量下载订单
    .get('/download', (req, res) => {

    })

    // 获取订单列表
    .get('/', (req, res) => {
        orderHandlers.list(req.l_query)
            .then(orders => Promise.all(orders.map(order => manifestHandlers.list({ order_id: order._id })))
                .then(result => {
                    orders.forEach((order, index) => orders._doc.manifests = result[index]);
                    res.json(orders);
                }));
    })

    // 获取订单详情
    .get('/:order_id', (req, res) => {
        orderHandlers.detail(req.params.order_id)
            .then(result => res.json(result));
    })

    /**
     * 创建订单 [POST] /order
     * 
     * body {
     *     description   {string}     订单备注
     *     products      {Array}      产品数据
     * }
     * 
     * products {
     *      name,
     *      code,
     *      category_id,
     *      unit_price,
     *      num,
     *      attrs: []
     * }
     */
    .post('/', (req, res) => {
        let {description, products} = req.body;

        let newData = { description, create_user: req.session.user_id, products };

        orderHandlers.create(newData)
            .then(result => res.json(result));
    })


    // 更新订单
    .patch('/:order_id', (req, res) => {
        let {status, description, } = req.body;
    })
