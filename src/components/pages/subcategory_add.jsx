import axios from "axios";
import React, { Component  } from "react";
class subcategory_add extends Component{
    state={
        subcategory_name:'',
        subcategory_image:null,
        category_id:'',
        message:'',
        category:[],
    }
    componentDidMount(){
        axios.get('category')
        .then((response)=>{
            this.setState({
                category:response.data.data,
            })
        }).catch ((error)=>{
            this.setState({
                message:error.data.message,
            })
        })
    }
    formsubmit =(e)=>{
        e.preventDefault();
        let data = new FormData();
        data.append('subcategory_name', this.state.subcategory_name);
        data.append('subcategory_image', this.state.subcategory_image);
        data.append('category_id', this.state.category_id);
        
        axios.post('subcategory_store',data)
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
                            <h1>Sub Category Add</h1>
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
                            <h3 class="card-title">Sub Category Insert</h3>
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
                                <label for="inputName">Sub Category Name</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({subcategory_name:e.target.value})}}/>
                            </div>
                            
                            <div class="form-group">
                                <label for="inputClientCompany">Sub Category Image</label><br></br>
                                <input type="file" id="inputClientCompany" class="" onChange={(e)=>{this.setState({subcategory_image:e.target.files[0]})}}/>
                            </div>
                            <div class="row">
                            <div class="form-group">
                                <label for="inputStatus">Ctegory Id</label>
                                <select id="inputStatus" class="form-control custom-select" onChange={(e)=>{this.setState({category_id:e.target.value})}}>
                                        <option selected disabled>Select one</option>                             
                                    {this.state.category.map((cat, index) => (                                   
                                        <option key={index.id} value={cat.id} >{cat.category_name}</option>
                                    ))}                                          
                                </select>
                            </div>
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
export default subcategory_add;
