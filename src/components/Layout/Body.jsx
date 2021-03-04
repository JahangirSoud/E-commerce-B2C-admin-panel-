import axios from 'axios';
import React, { Component  } from 'react';
import Headermenu from "./Headermenu";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from '../Home';

import Login from '../auth/Login';

class Body extends Component {
    state ={
        user:{},
    }
    componentDidMount(){
        axios.get('user')
        .then((response)=>{
            this.setUser(response.data);
   
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    setUser=(user)=>{
        this.setState({user:user});    
    }
    render() {
        return(
            <>
            {localStorage.getItem('token') &&(
                <div class="wrapper">
                    <Router>
                        <Headermenu user={this.state.user} setUser={this.setUser}/>
                        <Sidebar user={this.state.user} setUser={this.setUser}/>
                        <Switch>                           
                            <Route exact path="/"  component={() =>  <Home  user={this.state.user} setUser={this.setUser} />} />
                        </Switch>
                    </Router>                   
                </div>
            )}
           {!localStorage.getItem('token') &&(
                
                    <Router>
                        <Switch>                           
                            <Route exact path="/"  component={() =>  <Login  user={this.state.user} setUser={this.setUser} />} />
                        </Switch>
                    </Router>  

            )}
               
            </>
        )
    }

}
export default Body;