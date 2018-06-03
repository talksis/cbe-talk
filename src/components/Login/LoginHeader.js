import React from 'react';
import { Header, Image, Button } from 'semantic-ui-react'

const LoginHeader = () => (
    <div>
        <Image centered size='small' src='/assets/icon.png' />
        <Header as='h2' icon textAlign='center'>
            <Header.Content>
                충북소통메신저 기능 저하판
            </Header.Content>
        </Header>
    </div>
)

export default LoginHeader;
