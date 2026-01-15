import axios from 'axios';
import './App.css'
import Compteur from './compteur';
import Employe from './employe'
import { useState } from 'react'
function App() {
  const [showEmploye, setShowEmploye] = useState(false);
  const [employes,setEmployes]=useState([])
  const toggle=()=>{setShowEmploye(!showEmploye)}

  axios.get('http://localhost:3000/employes')
    .then(response=>{
      setEmployes(response.data)
    })
    .catch(error=>{
      console.error('Erreur lors de la récupération des employés:', error);
    });

  const addEmploye=(employe)=>{
    axios.post('http://localhost:3000/employes', employe)
      .then(response=>{
        setEmployes([...employes, response.data]);
      })
      .catch(error=>{
        console.error('Erreur lors de l\'ajout de l\'employé:', error);
      });
  }

  const deleteEmploye=(e)=>{
    
  }
  return (
    <>
    <Compteur/>
    <button onClick={toggle}>{showEmploye?'-':'+'}</button>
     {showEmploye&&<Employe ajoutEmploye={addEmploye}/>}
     {/* Liste des employés */}
      <h2>Liste des employés</h2>
      <table border="1">
        <thead>
          <tr><th>Nom</th><th>Âge</th><th>Salaire</th><th>Action</th></tr>
        </thead>
        <tbody>
          {employes.map(employe=>
            <tr key={employe.nom}>
              <td>{employe.nom}</td>
              <td>{employe.age}</td>
              <td>{employe.salaire}</td>
              <td><button onClick={deleteEmploye}>Supprimer</button></td>
            </tr>)
          }
          </tbody>
      </table>
    </>
  )
}

export default App
