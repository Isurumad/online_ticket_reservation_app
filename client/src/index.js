import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import configureStore from './redux/store';
import AppRouter from './AppRouter';
import store from './store'


console.log(store.getState());

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.register();
