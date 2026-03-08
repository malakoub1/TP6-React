import { useState, useEffect } from 'react';

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    // L'intervalle augmente le temps chaque seconde
    const id = setInterval(() => {
      setSecondes((valeurPrecedente) => valeurPrecedente + 1);
    }, 1000);

    // Nettoyage pour arrêter l'intervalle
    return () => clearInterval(id);
  }, []);

  return <p>Durée écoulée : {secondes} seconde(s)</p>;
}

export default Timer;