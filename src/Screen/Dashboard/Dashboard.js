import React from 'react';
import InputBox from '../../Components/InputBox/InputBox';
import './Dashboard.css'
import Headernew from './DashboardHeader';


const Dashboard = () => {
    return(
        <div>
            <Headernew></Headernew>
             <InputBox Input label="UserName" />
             <InputBox Input label="Password" />
        </div>

    )
} 

export default Dashboard;