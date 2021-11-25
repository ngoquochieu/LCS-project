const express = require('express');
const homeRouter = require('./home');
const itemsRouter = require('./items');
const actionRouter = require('./action');
const userRouter = require('./user');
const adminRouter = require('./admin');

function route(app) {
    app.use('/admin', adminRouter);
    app.use('/user', userRouter);
    app.use('/action', actionRouter);
    app.use('/items', itemsRouter);
    app.use('/', homeRouter);
}

module.exports = route;
