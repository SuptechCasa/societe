import { use, useState } from "react";

export default function Employe({ajoutEmploye}) {
    const [nom,setNom]=useState("")
    const [age,setAge]=useState(0)
    const [salaire,setSalaire]=useState(0)
    const addEmploye=(e)=>{
        e.preventDefault();
        ajoutEmploye({nom,age,salaire});
        nom.setNom("")
        age.setAge(0)
        salaire.setSalaire(0)
    }
    return (
        <>
        <h2>Ajout d'un employé</h2>
        <form>
            <input onChange={(e)=>setNom(e.target.value)} type="text" placeholder="Nom" />
            <input onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Âge" />
            <input onChange={(e)=>setSalaire(e.target.value)} type="number" placeholder="Salaire" />
            <button onClick={addEmploye}>Ajouter</button>
        </form>
        </>
    )
}