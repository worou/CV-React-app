
import './App.css'
import './bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';




function App() {
 const sneakers = localStorage.getItem('sneakersKey')
 if(!sneakers || JSON.parse(sneakers).length === 0){
   const sneakers = [
    {id:1001, marque:"JORDAN", modele:'Retro 11 Hairess', image:'jordan11.jpg', disponible:true, prix:320,display:true},
    {id:1002, marque:"JORDAN", modele:'Retro 1 High J Balvin', image:'jordan1.jpg', disponible:false, prix:680,display:true},
    {id:1003, marque:"JORDAN", modele:'Retro 6 DMP', image:'jordan6.jpg', disponible:true, prix:280,display:true},
    {id:1004, marque:"JORDAN", modele:'Retro 4 Metalic Red', image:'jordan4.jpg', disponible:false, prix:320,display:false}
  ]
   localStorage.setItem('sneakersKey',JSON.stringify(sneakers))
 }
 
  return (
    <>

      <Menu />
      
    </>
  );
}

export default App;
