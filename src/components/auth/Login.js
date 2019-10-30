import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { base } from '../../Firebaseconntion';
import { Toaster, Intent } from '@blueprintjs/core'

const providers = {
    googleProvider: new base.auth.GoogleAuthProvider(),
}

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect : false
        }
    }

    handleLogin = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await base.auth().setPersistence(base.auth.Auth.Persistence.SESSION)
            .then(()=>{
                return base.auth().signInWithEmailAndPassword(email.value,password.value);
            });
            this.setState({ redirect : true })
        }
        catch (err) {
            this.toaster.show({ intent: Intent.DANGER, message: err.message })
        }
    }

    googleLogin =async () => {
        try {
            await base.auth().signInWithPopup(providers.googleProvider)
            this.setState({ redirect : true })
        }
        catch (err) {
            this.toaster.show({ intent: Intent.DANGER, message: 'Unable to sign in with google.' })
        }
    }

    facebookLogin = async ()=>{
        try {
            await base.auth().signInWithPopup(providers.googleProvider)
            this.setState({ redirect : true })
        }
        catch (err) {
            this.toaster.show({ intent: Intent.DANGER, message: 'Unable to sign in with google.' })
        }
    }
    render() {
        if(this.props.authenticated === true){
            return <Redirect to='/' />
        }
        if(this.state.redirect === true){
            // this.props.history.push('/');
            return <Redirect to='/' />
        }
        return (
            
            <div className="container">
            <br />  <p className="text-center">More bootstrap 4 components on <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a></p>
            <hr />
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                    <h4 className="card-title mt-3 text-center"><Toaster ref={element=>this.toaster=element} /></h4>
                    <p style={{margin:"10px 0 10px"}}>
                        <a href="#" style={{backgroundColor:'#DD4B39'}} onClick={() => this.googleLogin()} className="btn btn-block text-white"> <i className="fa fa-google" /> &nbsp; Login via Google</a>
                        <a href="#"  className="btn btn-block btn-facebook"> <i className="fa fa-facebook-f" /> &nbsp; Login via facebook</a>
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>
                    <form action="#" onSubmit={event=>this.handleLogin(event)}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                            </div>
                            <input name='email' defaultValue="laquyettam1@gmail.com" className="form-control" placeholder="Email address" type="email" />
                        </div> {/* form-group// */}
                        
                        
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                            <input name='password' className="form-control" placeholder="Create password" type="password" />
                        </div> {/* form-group// */}
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Login</button>
                        </div> {/* form-group// */}
                        <p className="text-center">Don't have an account?<Link to="/sign-up">Sign Up</Link> </p>
                    </form>
                </article>
            </div>
        </div>
        )
    }


}
export default (Login);