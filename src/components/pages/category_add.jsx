import axios from "axios";
import React, { Component  } from "react";
class category_add extends Component{
    state={
        category_name:'',
        description:'',
        category_image:null,
        message:'',
    }
    formsubmit =(e)=>{
        e.preventDefault();
        let data = new FormData();
        data.append('category_name', this.state.category_name);
        data.append('category_image', this.state.category_image);
        
        axios.post('category_store',data)
        .then((response)=>{
            this.setState({
                message:response.data.message,
            })
        }).catch ((error)=>{
            this.setState({
                message:error.data.message,
            })
        })
    }

    
    render(){
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
        return(
            <>
                <div class="content-wrapper">
                    <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Brand Add</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Category Add</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </section>
                    
                    <section class="content ">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="col-md-8 ">
                        <div class="card card-primary">
                            <div class="card-header">
                            <h3 class="card-title">Category Insert</h3>
                            {error}
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i class="fas fa-minus"></i>
                                </button>
                            </div>
                            </div>
                            <div class="card-body">
                            <form onSubmit={this.formsubmit}>
                            <div class="form-group">
                                <label for="inputName">Category Name</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({category_name:e.target.value})}}/>
                            </div>
                            
                            <div class="form-group">
                                <label for="inputClientCompany">Brand Image</label><br></br>
                                <input type="file" id="inputClientCompany" class="" onChange={(e)=>{this.setState({category_image:e.target.files[0]})}}/>
                            </div>
                            <div class="row">
                        <div class="col-12">
                        <button type="submit" class="btn btn-success float-right">Save</button>
                        
                        </div>
                    </div>

                            </form>
                            
                        </div>

                        </div>
                        </div>
                        
                       
                    </div>
                    
                    </section>

                    </div>
            </>
        )
    }
}
export default category_add;
