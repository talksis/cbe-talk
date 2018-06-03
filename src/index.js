import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Provider } from "react-redux";
import store from './store/store'

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Container>
                    <App />
                </Container>
            </PersistGate>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
//registerServiceWorker();
