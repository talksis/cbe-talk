import React, { } from 'react';
import { Route, Router,Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NotMatchPage from './pages/NotMatchPage';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/main' exact component={MainPage}/>
        <Route path='/' exact component={LoginPage} />
        <Route render={({history})=><NotMatchPage history={history}></NotMatchPage>} />
      </Switch>
    )
  }
}

export default App;
