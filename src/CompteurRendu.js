import { useRef, useEffect } from 'react';

function CompteurRendu() {
  // Cette ref permet de mémoriser le nombre de rendus
  const compteur = useRef(0);

  useEffect(() => {
    compteur.current += 1;

    console.log(`Le composant s'est affiché ${compteur.current} fois.`);
  });

  return <div>Vérifie la console pour suivre les rendus du composant.</div>;
}

export default CompteurRendu;