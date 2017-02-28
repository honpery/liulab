/**
 * 品类路由
 */
import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import { CategoryContainer, CategoryAddContainer, CategoryDetailContainer, CategoryEditContainer } from '../containers';

export const CategoryRouter = (
    <Route path="category" name="品类" key="category" icon="book">
        <IndexRoute component={CategoryContainer}></IndexRoute>
        <Route path="add" name="新品类" component={CategoryAddContainer}></Route>
        <Route path=":category_id" name="详情" component={CategoryDetailContainer}></Route>
        <Route path=":category_id/edit" name="编辑" component={CategoryEditContainer}></Route>
    </Route>
);