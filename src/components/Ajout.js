import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Ajout extends Component {
    constructor(props) {
        super(props);
        this.initState = {
            id:"",
            image:"",
            marque:"",
            modele:"",
            disponible:"",
            display:"",
            prix:0
         }
        this.state = this.initState
    }
    handleChange = (e)=>{
        const {name,type,checked,value} = e.target;
        const val = type ==='checkbox' ? checked: value;
        this.setState({[name]:val})
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let img = '';
        if(this.state.image){
          img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png|jpeg)/)[0];
        }
        let newSneakers = {
            marque : this.state.marque,
            modele : this.state.modele,
            prix: this.state.prix,
            disponible: this.state.disponible,
            image: img
        }
        this.props.handleSubmit(newSneakers)
        this.setState(this.initiateState)
        let currentList = JSON.parse(localStorage.getItem('sneakersKey'))
        const id = currentList[currentList.length - 1].id + 1;
        localStorage.setItem('sneakersKey', JSON.stringify([...currentList,{...newSneakers,id}]))
        toast("Sneakers ajouté avec succes!")
}
    render() { 
         
        return ( 
            <>          
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                            
                                    <div>
                                        <div className="col-md-12">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input type="file" className="form-control" id="image"  name="image" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Marque</label>
                                        <input type="text" className="form-control" value={this.state.marque} name="marque" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Modèle</label>
                                        <textarea type="text" className="form-control"  value={this.state.modele} name="modele" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Prix</label>
                                        <input type="text" className="form-control"  value={this.state.prix} name="prix" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Disponible</label>
                                        <input type="checkbox" className="form-check" value={this.state.disponible} name="disponible" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Afficher</label>
                                        <input type="checkbox" className="form-check" value={this.state.display} name="display" onChange={this.handleChange}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary offset-1 col-10">Submit</button>
                            </form>
                        </div>
                       
                        </div>
                    </div>
                    </div>
                    <ToastContainer />
            </>
         );
    }
}
 
export default Ajout;