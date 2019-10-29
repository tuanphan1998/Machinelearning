import React from 'react'
import { base } from '../../Firebaseconntion';
import {Toaster, Intent} from '@blueprintjs/core'
import { withRouter } from 'react-router-dom'

class Register extends React.Component {
    constructor() {
        super();
    } 
    handleRegister = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            base.auth().createUserWithEmailAndPassword(email.value, password.value);
            this.props.history.push('/sign-in')
        }
        catch (err) {
            console.log(err)
        }
    }

     googleLogin =async () => {
        try {
            await base.auth().signInWithPopup(new base.auth.GoogleAuthProvider())
            this.setState({ redirect : true })
        }
        catch (err) {
            this.toaster.show({ intent: Intent.DANGER, message: 'Unable to sign in with google.' })
        }
    }

    render(){
        if(this.props.authenticated === true){
            this.props.history.push('/')
        }
        
        return (
            <div className="container">
                <br />  <p className="text-center">More bootstrap 4 components on <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a></p>
                <hr />
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        <p><Toaster ref={element => this.toaster = element} /></p>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <p>
                            <a href='#' onClick={()=>this.googleLogin()} className="btn btn-block" style={{backgroundColor:'#DD4B39'}}> <i className="fa fa-google" /> &nbsp; Login via Google</a>
                            <a href className="btn btn-block btn-facebook"> <i className="fa fa-facebook-f" /> &nbsp; Login via facebook</a>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form action="#" onSubmit={()=>this.handleRegister()}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                                </div>
                                <input name='email' className="form-control" placeholder="Email address" type="email" />
                            </div> {/* form-group// */}
                            
                            
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                </div>
                                <input name='password' className="form-control" placeholder="Create password" type="password" />
                            </div> {/* form-group// */}
                            
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Create Account</button>
                            </div> {/* form-group// */}
                            <p className="text-center">Have an account? <a href>Log In</a> </p>
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);