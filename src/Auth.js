import React from 'react'
import {base} from './Firebaseconntion'

export const AuthContext = React.createContext();


export default class AuthProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentUser : null,
        }
    }

    componentWillMount() {
        base.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({currentUser : user})
            }
        })
    }

    render(){
        return(
            <AuthContext.Provider
            value={this.state.currentUser}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}