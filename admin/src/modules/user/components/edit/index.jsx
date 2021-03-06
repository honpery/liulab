/**
 * edit user.
 */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormSelect, Button, ButtonGroup, Form } from 'semantic-ui-react';
import { UploadImage } from '../../../common';
import { Link } from 'react-router-dom';
import './style.scss';

@reduxForm({
    form: 'user_edit'
})
export class UserEdit extends React.Component {
    render() {
        let { role = { items: [] }, entities, handleSubmit, user } = this.props;

        let roleOptions = role.items.map((_id, index) => ({ key: index, text: entities[_id].name, value: _id }));

        return (
            <Form className="user-edit">
                <UploadImage className="logo"></UploadImage>
                <Field component={ FormSelect } label="角色" name="role" options={ roleOptions }></Field>
                <Field component={ FormInput } label="姓名" name="name"></Field>
                <Field component={ FormInput } label="账号" name="username"></Field>
                <Field component={ FormInput } label="密码" name="password" type="password"></Field>
                <Field component={ FormInput } label="确认密码" name="pwdrepeat" type="password"></Field>
                <Field component={ FormInput } label="联系方式" name="phone"></Field>
                <ButtonGroup>
                    <Button loading={ user && user.fetching.create } type="button" primary={ true } onClick={ handleSubmit }>保存</Button>
                    <Link className="ui button red" to="/user">取消</Link>
                </ButtonGroup>
            </Form>
        );
    }
}