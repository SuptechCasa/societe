import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
// Sample data  for employees
const employes = [
  {nom: "Ali", age: 30, salaire: 9000 },
  {nom: "Mohamed", age: 45, salaire: 8000 },
];
app.get('/employes', (req, res) => {
  res.json(employes);
});

app.post('/employes', express.json(), (req, res) => {
  const newEmploye = req.body;
  employes.push(newEmploye);
  res.status(201).json(newEmploye);
});

app.delete('/employes/:nom', (req, res) => {
  const nom = req.params.nom;
  const index = employes.findIndex(emp => emp.nom === nom);
    if (index !== -1) {
        employes.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Employé non trouvé' });
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});