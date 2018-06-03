import React from 'react';
import { Form } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/userAction'
import { encryptAES256WithSHA256Key, decryptAES256WithSHA256Key } from '../../store/secret';

class LoginForm extends React.Component {
    state = {
        id: 'talksis1',
        password: 'wjdakf0117!',
        loading: false,
        errors: null
    }
    onChangeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    onClickHandler = () => {
        this.setState({ loading: true });
        this.props.loginAction(this.state.id, this.state.password).then(res=>{
            this.setState({loading:false});
            this.props.history.push('/main')
        });
    }
    componentDidMount (){
        if(this.props.cookie!=='') this.props.history.push('/main');
    }
    render() {
        
        const { id, password, loading } = this.state;
        return (
            <div>
                <Form loading={loading}>
                    <Form.Input fluid
                        onChange={this.onChangeHandler}
                        label="ID"
                        value={id}
                        placeholder="ID를 입력하세요"
                        name="id"
                        type="text" />
                    <Form.Input fluid
                        onChange={this.onChangeHandler}
                        label="패스워드"
                        value={password}
                        placeholder="패스워드를 입력하세요"
                        name="password"
                        type="password" />
                    <Form.Button fluid
                        disabled={(id !== '' && password !== '') ? false : true}
                        onClick={this.onClickHandler}
                    >로그인</Form.Button>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cookie: state.user.cookie,
    data: state.user.data
})

export default connect(mapStateToProps, { loginAction })(LoginForm);