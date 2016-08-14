/**
 * 订单模型
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../common/db');
const modelAction = require('../common/modelAction');

const OrderSchema = new Schema({
    




    create_time: {              // 创建时间
        type: Date,
        default: Date.now
    },
    update_time: {              // 更新时间
        type: Date,
        default: Date.now
    },
    isDeleted: {                // 软删除
        type: Boolean,
        default: false
    }
});

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = modelAction(OrderModel);