import React from 'react'

const Presentation = () => {
    return (
        <div>
            
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="images/background.jpeg" className="d-block w-100" alt="..." style={{height:"500px"}}/>
                    </div>
                    <div className="carousel-item">
                    <img src="images/crossfit_caroussel.jpeg" className="d-block w-100" alt="..." style={{height:"500px"}}/>
                    </div>
                    <div className="carousel-item">
                    <img src="images/Tireur-délite.jpeg" className="d-block w-100" alt="..." style={{height:"500px"}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            <section className="col" >

            <div className="card col" >
                        <div className="card-header">
                        <h1><u>Compétences</u></h1>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Permis B et C</li>
                            <li className="list-group-item">Excel, Word, Powerpoint Outlook.</li>
                            <li className="list-group-item">Premiers secours civil niveau 1</li>
                            <li className="list-group-item">Secours au combat</li>
                            <li className="list-group-item">Programmation informatique:
                                <div className="col text-center">
                                    <img src="images/html.svg" alt=".."/><img src="images/css.png" alt=".."/><img src="images/js.png" alt=".."/>
                                </div>
                                <div className="col text-center">
                                <img src="images/mysql.svg" alt=".." /> <img src="images/react.jpeg" alt=".."/><img src="images/jquerry.jpg" alt=".."/><img src="images/php-logo.png" alt=".."/><img src="images/ajax.png" alt=".."/>
                                </div>
                            </li>
                           
                        </ul>
                    </div>     
           
                    <div className="card col" >
                        <div className="card-header">
                        <h1><u>Expériences</u></h1>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Armée de terre,Colmar 152 RI— Chef d’Equipe tireur d’élite février 2014  À février 2020</li>
                            <li className="list-group-item">Chef d’équipe combattant débarqué</li>
                            <li className="list-group-item">Tireur de précision</li>
                            <li className="list-group-item">Tireur d’élite, Chef d'équipe tireur d’élite</li>
                            <li className="list-group-item">Daco-bello, Massy — conducteur de ligne janvier  2010 à mai 2013</li>
                            <li className="list-group-item">Quick, Massy: Equipier Septembre 2008 à Novembre 2010</li>
                        </ul>
                    </div>
            
           
        </section>

        </div>
    )
}

export default Presentation
