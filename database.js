const pgp = require('pg-promise')();
var db = pgp("postgres://mqvvplpgwkwaww:bbe283a5d4ce86d696c0794bfca51f66630f8553225b83bff3880b169880250a@ec2-54-243-147-162.compute-1.amazonaws.com:5432/ddhq6akm6qbbtp?ssl=true")


function getAllProducts(req, res) {
    db.any('select * from orders INNER JOIN order_details ON orders.order_id = order_details.order_id INNER JOIN customers ON orders.customer_id = customers.customer_id INNER JOIN employees ON orders.employee_id = employees.employee_id')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


function getCustomer(req, res) {
    db.any('select count(order_id),customer_id from orders group by customer_id')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

module.exports = {
    getAllProducts,
    getCustomer
};