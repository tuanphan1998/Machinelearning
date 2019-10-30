import React from 'react'
import { base } from '../../Firebaseconntion'
import { Redirect } from 'react-router-dom'
import { Spinner } from '@blueprintjs/core'

export default class Logout extends React.Component{
    constructor() {
        super();
        this.state={
            redirect : false
        }
    }
    componentWillMount() {
        base.auth().signOut().then(user=>{
            this.setState({ redirect : true })
        })
    }
    render(){
        if(this.state.redirect === true){
            return <Redirect to='/sign-in' />
        }
        return (
            <div style={{textAlign : 'center' , position : 'absolute' , top:'25%',left :'50%'}}>
                <h3>Loading</h3>
                <Spinner />
            </div>
        )
    }
}