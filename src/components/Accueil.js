import React from 'react';


const Accueil =()=> {
    

  
    
        const sneakers = JSON.parse(localStorage.getItem('sneakersKey'))
        
        
        return (
            
            <>
                <div className="p-5">
                <div className="container" id="anim">
                <div id="title">
                    <span id="A1" className="ti">A</span>
                    <span id="I" className="ti">I</span>
                    <span id="R1" className="ti">R </span>
                    <span id="J" className="ti">J</span>
                    <span id="O" className="ti">O</span>
                    <span id="R" className="ti">R</span>
                    <span id="D" className="ti">D</span>
                    <span id="A" className="ti">A</span>
                    <span id="N" className="ti">N</span>
                </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-1 container-fluid text-center">
                    {sneakers.map((sneaker, index) =>{
                        return sneaker.display && <div className="col" key={sneaker.id}>
                            <div className="card m-4 red" >
                                <img src={`images/air_jordan11.jpg`} className="card-img-top" alt="..."  height={600}/>
                                <div className="card-body">
                                <h5 className="card-title text-center">Modèle: {sneaker.modele}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Marque: {sneaker.marque}</li>
                                        <li className="list-group-item">Prix: {sneaker.prix}€</li>
                                        <li className="list-group-item"> {sneaker.disponible
                                    ?<button className=" btn btn-success "data-bs-toggle="modal" data-bs-target={`#num${index}`}>Commander</button>
                                    :<button disabled={true} className="btn btn-warning">Indisponible</button>
                                    }</li>
                                    </ul>
                                    <div className="card-footer text-end"><small className="text-muted">Sneakers N°00{sneaker.id}</small></div>
                                    
                                   
                                    
                                    <div className="modal fade" id={`num${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{sneaker.marque}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                        <div className="card mb-3 pay" >
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                <img src={`images/${sneaker.image}`} width="150" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Paiement de Sneakers 00{index + 1}</h5>
                                                    <form>
                                                        
                                                            
                                                            <input type="text" className="form-control mb-1" id="nom" placeholder="Entrez votre nom" />
                                                        
                                                          
                                                            <input type="text" className="form-control mb-1" id="adresse" placeholder="Entrez votre adresse" />
                                                       
                                                      
                                                           
                                                            <input type="text" className="form-control mb-1" id="nc" placeholder="Votre numéro de carte" />
                                                       
                                                           
                                                            <input type="date" className="form-control mb-1" id="dv" placeholder="Date de validites" />
                                                        
                                                           
                                                            <input type="text" className="form-control mb-1" id="cr" placeholder="Crypto" />
                                                     
                                                        <button type="submit" className="btn btn-outline-warning offset-8" data-bs-dismiss="modal">Valider</button>
                                                        </form>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        {/* <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div> */}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
            </div>
            </>
          );
    }


 
export default Accueil;