import React from 'react'
import { useSelector } from 'react-redux';
import {Route, useNavigate} from "react-router-dom";

function Protect({ element:Component, ...rest}) {
    const user_status = useSelector(
        (state) => state.login.user_status
      );
    let navigate = useNavigate();
    return (
        <Route {...rest} render = {(props)=>{
            if(user_status){
                return <Component />
            }else{
                navigate('/')
            }
        }
        }/>
    )
}

export default Protect
