import React from 'react';
import {BrowserRouter,NavLink,Switch,Route, Redirect} from 'react-router-dom';
import Admin from './Admin';
import Accueil from './Accueil';
import Presentation from './Presentation';
import Login from './Login';
import Logout from './Logout';
import Contacts from './Contacts';
import Footer from './Footer'
import {FaUserCheck,FaUserLock,FaLockOpen,FaHome,FaHandshake} from "react-icons/fa"
import {GrContactInfo} from 'react-icons/gr'


const authenticate = ()=>{
    const d = new Date();
    const test = d.toLocaleDateString();
    if(test === sessionStorage.getItem('token')){
        return true;
    }else{
        return false;
    }
}

const Menu= () => {


        return ( 
            <>
                <BrowserRouter >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" activeClassName="active" to="/"><img src="../images/logoJordan.png" alt=".." /> MY Blog</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link " activeClassName="active" aria-current="page"to="/" exact><FaHome/> Accueil</NavLink></li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/presentation"><FaHandshake/>C.V Presentation </NavLink >
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/contacts"><GrContactInfo className="bg-white"/> Contacts</NavLink >
                        </li>
                    </ul>
                    <span className="navbar-text">
                        {authenticate()
                        ?<NavLink className="nav-link" to="/admin"><FaLockOpen/> Espace admin</NavLink>
                        :console.log("object")
                        }
                        {!authenticate()
                        ?<NavLink className="nav-link" to="/login"><FaUserCheck /> Connexion</NavLink>
                        :<NavLink className="nav-link" to="/logout"><FaUserLock /> Deconnexion</NavLink>
                        }
                        
                    </span>
                    </div>
                    </div>
                    </nav>
                    <Switch>
                        <Route path="/" component={Accueil} exact/>
                        <Route path="/admin" component={Admin}/>
                        <Route path='/presentation' component={Presentation} />
                        <Route path='/contacts' component={Contacts} />
                        <Route path='/login' component={Login} />
                        <Route path='/logout' component={Logout} />
                        <Redirect  from='/admin/reload' to="/admin" />

                        <Route path='/admin' render={()=>{
                            authenticate()
                            ?<Admin />
                            :(<Redirect to='/login' />)
                        }} />
                    </Switch>
                    
                    
                </BrowserRouter>
                <Footer/>
            </>
         );
    }

 
export default Menu;