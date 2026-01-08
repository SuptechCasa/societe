import './App.css'
import Employe from './employe'
import { useState } from 'react'
function App() {
  const [showEmploye, setShowEmploye] = useState(false);
  const [employes,setEmployes]=useState([
    {nom:"Ali",age:30,salaire:9000},
    {nom:"Mohamed",age:45,salaire:7800},
  ])
  const toggle=()=>{setShowEmploye(!showEmploye)}

  const addEmploye=(employe)=>{
    setEmployes([...employes,employe])
  }

  const deleteEmploye=(e)=>{
    const index=e.target.parentElement.parentElement.rowIndex-1;
    const liste=[...employes];
    liste.splice(index,1);
    setEmployes(liste);
  }
  return (
    <>
    <button onClick={toggle}>{showEmploye?'-':'+'}</button>
     {showEmploye&&<Employe ajoutEmploye={addEmploye}/>}
     {/* Liste des employés */}
      <h2>Liste des employés</h2>
      <table border="1">
        <thead>
          <tr><th>Nom</th> <th>Âge</th><th>Salaire</th><th>Action</th></tr>
        </thead>
        <tbody>
          {
            employes.map(employe=>
            <tr key={employe.id}>
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
