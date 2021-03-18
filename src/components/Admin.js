import React, { Component } from "react";
import Liste from "./Liste";
import Edit from "./Edit";
import Ajout from "./Ajout";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: JSON.parse(localStorage.getItem("sneakersKey")),
      editSneakers: { id: "", marque: "", modele: "", disponible: "", prix: "" ,display:""},
    };
  }

  componentDidMount = () => {
    let sneakers1 = JSON.parse(localStorage.getItem("sneakersKey"));
    if (!sneakers1 || sneakers1.length === 0) {
      localStorage.setItem("sneakersKey", JSON.stringify(this.state.sneakers));
      let sneakersRecup = JSON.parse(localStorage.getItem("sneakersKey"));
      this.setState({ sneakers: sneakersRecup });
    } else {
      let sneakers2 = JSON.parse(localStorage.getItem("sneakersKey"));
      this.setState({ sneakers: sneakers2 });
    }
  };
  removeArticle = index => {
    let newSneakersList = [...this.state.sneakers];
    const sneaker = newSneakersList.filter((v, i) => {
      return i !== index;
    });
    this.setState({ sneakers: sneaker }, () => {
      localStorage.setItem("sneakersKey", JSON.stringify(this.state.sneakers));
    });
    toast("Article supprimer",{className:"bg-warning text-white"});
  }; 
    
  
  addArticle = newSneaker => {
    let clonesneakers = [...this.state.sneakers, newSneaker];
    this.setState({ sneakers: clonesneakers });
  };
  handleItem = index => {
    const sEdit = this.state.sneakers[index];
    this.setState({ editSneakers: sEdit });
  };
  editArticle = art => {
    const newSneakersList = this.state.sneakers;
    newSneakersList.forEach((item, index) => {
      if (art.id === item.id) {
        newSneakersList[index] = art;
      }
    });
    this.setState({ editArt: art });
    localStorage.setItem("sneakersKey", JSON.stringify(this.state.sneakers));
  };
  affich = () => {
    const sauv = localStorage.getItem("sneakersKey");
    if (!sauv) {
      localStorage.setItem("sneakersKey", JSON.stringify(this.states.sneakers));
    }
  };
  handleDisplay =(id)=>{
    this.setState(prevState =>{
      const newShoes = prevState.sneakers.map((sneaker)=>{
        const newSneaker = {...sneaker}
        if(sneaker.id === id){
          newSneaker.display = !sneaker.display
        }
        return newSneaker
      })
      localStorage.setItem("sneakersKey", JSON.stringify(newShoes));
      return {...prevState,sneakers: newShoes}
    })
    
  }

  
  render() {
    return (
      <>
        <Liste
          rows={this.state.sneakers}
          handleDelete={this.removeArticle}
          handleEdit={this.handleItem}
          aff = {this.handleDisplay}
        />
        <Edit sneaker={this.state.editSneakers} handleSubmit={this.editArticle} />
        <Ajout handleSubmit={this.addArticle} />
        
      </>
    );
  }
}

export default Admin;
