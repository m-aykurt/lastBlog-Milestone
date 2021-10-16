import React from 'react'
import {Redirect, Route} from "react-router-dom"
import {useAuth} from "../context/AuthContext"

function PrivateRouter(props) {
    let {currentUser} = useAuth()
    return currentUser ? (
        <Route path={props.path} component={props.component} />
    ) : (
        <Redirect to="/login" />
    )
}

export default PrivateRouter
