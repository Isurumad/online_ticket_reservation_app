import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReservationApp from './components/ReservationApp'
import CreateUser from './components/crateUser/CreateUser'
import Signin from './components/Signin'
import Header from './components/Header'
import Schedule from './components/TrainSshedules/Schedule'
import Advertistment from './components/Advertistment';

const AppRouter= () =>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' exact={true} component={ReservationApp}/>
                <Route path='/signup' exact={true} component={CreateUser}/>
                <Route path='/signin' exact={true} component={Signin}/>
                <Route path='/schedules' exact={true} component={Schedule}/>
                <Route path='/advertistments' extact={true} component={Advertistment}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
