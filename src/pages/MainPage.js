import React from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import TreePage from './TreePage';
import MessagePage from './MessagePage';

class MainPage extends React.Component {
    onClickHandler = () => {
    }
    componentDidMount = () => {
        if(this.props.cookie==='') this.props.history.push('/');
    }
    render() {
        return (
            <div>
                main
                <Switch>
                    <Route path='/tree' component={TreePage}></Route>
                    <Route path='/' component={MessagePage}></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cookie: state.user.cookie
})

export default connect(mapStateToProps, null)(MainPage);