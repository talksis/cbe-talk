import React, { Fragment } from 'react';
import LoginHeader from '../components/Login/LoginHeader';
import LoginForm from '../components/Login/LoginForm';

export default ({ history }) => (
    <Fragment>
        <LoginHeader  />
        <LoginForm history={history}/>
    </Fragment>
)