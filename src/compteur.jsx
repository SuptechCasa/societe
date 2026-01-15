import  { useEffect, useState } from 'react';
export default function Compteur() {
    const [count, setCount] = useState(0);
    
    const lancerCompteur = () => {
      setCount(0);
    }
    useEffect(() => {
        if (count < 10) {
            const timer = setTimeout(() => {
                setCount(count + 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [count]);
    


    return (
      <div>
        <p>{count}</p>
        <button onClick={lancerCompteur}>
          Lancer le compteur
        </button>
      </div>
    );
  }