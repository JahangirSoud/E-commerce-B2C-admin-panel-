import axios from 'axios';
import React, { Component  } from 'react';
import Headermenu from "./Headermenu";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from '../Home';
import brand_add from '../pages/brand_add';
import Login from '../auth/Login';
import category_add from '../pages/category_add';
import subcategory_add from '../pages/subcategory_add';
import product_add from '../pages/product_add';

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
                            <Route exact path="/brand_add"  component={brand_add} />
                            <Route exact path="/category_add"  component={category_add} />
                            <Route exact path="/subcategory_add"  component={subcategory_add} />
                            <Route exact path="/product_add"  component={product_add} />
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