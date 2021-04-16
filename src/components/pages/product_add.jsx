import axios from "axios";
import React, { Component  } from "react";
class product_add extends Component{
    state={
        product_name:'',
        subcategory_id:'',
        brand_id:null,
        category_id:'',
        description:'',
        quantity:'',
        price:'',
        status:'',
        offer_price:'',
        admin_id:'',
        image:'',
        message:'',
        category:[],
        brand:[],
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
        axios.get('brand')
        .then((response)=>{
            this.setState({
                brand:response.data.data,
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
        data.append('product_name', this.state.product_name);
        data.append('subcategory_id', this.state.subcategory_id);
        data.append('brand_id', this.state.brand_id);
        data.append('category_id', this.state.category_id);
        data.append('description', this.state.description);
        data.append('quantity', this.state.quantity);
        data.append('price', this.state.price);
        data.append('status', this.state.status);
        data.append('offer_price', this.state.offer_price);
        data.append('admin_id', this.state.admin_id);
        data.append('image', this.state.image);
        data.append('brand_id', this.state.brand_id);
        
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
    e=()=>{
        alert("HEloo");
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
                            <h1>Product Add</h1>
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
                            
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i class="fas fa-minus"></i>
                                </button>
                            </div>
                            </div>
                            {error}
                            <div class="card-body">
                            <form onSubmit={this.formsubmit}>
                            <div class="form-group"> 
        
                                <label for="inputName">Product_name</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({product_name:e.target.value})}}/>
                            </div>
                            <div class="form-group">
                                <label for="inputStatus">Brand Name</label>
                                <select id="inputStatus" class="form-control custom-select" onClick={this.ea} onChange={(e)=>{this.setState({category_id:e.target.value})}}>
                                        <option selected disabled>Select one</option>                             
                                    {this.state.brand.map((brand, index) => (                                   
                                        <option key={index.id} value={brand.id} >{brand.brand_name}</option>
                                    ))}                                          
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputName">Brand Name</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({brand_id:e.target.value})}}/>
                            </div>
                            <div class="form-group">
                                <label for="inputName">subcategory_id</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({subcategory_id:e.target.value})}}/>
                            </div>
                            
                            <div class="form-group">
                                <label for="inputName">category_id</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({category_id:e.target.value})}}/>
                            </div>
                            <div class="form-group">
                                <label for="inputName">description</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({description:e.target.value})}}/>
                            </div>
                            <div class="form-group">
                                <label for="inputName">quantity</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({quantity:e.target.value})}}/>
                            </div>
                            <div class="form-group">
                                <label for="inputName">price</label>
                                <input type="text" id="inputName" class="form-control" onChange={(e)=>{this.setState({price:e.target.value})}}/>
                            </div>
                            
                            <div class="form-group">
                                <label for="inputClientCompany">status</label><br></br>
                                <input type="file" id="inputClientCompany" class="" onChange={(e)=>{this.setState({subcategory_image:e.target.files[0]})}}/>
                            </div>
                            <div class="row">
                            <div class="form-group">
                                <label for="inputStatus">Ctegory Id</label>
                                <select id="inputStatus" class="form-control custom-select" onClick={this.ea} onChange={(e)=>{this.setState({category_id:e.target.value})}}>
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
export default product_add;
