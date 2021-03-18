import React,{Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Edit extends Component {
    constructor(props) {
        super(props);
        this.initState = {
            id: this.props.sneaker.id,
            image: this.props.sneaker.image,
            marque: this.props.sneaker.marque,
            modele: this.props.sneaker.modele,
            prix: this.props.sneaker.prix,
            disponible: this.props.sneaker.disponible,
            display:this.props.sneaker.display
        }
        this.state = this.initState 
    }
    handleChange = (e) =>{
        const {name,value,checked,type} = e.target;
        const val = type === "checkbox"?checked :value;
        this.setState({[name]:val})
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0];
        let newArt = {
            id: this.state.id,
            marque: this.state.marque,
            modele : this.state.modele,
            prix : this.state.prix,
            disponible: this.state.disponible,
            image: img,
            display: this.state.display
        }
        this.props.handleSubmit(newArt)
        toast("Article modifié avec succes!", {className:"bg-info text-dark"})
    }
    componentDidUpdate= ()=>{
        const id = this.props.sneaker.id;
        if(id !== this.state.id){
            this.setState(this.props.sneaker);
        }
    }
    render() { 
        const {marque,modele,prix,disponible,display} = this.state
            return ( 
                <>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img src={`images/${this.state.image}`} alt="..."/>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="col-md-12">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input type="file" className="form-control" id="img"  name="image" onChange={this.handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Marque</label>
                                            <input type="text" className="form-control"  aria-describedby="emailHelp" name="marque" value={marque} onChange={this.handleChange}/>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Modele</label>
                                            <textarea type="text" className="form-control"  value={modele} name="modele" onChange={this.handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Prix</label>
                                            <input type="text" className="form-control"  value={prix} name="prix" onChange={this.handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Disponible</label>
                                            <input type="checkbox" className="form-check"  checked={disponible} name="disponible" onChange={this.handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Afficher</label>
                                            <input type="checkbox" className="form-check"  checked={display} name="display" onChange={this.handleChange}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary offset-1 col-10">Submit</button>
                                    </form>
                                </div>
                            
                        </div>
                    </div>
                    </div>
                    </>
            )
    }
}
 



export default Edit;
    
   
       

 