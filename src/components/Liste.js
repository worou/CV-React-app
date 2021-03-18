import React from 'react';
import TextTransition, { presets } from "react-text-transition";
import {FaPencilAlt, FaRegTrashAlt} from 'react-icons/fa'
import {HiThumbDown, HiThumbUp} from 'react-icons/hi'
import {FcAddDatabase} from 'react-icons/fc'




const Liste = (props) => {



    const TEXTS = [
        "Bienvenue dans l'espace administrateur!",
        "Ici vous pouvez ajouter modifier ou supprimer des articles",
        "Enjoy your Job ;)"
      ];
      const [index, setIndex] = React.useState(0);
        React.useEffect(() => {
          const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 
          );
        }, []);

        const sneaker = JSON.parse(localStorage.getItem('sneakersKey'))
    

    return (
        <>  
            <h1 className="text-white bg-dark"><TextTransition 
              text={ TEXTS[index % TEXTS.length] }
              springConfig={ presets.wobbly }
            /></h1>
                            <table className="table table-striped mt-5">
                                <thead>
                                    <tr className="bg-secondary text-white">
                                    <th>Article</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Modele</th>
                                    <th scope="col">Prix</th>
                                    <th scope="col">Disponibilité</th>
                                    <th width="15%">Action</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    {props.rows.map((item,index)=>{
                                        return <tr key={item.id} className="text-white fw-bolder">
                                            <td>{index+1}</td><td>{item.marque}</td><td><img src={`images/${item.image}`} alt="logo" className="imglist"/></td><td className="art_admin"><p>{item.modele}</p></td><td>{item.prix}</td>
                                            <td>
                            {(item.disponible)
                            ?<HiThumbUp size={32} className="text-success"/>
                           :<HiThumbDown size={32} className="text-warning" />}</td><td>
                                <div className="form-check form-switch col-3">
                                    <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" checked={item.display} onChange={()=>{
                                        props.aff(item.id)
                                    }}/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Afficher</label>
                                
                                </div>
                                <div className="row">
                                
                       <button className="btn btn-success col-12" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={function (){
                                                props.handleEdit(index)
                                            }}>Edit <FaPencilAlt /> </button><button className="btn btn-danger col-12 mt-1 mb-1" onClick={()=>{
                                                (window.confirm('Confirmer la supression?'))
                                                ?props.handleDelete(index)
                                                :console.log('Supression annuler!')}
                                            }>Delete <FaRegTrashAlt/></button>
                                            </div>
                                            </td>    
                                        </tr>
                                    })}
                                    
                                    
                                </tbody>
                            </table>
                            <button className="btn btn-primary col-12"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ajouter un article <FcAddDatabase/></button>
                            
        </>
    )
}

export default Liste
