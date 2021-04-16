import axios from "axios";
import React, { Component  } from "react";
class brand_add extends Component{
    state={
        brand_name:'',
        description:'',
        brand_image:null,
        message:'',
    }
    formsubmit =(e)=>{
        e.preventDefault();
        let data = new FormData();
        data.append('brand_name', this.state.brand_name);
        data.append('description', this.state.description);
        data.append('brand_image', this.state.brand_image);
        
        axios.post('brand_store',data)
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
                            <li class="breadcrumb-item active">Brand Add</li>
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
                            <h3 class="card-title">Insert</h3>
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
                                <label for="inputName">Brand Name</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({brand_name:e.target.value})}}/>
                            </div>
                            <div class="form-group">
                                <label for="inputDescription">Brand Description</label>
                                <textarea id="inputDescription" class="form-control" rows="4"onChange={(e)=>{this.setState({description:e.target.value})}}></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label for="inputClientCompany">Brand Image</label><br></br>
                                <input type="file" id="inputClientCompany" class="" onChange={(e)=>{this.setState({brand_image:e.target.files[0]})}}/>
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
export default brand_add;
