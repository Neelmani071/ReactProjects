import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from '../Screen/Login/Login';
import Dashboard from '../Screen/Dashboard/Dashboard';
import Header from '../Components/Header/Header';
import Kem from '../Screen/kem/kem';
import DataScience from '../Screen/Dashboard/DataScience';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route path ="/" exact component={Login}/>
                    <Route path ="/dashboard" exact component ={Dashboard}/>
                    <Route path ="/kem" exact component ={Kem}/>
                    <Route path = "/DataScience" exact component ={DataScience}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;
