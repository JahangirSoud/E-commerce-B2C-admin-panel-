import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import axios from "axios";
import { Redirect } from 'react-router-dom';
class Login extends Component {
    state={
        email:'',
        password:'',
        message:'',
        loggedIn:false,
    }

    //after form submit
    formSubmit  = (e) =>{
        e.preventDefault();
        const data={
            email:this.state.email,
            password:this.state.password
        }

        axios.post('login', data)
          .then((response)=> {
                localStorage.setItem('token',response.data.token);  
                this.setState({
                    loggedIn:true,
                })
                this.props.setUser(response.data.user);

          })
          .catch( (error) => {
            this.setState({message:error.response.data.message});
          });
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect  to={'/'} />
        }

         //checking authorization
         if(localStorage.getItem('token')){
            return <Redirect  to={'/'} />
        }
        let error="";
        if(this.state.message){
            error=(
                <div>
                    <div class="alert alert-danger" role="alert">
                        {this.state.message}
                    </div>
                </div>
            )
        }

        return (
            <>
            <div class="hold-transition login-page">
                <div class="login-box">
                <div class="login-logo">
                    <a><b>Admin</b>Login</a>
                </div>

                <div class="card">
                    <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>
                    {error}    
                    <form onSubmit={this.formSubmit}>
                        <div class="input-group mb-3">
                        <input class="form-control" placeholder="Email Address" type="email" class="form-control" name="email" aria-describedby="emailHelp"  required  onChange={(e)=>{this.setState({email:e.target.value})}}/>
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input placeholder="Password" placeholder="Password" type="password" class="form-control" name="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                            <input type="checkbox" id="remember"/>
                            <label for="remember">
                                Remember Me
                            </label>
                            </div>
                        </div>

                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>

                        </div>
                    </form>
                    </div>

                </div>
                </div>
                </div>





		
	


            
                    
            </>
        )
    }
}

export default Login
