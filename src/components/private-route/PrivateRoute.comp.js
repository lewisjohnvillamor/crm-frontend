import React from 'react'
import {Router, Navigate} from 'react-router-dom'


export const PrivateRoute = ({children, ...rest}) => {
    const isAuth =true;
  return (
            isAuth ? children :<Navigate to="/"/>  
  )
}
