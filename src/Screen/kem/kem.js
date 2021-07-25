import React from 'react';
import InputBox from '../../Components/InputBox/InputBox';
import HeaderNew from '../Dashboard/DashboardHeader';
const Kem =()=>{
    return(
        <div>
            
            <HeaderNew></HeaderNew>
             <InputBox Input label="Firstname"/>
             <InputBox Input label="Lastname"/>

        </div>
       
        
       
    )
}
export default Kem;